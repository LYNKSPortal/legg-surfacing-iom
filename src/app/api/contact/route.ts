import { NextResponse } from "next/server";
import {
  ALLOWED_PHOTO_TYPES,
  MAX_PHOTO_COUNT,
  MAX_PHOTO_SIZE_BYTES,
  contactFormSchema,
} from "@/lib/validation/contact";
import { sendEnquiryEmail } from "@/lib/email";

export const runtime = "nodejs";

// Minimum time (ms) a genuine visitor should take to fill in the form.
// Submissions arriving faster than this are treated as automated spam.
const MIN_SUBMISSION_TIME_MS = 1500;

export async function POST(request: Request) {
  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json(
      { error: "We couldn't read your submission. Please try again." },
      { status: 400 }
    );
  }

  // Honeypot field: real visitors never fill this in, as it's hidden
  // from view. If it has a value, silently report success so bots don't
  // learn their submission was rejected.
  const honeypot = formData.get("company");
  if (typeof honeypot === "string" && honeypot.trim().length > 0) {
    return NextResponse.json({ success: true });
  }

  const renderedAt = Number(formData.get("renderedAt"));
  if (Number.isFinite(renderedAt) && Date.now() - renderedAt < MIN_SUBMISSION_TIME_MS) {
    return NextResponse.json(
      { error: "Your submission could not be processed. Please try again." },
      { status: 400 }
    );
  }

  const parsed = contactFormSchema.safeParse({
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    location: formData.get("location"),
    service: formData.get("service"),
    description: formData.get("description"),
  });

  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Please check the highlighted fields and try again.",
        fieldErrors: parsed.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  const photos = formData
    .getAll("photos")
    .filter((entry): entry is File => entry instanceof File && entry.size > 0);

  if (photos.length > MAX_PHOTO_COUNT) {
    return NextResponse.json(
      { error: `Please attach a maximum of ${MAX_PHOTO_COUNT} photos.` },
      { status: 400 }
    );
  }

  for (const photo of photos) {
    if (!ALLOWED_PHOTO_TYPES.includes(photo.type)) {
      return NextResponse.json(
        { error: "Photos must be JPG, PNG or WebP files." },
        { status: 400 }
      );
    }
    if (photo.size > MAX_PHOTO_SIZE_BYTES) {
      return NextResponse.json(
        { error: "Each photo must be smaller than 8MB." },
        { status: 400 }
      );
    }
  }

  // Future integration point: upload `photos` to an S3 bucket via
  // short-lived, least-privilege presigned URLs and reference the
  // resulting object keys in the enquiry email, rather than handling
  // raw file bytes directly in this route.

  try {
    await sendEnquiryEmail({ ...parsed.data, photoCount: photos.length });
  } catch (error) {
    console.error("Failed to send enquiry email", error);
    return NextResponse.json(
      {
        error:
          "We couldn't deliver your enquiry right now. Please call us directly so we don't miss it.",
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true });
}

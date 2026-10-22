"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Loader2, Paperclip, TriangleAlert } from "lucide-react";
import { cn } from "@/lib/utils";
import { contactFormSchema } from "@/lib/validation/contact";
import { services } from "@/lib/content/services";

type Status = "idle" | "submitting" | "success" | "error";

const fieldClasses =
  "w-full rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-sm text-charcoal placeholder:text-slate-light focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 transition-colors";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const renderedAt = useRef<number | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const prefillService = searchParams.get("service") ?? "";
  const prefillBlend = searchParams.get("blend");
  const prefillDescription = prefillBlend
    ? `I'm interested in the ${prefillBlend} colour blend — please could you provide a quotation?`
    : "";

  useEffect(() => {
    renderedAt.current = Date.now();
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage(null);
    setFieldErrors({});

    const form = event.currentTarget;
    const formData = new FormData(form);

    const values = {
      fullName: String(formData.get("fullName") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      location: String(formData.get("location") || ""),
      service: String(formData.get("service") || ""),
      description: String(formData.get("description") || ""),
    };

    const result = contactFormSchema.safeParse(values);
    if (!result.success) {
      const flattened = result.error.flatten().fieldErrors;
      const firstErrors: Record<string, string> = {};
      for (const [key, value] of Object.entries(flattened)) {
        if (value?.[0]) firstErrors[key] = value[0];
      }
      setFieldErrors(firstErrors);
      setStatus("error");
      setErrorMessage("Please check the highlighted fields and try again.");
      return;
    }

    formData.set("renderedAt", String(renderedAt.current ?? Date.now()));
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        setFieldErrors(data.fieldErrors ?? {});
        setErrorMessage(
          data.error || "Something went wrong. Please try again or call us directly."
        );
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage(
        "We couldn't send your enquiry. Please check your connection and try again, or call us directly."
      );
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-4 rounded-3xl bg-white p-10 text-center shadow-sm ring-1 ring-charcoal/5"
      >
        <CheckCircle2 className="h-12 w-12 text-accent" aria-hidden="true" />
        <h3 className="text-xl font-semibold text-charcoal">
          Thank you — your enquiry has been sent
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-slate">
          We&apos;ll be in touch as soon as possible to discuss your project. If
          your enquiry is urgent, please call us directly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-sm font-semibold text-accent hover:text-accent-dark"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      className="space-y-6 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-charcoal/5 sm:p-8"
    >
      {/* Honeypot field — hidden from visitors, left blank by humans */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          type="text"
          id="company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {errorMessage && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
        >
          <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          {errorMessage}
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          label="Full name"
          name="fullName"
          autoComplete="name"
          error={fieldErrors.fullName}
          required
        />
        <Field
          label="Email address"
          name="email"
          type="email"
          autoComplete="email"
          error={fieldErrors.email}
          required
        />
        <Field
          label="Telephone number"
          name="phone"
          type="tel"
          autoComplete="tel"
          error={fieldErrors.phone}
          required
        />
        <Field
          label="Location"
          name="location"
          placeholder="e.g. Douglas, Isle of Man"
          error={fieldErrors.location}
          required
        />
      </div>

      <div>
        <label htmlFor="service" className="mb-2 block text-sm font-semibold text-charcoal">
          Service required <span className="text-accent">*</span>
        </label>
        <select
          id="service"
          name="service"
          required
          defaultValue={prefillService}
          className={cn(fieldClasses, "appearance-none", fieldErrors.service && "border-red-400")}
          aria-invalid={Boolean(fieldErrors.service)}
          aria-describedby={fieldErrors.service ? "service-error" : undefined}
        >
          <option value="" disabled>
            Select a service
          </option>
          {services.map((service) => (
            <option key={service.slug} value={service.name}>
              {service.name}
            </option>
          ))}
          <option value="Not sure / general enquiry">Not sure / general enquiry</option>
        </select>
        {fieldErrors.service && (
          <p id="service-error" className="mt-1.5 text-xs text-red-600">
            {fieldErrors.service}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="description" className="mb-2 block text-sm font-semibold text-charcoal">
          Project description <span className="text-accent">*</span>
        </label>
        <textarea
          id="description"
          name="description"
          rows={5}
          required
          defaultValue={prefillDescription}
          placeholder="Tell us a little about your project — size, location, timescales and anything else that would help."
          className={cn(fieldClasses, fieldErrors.description && "border-red-400")}
          aria-invalid={Boolean(fieldErrors.description)}
          aria-describedby={fieldErrors.description ? "description-error" : undefined}
        />
        {fieldErrors.description && (
          <p id="description-error" className="mt-1.5 text-xs text-red-600">
            {fieldErrors.description}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="photos" className="mb-2 flex items-center gap-2 text-sm font-semibold text-charcoal">
          <Paperclip className="h-4 w-4 text-accent" aria-hidden="true" />
          Project photographs (optional)
        </label>
        <input
          type="file"
          id="photos"
          name="photos"
          multiple
          accept="image/jpeg,image/png,image/webp"
          className="block w-full text-sm text-slate file:mr-4 file:rounded-full file:border-0 file:bg-charcoal file:px-4 file:py-2.5 file:text-sm file:font-semibold file:text-offwhite hover:file:bg-charcoal-light"
        />
        <p className="mt-1.5 text-xs text-slate-light">
          Up to 5 photos, JPG/PNG/WebP, max 8MB each.
        </p>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-base font-semibold text-charcoal shadow-[0_8px_24px_-8px_rgba(255,193,7,0.6)] transition-all duration-300 hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
        {status === "submitting" ? "Sending enquiry…" : "Send Enquiry"}
      </button>
      <p className="text-center text-xs text-slate-light">
        By submitting this form you agree to be contacted about your enquiry.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  placeholder,
  error,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  placeholder?: string;
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-semibold text-charcoal">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        autoComplete={autoComplete}
        placeholder={placeholder}
        required={required}
        className={cn(fieldClasses, error && "border-red-400")}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
      />
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

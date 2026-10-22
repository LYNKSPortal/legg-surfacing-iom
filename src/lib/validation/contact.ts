import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(100, "Name is too long."),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email address.")
    .email("Please enter a valid email address.")
    .max(200),
  phone: z
    .string()
    .trim()
    .min(6, "Please enter a valid telephone number.")
    .max(30, "Phone number is too long.")
    .regex(/^[0-9+()\-\s]+$/, "Please enter a valid telephone number."),
  location: z
    .string()
    .trim()
    .min(2, "Please let us know the project location.")
    .max(150),
  service: z
    .string()
    .trim()
    .min(2, "Please select the service you're enquiring about."),
  description: z
    .string()
    .trim()
    .min(10, "Please provide a few more details about your project.")
    .max(2000, "Description is too long."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const MAX_PHOTO_COUNT = 5;
export const MAX_PHOTO_SIZE_BYTES = 8 * 1024 * 1024;
export const ALLOWED_PHOTO_TYPES = ["image/jpeg", "image/png", "image/webp"];

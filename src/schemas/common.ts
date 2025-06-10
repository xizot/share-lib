import { z } from "zod"

export const idSchema = z.string().uuid("Invalid ID format")

export const paginationSchema = z.object({
  page: z.number().min(1, "Page must be at least 1").default(1),
  limit: z.number().min(1, "Limit must be at least 1").max(100, "Limit cannot exceed 100").default(10),
  sortBy: z.string().optional(),
  sortOrder: z.enum(["asc", "desc"]).default("desc"),
})

export const timestampSchema = z.object({
  createdAt: z.date(),
  updatedAt: z.date(),
})

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
})

export const addressSchema = z.object({
  street: z.string().min(1, "Street is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  postalCode: z.string().min(1, "Postal code is required"),
  country: z.string().min(1, "Country is required"),
})

export const fileUploadSchema = z.object({
  file: z.instanceof(File, { message: "Invalid file" }),
  maxSize: z.number().default(5 * 1024 * 1024), // 5MB
  allowedTypes: z.array(z.string()).default(["image/jpeg", "image/png", "image/gif"]),
})

export const statusSchema = z.enum(["active", "inactive", "pending", "archived"])

export type ID = z.infer<typeof idSchema>
export type PaginationParams = z.infer<typeof paginationSchema>
export type Timestamp = z.infer<typeof timestampSchema>
export type ContactFormData = z.infer<typeof contactSchema>
export type Address = z.infer<typeof addressSchema>
export type FileUpload = z.infer<typeof fileUploadSchema>
export type Status = z.infer<typeof statusSchema> 
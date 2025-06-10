"use client";

// src/schemas/common.ts
import { z } from "zod";
var idSchema = z.string().uuid("Invalid ID format");
var paginationSchema = z.object({
  page: z.number().min(1, "Page must be at least 1").default(1),
  limit: z.number().min(1, "Limit must be at least 1").max(100, "Limit cannot exceed 100").default(10),
  sortBy: z.string().optional(),
  sortOrder: z.enum(["asc", "desc"]).default("desc")
});
var timestampSchema = z.object({
  createdAt: z.date(),
  updatedAt: z.date()
});
var contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().min(1, "Message is required").max(1e3, "Message must be less than 1000 characters")
});
var addressSchema = z.object({
  street: z.string().min(1, "Street is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  postalCode: z.string().min(1, "Postal code is required"),
  country: z.string().min(1, "Country is required")
});
var fileUploadSchema = z.object({
  file: z.instanceof(File, { message: "Invalid file" }),
  maxSize: z.number().default(5 * 1024 * 1024),
  // 5MB
  allowedTypes: z.array(z.string()).default(["image/jpeg", "image/png", "image/gif"])
});
var statusSchema = z.enum(["active", "inactive", "pending", "archived"]);
export {
  addressSchema,
  contactSchema,
  fileUploadSchema,
  idSchema,
  paginationSchema,
  statusSchema,
  timestampSchema
};
//# sourceMappingURL=common.mjs.map
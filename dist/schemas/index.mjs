"use client";

// src/schemas/auth.ts
import { z } from "zod";
var loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters")
});
var registerSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string(),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required")
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
});
var forgotPasswordSchema = z.object({
  email: z.string().email("Invalid email address")
});
var resetPasswordSchema = z.object({
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string(),
  token: z.string().min(1, "Token is required")
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
});
var userProfileSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  bio: z.string().max(500, "Bio must be less than 500 characters").optional(),
  website: z.string().url("Invalid URL").optional().or(z.literal(""))
});

// src/schemas/common.ts
import { z as z2 } from "zod";
var idSchema = z2.string().uuid("Invalid ID format");
var paginationSchema = z2.object({
  page: z2.number().min(1, "Page must be at least 1").default(1),
  limit: z2.number().min(1, "Limit must be at least 1").max(100, "Limit cannot exceed 100").default(10),
  sortBy: z2.string().optional(),
  sortOrder: z2.enum(["asc", "desc"]).default("desc")
});
var timestampSchema = z2.object({
  createdAt: z2.date(),
  updatedAt: z2.date()
});
var contactSchema = z2.object({
  name: z2.string().min(1, "Name is required"),
  email: z2.string().email("Invalid email address"),
  phone: z2.string().optional(),
  message: z2.string().min(1, "Message is required").max(1e3, "Message must be less than 1000 characters")
});
var addressSchema = z2.object({
  street: z2.string().min(1, "Street is required"),
  city: z2.string().min(1, "City is required"),
  state: z2.string().min(1, "State is required"),
  postalCode: z2.string().min(1, "Postal code is required"),
  country: z2.string().min(1, "Country is required")
});
var fileUploadSchema = z2.object({
  file: z2.instanceof(File, { message: "Invalid file" }),
  maxSize: z2.number().default(5 * 1024 * 1024),
  // 5MB
  allowedTypes: z2.array(z2.string()).default(["image/jpeg", "image/png", "image/gif"])
});
var statusSchema = z2.enum(["active", "inactive", "pending", "archived"]);
export {
  addressSchema,
  contactSchema,
  fileUploadSchema,
  forgotPasswordSchema,
  idSchema,
  loginSchema,
  paginationSchema,
  registerSchema,
  resetPasswordSchema,
  statusSchema,
  timestampSchema,
  userProfileSchema
};
//# sourceMappingURL=index.mjs.map
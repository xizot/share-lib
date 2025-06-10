"use client";
"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/schemas/index.ts
var schemas_exports = {};
__export(schemas_exports, {
  addressSchema: () => addressSchema,
  contactSchema: () => contactSchema,
  fileUploadSchema: () => fileUploadSchema,
  forgotPasswordSchema: () => forgotPasswordSchema,
  idSchema: () => idSchema,
  loginSchema: () => loginSchema,
  paginationSchema: () => paginationSchema,
  registerSchema: () => registerSchema,
  resetPasswordSchema: () => resetPasswordSchema,
  statusSchema: () => statusSchema,
  timestampSchema: () => timestampSchema,
  userProfileSchema: () => userProfileSchema
});
module.exports = __toCommonJS(schemas_exports);

// src/schemas/auth.ts
var import_zod = require("zod");
var loginSchema = import_zod.z.object({
  email: import_zod.z.string().email("Invalid email address"),
  password: import_zod.z.string().min(6, "Password must be at least 6 characters")
});
var registerSchema = import_zod.z.object({
  email: import_zod.z.string().email("Invalid email address"),
  password: import_zod.z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: import_zod.z.string(),
  firstName: import_zod.z.string().min(1, "First name is required"),
  lastName: import_zod.z.string().min(1, "Last name is required")
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
});
var forgotPasswordSchema = import_zod.z.object({
  email: import_zod.z.string().email("Invalid email address")
});
var resetPasswordSchema = import_zod.z.object({
  password: import_zod.z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: import_zod.z.string(),
  token: import_zod.z.string().min(1, "Token is required")
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
});
var userProfileSchema = import_zod.z.object({
  firstName: import_zod.z.string().min(1, "First name is required"),
  lastName: import_zod.z.string().min(1, "Last name is required"),
  email: import_zod.z.string().email("Invalid email address"),
  phone: import_zod.z.string().optional(),
  bio: import_zod.z.string().max(500, "Bio must be less than 500 characters").optional(),
  website: import_zod.z.string().url("Invalid URL").optional().or(import_zod.z.literal(""))
});

// src/schemas/common.ts
var import_zod2 = require("zod");
var idSchema = import_zod2.z.string().uuid("Invalid ID format");
var paginationSchema = import_zod2.z.object({
  page: import_zod2.z.number().min(1, "Page must be at least 1").default(1),
  limit: import_zod2.z.number().min(1, "Limit must be at least 1").max(100, "Limit cannot exceed 100").default(10),
  sortBy: import_zod2.z.string().optional(),
  sortOrder: import_zod2.z.enum(["asc", "desc"]).default("desc")
});
var timestampSchema = import_zod2.z.object({
  createdAt: import_zod2.z.date(),
  updatedAt: import_zod2.z.date()
});
var contactSchema = import_zod2.z.object({
  name: import_zod2.z.string().min(1, "Name is required"),
  email: import_zod2.z.string().email("Invalid email address"),
  phone: import_zod2.z.string().optional(),
  message: import_zod2.z.string().min(1, "Message is required").max(1e3, "Message must be less than 1000 characters")
});
var addressSchema = import_zod2.z.object({
  street: import_zod2.z.string().min(1, "Street is required"),
  city: import_zod2.z.string().min(1, "City is required"),
  state: import_zod2.z.string().min(1, "State is required"),
  postalCode: import_zod2.z.string().min(1, "Postal code is required"),
  country: import_zod2.z.string().min(1, "Country is required")
});
var fileUploadSchema = import_zod2.z.object({
  file: import_zod2.z.instanceof(File, { message: "Invalid file" }),
  maxSize: import_zod2.z.number().default(5 * 1024 * 1024),
  // 5MB
  allowedTypes: import_zod2.z.array(import_zod2.z.string()).default(["image/jpeg", "image/png", "image/gif"])
});
var statusSchema = import_zod2.z.enum(["active", "inactive", "pending", "archived"]);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
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
});
//# sourceMappingURL=index.js.map
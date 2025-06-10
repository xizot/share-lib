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

// src/schemas/common.ts
var common_exports = {};
__export(common_exports, {
  addressSchema: () => addressSchema,
  contactSchema: () => contactSchema,
  fileUploadSchema: () => fileUploadSchema,
  idSchema: () => idSchema,
  paginationSchema: () => paginationSchema,
  statusSchema: () => statusSchema,
  timestampSchema: () => timestampSchema
});
module.exports = __toCommonJS(common_exports);
var import_zod = require("zod");
var idSchema = import_zod.z.string().uuid("Invalid ID format");
var paginationSchema = import_zod.z.object({
  page: import_zod.z.number().min(1, "Page must be at least 1").default(1),
  limit: import_zod.z.number().min(1, "Limit must be at least 1").max(100, "Limit cannot exceed 100").default(10),
  sortBy: import_zod.z.string().optional(),
  sortOrder: import_zod.z.enum(["asc", "desc"]).default("desc")
});
var timestampSchema = import_zod.z.object({
  createdAt: import_zod.z.date(),
  updatedAt: import_zod.z.date()
});
var contactSchema = import_zod.z.object({
  name: import_zod.z.string().min(1, "Name is required"),
  email: import_zod.z.string().email("Invalid email address"),
  phone: import_zod.z.string().optional(),
  message: import_zod.z.string().min(1, "Message is required").max(1e3, "Message must be less than 1000 characters")
});
var addressSchema = import_zod.z.object({
  street: import_zod.z.string().min(1, "Street is required"),
  city: import_zod.z.string().min(1, "City is required"),
  state: import_zod.z.string().min(1, "State is required"),
  postalCode: import_zod.z.string().min(1, "Postal code is required"),
  country: import_zod.z.string().min(1, "Country is required")
});
var fileUploadSchema = import_zod.z.object({
  file: import_zod.z.instanceof(File, { message: "Invalid file" }),
  maxSize: import_zod.z.number().default(5 * 1024 * 1024),
  // 5MB
  allowedTypes: import_zod.z.array(import_zod.z.string()).default(["image/jpeg", "image/png", "image/gif"])
});
var statusSchema = import_zod.z.enum(["active", "inactive", "pending", "archived"]);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  addressSchema,
  contactSchema,
  fileUploadSchema,
  idSchema,
  paginationSchema,
  statusSchema,
  timestampSchema
});
//# sourceMappingURL=common.js.map
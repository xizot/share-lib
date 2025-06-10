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

// src/schemas/auth.ts
var auth_exports = {};
__export(auth_exports, {
  forgotPasswordSchema: () => forgotPasswordSchema,
  loginSchema: () => loginSchema,
  registerSchema: () => registerSchema,
  resetPasswordSchema: () => resetPasswordSchema,
  userProfileSchema: () => userProfileSchema
});
module.exports = __toCommonJS(auth_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  forgotPasswordSchema,
  loginSchema,
  registerSchema,
  resetPasswordSchema,
  userProfileSchema
});
//# sourceMappingURL=auth.js.map
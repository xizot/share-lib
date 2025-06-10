'use strict';

var zod = require('zod');

// src/schemas/index.ts
var userSchema = zod.z.object({
  id: zod.z.string().uuid(),
  email: zod.z.string().email(),
  name: zod.z.string().min(2).max(50),
  avatar: zod.z.string().url().optional(),
  role: zod.z.enum(["admin", "user", "moderator"]),
  createdAt: zod.z.string().datetime(),
  updatedAt: zod.z.string().datetime()
});
var createUserSchema = userSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true
});
var updateUserSchema = createUserSchema.partial();
var loginSchema = zod.z.object({
  email: zod.z.string().email("Invalid email address"),
  password: zod.z.string().min(6, "Password must be at least 6 characters")
});
var registerSchema = loginSchema.extend({
  name: zod.z.string().min(2, "Name must be at least 2 characters"),
  confirmPassword: zod.z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
});
var apiResponseSchema = (dataSchema) => zod.z.object({
  data: dataSchema,
  message: zod.z.string(),
  success: zod.z.boolean(),
  error: zod.z.string().optional()
});
var paginatedResponseSchema = (itemSchema) => zod.z.object({
  data: zod.z.array(itemSchema),
  message: zod.z.string(),
  success: zod.z.boolean(),
  error: zod.z.string().optional(),
  pagination: zod.z.object({
    page: zod.z.number().int().positive(),
    limit: zod.z.number().int().positive(),
    total: zod.z.number().int().nonnegative(),
    totalPages: zod.z.number().int().nonnegative()
  })
});
var contactFormSchema = zod.z.object({
  name: zod.z.string().min(2, "Name is required"),
  email: zod.z.string().email("Invalid email address"),
  subject: zod.z.string().min(5, "Subject must be at least 5 characters"),
  message: zod.z.string().min(10, "Message must be at least 10 characters")
});
var themeConfigSchema = zod.z.object({
  theme: zod.z.enum(["light", "dark", "system"]),
  primaryColor: zod.z.string().regex(/^#[0-9A-F]{6}$/i, "Invalid color format"),
  secondaryColor: zod.z.string().regex(/^#[0-9A-F]{6}$/i, "Invalid color format")
});

exports.apiResponseSchema = apiResponseSchema;
exports.contactFormSchema = contactFormSchema;
exports.createUserSchema = createUserSchema;
exports.loginSchema = loginSchema;
exports.paginatedResponseSchema = paginatedResponseSchema;
exports.registerSchema = registerSchema;
exports.themeConfigSchema = themeConfigSchema;
exports.updateUserSchema = updateUserSchema;
exports.userSchema = userSchema;
//# sourceMappingURL=schemas.js.map
//# sourceMappingURL=schemas.js.map
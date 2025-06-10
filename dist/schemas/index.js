'use strict';

var zod = require('zod');

// src/schemas/user.schema.ts
var UserSchema = zod.z.object({
  id: zod.z.string().uuid(),
  email: zod.z.string().email("Invalid email address"),
  username: zod.z.string().min(3, "Username must be at least 3 characters").max(20, "Username must be at most 20 characters"),
  fullName: zod.z.string().min(1, "Full name is required").max(100, "Full name must be at most 100 characters"),
  avatar: zod.z.string().url().optional(),
  role: zod.z.enum(["admin", "user", "moderator"]).default("user"),
  isActive: zod.z.boolean().default(true),
  createdAt: zod.z.date(),
  updatedAt: zod.z.date()
});
var CreateUserSchema = UserSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true
});
var UpdateUserSchema = UserSchema.partial().omit({
  id: true,
  createdAt: true
});
var ProductSchema = zod.z.object({
  id: zod.z.string().uuid(),
  name: zod.z.string().min(1, "Product name is required").max(200, "Product name must be at most 200 characters"),
  description: zod.z.string().min(10, "Description must be at least 10 characters").max(1e3, "Description must be at most 1000 characters"),
  price: zod.z.number().positive("Price must be positive"),
  currency: zod.z.enum(["USD", "EUR", "VND"]).default("USD"),
  category: zod.z.string().min(1, "Category is required"),
  tags: zod.z.array(zod.z.string()).default([]),
  images: zod.z.array(zod.z.string().url()).default([]),
  inStock: zod.z.boolean().default(true),
  stockQuantity: zod.z.number().int().min(0, "Stock quantity must be non-negative").default(0),
  weight: zod.z.number().positive().optional(),
  dimensions: zod.z.object({
    length: zod.z.number().positive(),
    width: zod.z.number().positive(),
    height: zod.z.number().positive()
  }).optional(),
  isActive: zod.z.boolean().default(true),
  createdAt: zod.z.date(),
  updatedAt: zod.z.date()
});
var CreateProductSchema = ProductSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true
});
var UpdateProductSchema = ProductSchema.partial().omit({
  id: true,
  createdAt: true
});
var ProductFilterSchema = zod.z.object({
  category: zod.z.string().optional(),
  minPrice: zod.z.number().positive().optional(),
  maxPrice: zod.z.number().positive().optional(),
  inStock: zod.z.boolean().optional(),
  tags: zod.z.array(zod.z.string()).optional()
});
var ApiResponseSchema = zod.z.object({
  success: zod.z.boolean(),
  message: zod.z.string(),
  data: zod.z.unknown().optional(),
  error: zod.z.object({
    code: zod.z.string(),
    message: zod.z.string(),
    details: zod.z.unknown().optional()
  }).optional(),
  timestamp: zod.z.date()
});
var PaginationSchema = zod.z.object({
  page: zod.z.number().int().min(1, "Page must be at least 1").default(1),
  limit: zod.z.number().int().min(1, "Limit must be at least 1").max(100, "Limit must be at most 100").default(10),
  total: zod.z.number().int().min(0, "Total must be non-negative"),
  totalPages: zod.z.number().int().min(0, "Total pages must be non-negative")
});
var PaginatedResponseSchema = ApiResponseSchema.extend({
  data: zod.z.object({
    items: zod.z.array(zod.z.unknown()),
    pagination: PaginationSchema
  })
});
var ErrorResponseSchema = zod.z.object({
  success: zod.z.literal(false),
  message: zod.z.string(),
  error: zod.z.object({
    code: zod.z.string(),
    message: zod.z.string(),
    details: zod.z.unknown().optional()
  }),
  timestamp: zod.z.date()
});
var SuccessResponseSchema = zod.z.object({
  success: zod.z.literal(true),
  message: zod.z.string(),
  data: zod.z.unknown().optional(),
  timestamp: zod.z.date()
});

exports.ApiResponseSchema = ApiResponseSchema;
exports.CreateProductSchema = CreateProductSchema;
exports.CreateUserSchema = CreateUserSchema;
exports.ErrorResponseSchema = ErrorResponseSchema;
exports.PaginatedResponseSchema = PaginatedResponseSchema;
exports.PaginationSchema = PaginationSchema;
exports.ProductFilterSchema = ProductFilterSchema;
exports.ProductSchema = ProductSchema;
exports.SuccessResponseSchema = SuccessResponseSchema;
exports.UpdateProductSchema = UpdateProductSchema;
exports.UpdateUserSchema = UpdateUserSchema;
exports.UserSchema = UserSchema;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
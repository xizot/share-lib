import { z } from 'zod';

// src/schemas/user.schema.ts
var UserSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email("Invalid email address"),
  username: z.string().min(3, "Username must be at least 3 characters").max(20, "Username must be at most 20 characters"),
  fullName: z.string().min(1, "Full name is required").max(100, "Full name must be at most 100 characters"),
  avatar: z.string().url().optional(),
  role: z.enum(["admin", "user", "moderator"]).default("user"),
  isActive: z.boolean().default(true),
  createdAt: z.date(),
  updatedAt: z.date()
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
var ProductSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, "Product name is required").max(200, "Product name must be at most 200 characters"),
  description: z.string().min(10, "Description must be at least 10 characters").max(1e3, "Description must be at most 1000 characters"),
  price: z.number().positive("Price must be positive"),
  currency: z.enum(["USD", "EUR", "VND"]).default("USD"),
  category: z.string().min(1, "Category is required"),
  tags: z.array(z.string()).default([]),
  images: z.array(z.string().url()).default([]),
  inStock: z.boolean().default(true),
  stockQuantity: z.number().int().min(0, "Stock quantity must be non-negative").default(0),
  weight: z.number().positive().optional(),
  dimensions: z.object({
    length: z.number().positive(),
    width: z.number().positive(),
    height: z.number().positive()
  }).optional(),
  isActive: z.boolean().default(true),
  createdAt: z.date(),
  updatedAt: z.date()
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
var ProductFilterSchema = z.object({
  category: z.string().optional(),
  minPrice: z.number().positive().optional(),
  maxPrice: z.number().positive().optional(),
  inStock: z.boolean().optional(),
  tags: z.array(z.string()).optional()
});
var ApiResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  data: z.unknown().optional(),
  error: z.object({
    code: z.string(),
    message: z.string(),
    details: z.unknown().optional()
  }).optional(),
  timestamp: z.date()
});
var PaginationSchema = z.object({
  page: z.number().int().min(1, "Page must be at least 1").default(1),
  limit: z.number().int().min(1, "Limit must be at least 1").max(100, "Limit must be at most 100").default(10),
  total: z.number().int().min(0, "Total must be non-negative"),
  totalPages: z.number().int().min(0, "Total pages must be non-negative")
});
var PaginatedResponseSchema = ApiResponseSchema.extend({
  data: z.object({
    items: z.array(z.unknown()),
    pagination: PaginationSchema
  })
});
var ErrorResponseSchema = z.object({
  success: z.literal(false),
  message: z.string(),
  error: z.object({
    code: z.string(),
    message: z.string(),
    details: z.unknown().optional()
  }),
  timestamp: z.date()
});
var SuccessResponseSchema = z.object({
  success: z.literal(true),
  message: z.string(),
  data: z.unknown().optional(),
  timestamp: z.date()
});

export { ApiResponseSchema, CreateProductSchema, CreateUserSchema, ErrorResponseSchema, PaginatedResponseSchema, PaginationSchema, ProductFilterSchema, ProductSchema, SuccessResponseSchema, UpdateProductSchema, UpdateUserSchema, UserSchema };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map
import { z } from 'zod';

export const ProductSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, 'Product name is required').max(200, 'Product name must be at most 200 characters'),
  description: z.string().min(10, 'Description must be at least 10 characters').max(1000, 'Description must be at most 1000 characters'),
  price: z.number().positive('Price must be positive'),
  currency: z.enum(['USD', 'EUR', 'VND']).default('USD'),
  category: z.string().min(1, 'Category is required'),
  tags: z.array(z.string()).default([]),
  images: z.array(z.string().url()).default([]),
  inStock: z.boolean().default(true),
  stockQuantity: z.number().int().min(0, 'Stock quantity must be non-negative').default(0),
  weight: z.number().positive().optional(),
  dimensions: z.object({
    length: z.number().positive(),
    width: z.number().positive(),
    height: z.number().positive(),
  }).optional(),
  isActive: z.boolean().default(true),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const CreateProductSchema = ProductSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const UpdateProductSchema = ProductSchema.partial().omit({
  id: true,
  createdAt: true,
});

export const ProductFilterSchema = z.object({
  category: z.string().optional(),
  minPrice: z.number().positive().optional(),
  maxPrice: z.number().positive().optional(),
  inStock: z.boolean().optional(),
  tags: z.array(z.string()).optional(),
});

export type Product = z.infer<typeof ProductSchema>;
export type CreateProduct = z.infer<typeof CreateProductSchema>;
export type UpdateProduct = z.infer<typeof UpdateProductSchema>;
export type ProductFilter = z.infer<typeof ProductFilterSchema>; 
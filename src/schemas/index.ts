import { z } from 'zod'

// User schemas
export const userSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  name: z.string().min(2).max(50),
  avatar: z.string().url().optional(),
  role: z.enum(['admin', 'user', 'moderator']),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
})

export const createUserSchema = userSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
})

export const updateUserSchema = createUserSchema.partial()

// Auth schemas
export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

export const registerSchema = loginSchema.extend({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

// API Response schemas
export const apiResponseSchema = <T extends z.ZodTypeAny>(dataSchema: T) =>
  z.object({
    data: dataSchema,
    message: z.string(),
    success: z.boolean(),
    error: z.string().optional(),
  })

export const paginatedResponseSchema = <T extends z.ZodTypeAny>(itemSchema: T) =>
  z.object({
    data: z.array(itemSchema),
    message: z.string(),
    success: z.boolean(),
    error: z.string().optional(),
    pagination: z.object({
      page: z.number().int().positive(),
      limit: z.number().int().positive(),
      total: z.number().int().nonnegative(),
      totalPages: z.number().int().nonnegative(),
    }),
  })

// Form schemas
export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

// Settings schemas
export const themeConfigSchema = z.object({
  theme: z.enum(['light', 'dark', 'system']),
  primaryColor: z.string().regex(/^#[0-9A-F]{6}$/i, 'Invalid color format'),
  secondaryColor: z.string().regex(/^#[0-9A-F]{6}$/i, 'Invalid color format'),
})

// Export types derived from schemas
export type UserSchema = z.infer<typeof userSchema>
export type CreateUserSchema = z.infer<typeof createUserSchema>
export type UpdateUserSchema = z.infer<typeof updateUserSchema>
export type LoginSchema = z.infer<typeof loginSchema>
export type RegisterSchema = z.infer<typeof registerSchema>
export type ContactFormSchema = z.infer<typeof contactFormSchema>
export type ThemeConfigSchema = z.infer<typeof themeConfigSchema> 
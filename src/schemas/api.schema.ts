import { z } from 'zod';

export const ApiResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  data: z.unknown().optional(),
  error: z.object({
    code: z.string(),
    message: z.string(),
    details: z.unknown().optional(),
  }).optional(),
  timestamp: z.date(),
});

export const PaginationSchema = z.object({
  page: z.number().int().min(1, 'Page must be at least 1').default(1),
  limit: z.number().int().min(1, 'Limit must be at least 1').max(100, 'Limit must be at most 100').default(10),
  total: z.number().int().min(0, 'Total must be non-negative'),
  totalPages: z.number().int().min(0, 'Total pages must be non-negative'),
});

export const PaginatedResponseSchema = ApiResponseSchema.extend({
  data: z.object({
    items: z.array(z.unknown()),
    pagination: PaginationSchema,
  }),
});

export const ErrorResponseSchema = z.object({
  success: z.literal(false),
  message: z.string(),
  error: z.object({
    code: z.string(),
    message: z.string(),
    details: z.unknown().optional(),
  }),
  timestamp: z.date(),
});

export const SuccessResponseSchema = z.object({
  success: z.literal(true),
  message: z.string(),
  data: z.unknown().optional(),
  timestamp: z.date(),
});

export type ApiResponse<T = unknown> = {
  success: boolean;
  message: string;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: unknown;
  };
  timestamp: Date;
};

export type PaginatedResponse<T = unknown> = {
  success: boolean;
  message: string;
  data: {
    items: T[];
    pagination: Pagination;
  };
  timestamp: Date;
};

export type Pagination = z.infer<typeof PaginationSchema>;
export type ErrorResponse = z.infer<typeof ErrorResponseSchema>;
export type SuccessResponse<T = unknown> = Omit<z.infer<typeof SuccessResponseSchema>, 'data'> & { data?: T }; 
import { z } from 'zod';
import type { ApiResponse, ErrorResponse, SuccessResponse } from '../schemas/api.schema';

export class ValidationError extends Error {
  constructor(
    message: string,
    public errors: z.ZodError
  ) {
    super(message);
    this.name = 'ValidationError';
  }
}

export function validateSchema<T>(
  schema: z.ZodSchema<T>,
  data: unknown
): { success: true; data: T } | { success: false; error: z.ZodError } {
  try {
    const result = schema.parse(data);
    return { success: true, data: result };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error };
    }
    throw error;
  }
}

export function validateSchemaOrThrow<T>(schema: z.ZodSchema<T>, data: unknown): T {
  try {
    return schema.parse(data);
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new ValidationError('Validation failed', error);
    }
    throw error;
  }
}

export function safeValidate<T>(
  schema: z.ZodSchema<T>,
  data: unknown
): { data: T | null; errors: string[] } {
  try {
    const result = schema.parse(data);
    return { data: result, errors: [] };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors = error.errors.map(err => 
        `${err.path.join('.')}: ${err.message}`
      );
      return { data: null, errors };
    }
    return { data: null, errors: ['Unknown validation error'] };
  }
}

export function createApiResponse<T = unknown>(
  success: boolean,
  message: string,
  data?: T,
  error?: { code: string; message: string; details?: unknown }
): ApiResponse<T> {
  return {
    success,
    message,
    data,
    error,
    timestamp: new Date(),
  };
}

export function createSuccessResponse<T = unknown>(
  message: string,
  data?: T
): SuccessResponse<T> {
  return {
    success: true,
    message,
    data,
    timestamp: new Date(),
  };
}

export function createErrorResponse(
  message: string,
  code: string,
  details?: unknown
): ErrorResponse {
  return {
    success: false,
    message,
    error: {
      code,
      message,
      details,
    },
    timestamp: new Date(),
  };
} 
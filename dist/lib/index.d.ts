import { ClassValue } from 'clsx';
import { z } from 'zod';
import { A as ApiResponse, S as SuccessResponse, E as ErrorResponse } from '../api.schema-BUIZQ9X0.js';

declare function cn(...inputs: ClassValue[]): string;

declare function formatPrice(price: number, currency?: 'USD' | 'EUR' | 'VND'): string;
declare function formatDate(date: Date, locale?: string): string;
declare function formatDateTime(date: Date, locale?: string): string;
declare function generateId(): string;
declare function slugify(text: string): string;
declare function capitalize(text: string): string;
declare function truncate(text: string, maxLength: number): string;
declare function debounce<T extends (...args: any[]) => void>(func: T, delay: number): (...args: Parameters<T>) => void;
declare function throttle<T extends (...args: any[]) => void>(func: T, limit: number): (...args: Parameters<T>) => void;
declare function isEmail(email: string): boolean;
declare function isUrl(url: string): boolean;
declare function omit<T extends Record<string, any>, K extends keyof T>(obj: T, keys: K[]): Omit<T, K>;
declare function pick<T extends Record<string, any>, K extends keyof T>(obj: T, keys: K[]): Pick<T, K>;

declare class ValidationError extends Error {
    errors: z.ZodError;
    constructor(message: string, errors: z.ZodError);
}
declare function validateSchema<T>(schema: z.ZodSchema<T>, data: unknown): {
    success: true;
    data: T;
} | {
    success: false;
    error: z.ZodError;
};
declare function validateSchemaOrThrow<T>(schema: z.ZodSchema<T>, data: unknown): T;
declare function safeValidate<T>(schema: z.ZodSchema<T>, data: unknown): {
    data: T | null;
    errors: string[];
};
declare function createApiResponse<T = unknown>(success: boolean, message: string, data?: T, error?: {
    code: string;
    message: string;
    details?: unknown;
}): ApiResponse<T>;
declare function createSuccessResponse<T = unknown>(message: string, data?: T): SuccessResponse<T>;
declare function createErrorResponse(message: string, code: string, details?: unknown): ErrorResponse;

export { ValidationError, capitalize, cn, createApiResponse, createErrorResponse, createSuccessResponse, debounce, formatDate, formatDateTime, formatPrice, generateId, isEmail, isUrl, omit, pick, safeValidate, slugify, throttle, truncate, validateSchema, validateSchemaOrThrow };

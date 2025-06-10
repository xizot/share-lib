import { z } from 'zod';
import { ClassValue } from 'clsx';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';

declare const UserSchema: z.ZodObject<{
    id: z.ZodString;
    email: z.ZodString;
    username: z.ZodString;
    fullName: z.ZodString;
    avatar: z.ZodOptional<z.ZodString>;
    role: z.ZodDefault<z.ZodEnum<["admin", "user", "moderator"]>>;
    isActive: z.ZodDefault<z.ZodBoolean>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    id: string;
    email: string;
    username: string;
    fullName: string;
    role: "admin" | "user" | "moderator";
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    avatar?: string | undefined;
}, {
    id: string;
    email: string;
    username: string;
    fullName: string;
    createdAt: Date;
    updatedAt: Date;
    avatar?: string | undefined;
    role?: "admin" | "user" | "moderator" | undefined;
    isActive?: boolean | undefined;
}>;
declare const CreateUserSchema: z.ZodObject<Omit<{
    id: z.ZodString;
    email: z.ZodString;
    username: z.ZodString;
    fullName: z.ZodString;
    avatar: z.ZodOptional<z.ZodString>;
    role: z.ZodDefault<z.ZodEnum<["admin", "user", "moderator"]>>;
    isActive: z.ZodDefault<z.ZodBoolean>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, "id" | "createdAt" | "updatedAt">, "strip", z.ZodTypeAny, {
    email: string;
    username: string;
    fullName: string;
    role: "admin" | "user" | "moderator";
    isActive: boolean;
    avatar?: string | undefined;
}, {
    email: string;
    username: string;
    fullName: string;
    avatar?: string | undefined;
    role?: "admin" | "user" | "moderator" | undefined;
    isActive?: boolean | undefined;
}>;
declare const UpdateUserSchema: z.ZodObject<Omit<{
    id: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    username: z.ZodOptional<z.ZodString>;
    fullName: z.ZodOptional<z.ZodString>;
    avatar: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    role: z.ZodOptional<z.ZodDefault<z.ZodEnum<["admin", "user", "moderator"]>>>;
    isActive: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    createdAt: z.ZodOptional<z.ZodDate>;
    updatedAt: z.ZodOptional<z.ZodDate>;
}, "id" | "createdAt">, "strip", z.ZodTypeAny, {
    email?: string | undefined;
    username?: string | undefined;
    fullName?: string | undefined;
    avatar?: string | undefined;
    role?: "admin" | "user" | "moderator" | undefined;
    isActive?: boolean | undefined;
    updatedAt?: Date | undefined;
}, {
    email?: string | undefined;
    username?: string | undefined;
    fullName?: string | undefined;
    avatar?: string | undefined;
    role?: "admin" | "user" | "moderator" | undefined;
    isActive?: boolean | undefined;
    updatedAt?: Date | undefined;
}>;
type User = z.infer<typeof UserSchema>;
type CreateUser = z.infer<typeof CreateUserSchema>;
type UpdateUser = z.infer<typeof UpdateUserSchema>;

declare const ProductSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    description: z.ZodString;
    price: z.ZodNumber;
    currency: z.ZodDefault<z.ZodEnum<["USD", "EUR", "VND"]>>;
    category: z.ZodString;
    tags: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    images: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    inStock: z.ZodDefault<z.ZodBoolean>;
    stockQuantity: z.ZodDefault<z.ZodNumber>;
    weight: z.ZodOptional<z.ZodNumber>;
    dimensions: z.ZodOptional<z.ZodObject<{
        length: z.ZodNumber;
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        length: number;
        width: number;
        height: number;
    }, {
        length: number;
        width: number;
        height: number;
    }>>;
    isActive: z.ZodDefault<z.ZodBoolean>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    id: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    description: string;
    price: number;
    currency: "USD" | "EUR" | "VND";
    category: string;
    tags: string[];
    images: string[];
    inStock: boolean;
    stockQuantity: number;
    weight?: number | undefined;
    dimensions?: {
        length: number;
        width: number;
        height: number;
    } | undefined;
}, {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    description: string;
    price: number;
    category: string;
    isActive?: boolean | undefined;
    currency?: "USD" | "EUR" | "VND" | undefined;
    tags?: string[] | undefined;
    images?: string[] | undefined;
    inStock?: boolean | undefined;
    stockQuantity?: number | undefined;
    weight?: number | undefined;
    dimensions?: {
        length: number;
        width: number;
        height: number;
    } | undefined;
}>;
declare const CreateProductSchema: z.ZodObject<Omit<{
    id: z.ZodString;
    name: z.ZodString;
    description: z.ZodString;
    price: z.ZodNumber;
    currency: z.ZodDefault<z.ZodEnum<["USD", "EUR", "VND"]>>;
    category: z.ZodString;
    tags: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    images: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    inStock: z.ZodDefault<z.ZodBoolean>;
    stockQuantity: z.ZodDefault<z.ZodNumber>;
    weight: z.ZodOptional<z.ZodNumber>;
    dimensions: z.ZodOptional<z.ZodObject<{
        length: z.ZodNumber;
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        length: number;
        width: number;
        height: number;
    }, {
        length: number;
        width: number;
        height: number;
    }>>;
    isActive: z.ZodDefault<z.ZodBoolean>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, "id" | "createdAt" | "updatedAt">, "strip", z.ZodTypeAny, {
    isActive: boolean;
    name: string;
    description: string;
    price: number;
    currency: "USD" | "EUR" | "VND";
    category: string;
    tags: string[];
    images: string[];
    inStock: boolean;
    stockQuantity: number;
    weight?: number | undefined;
    dimensions?: {
        length: number;
        width: number;
        height: number;
    } | undefined;
}, {
    name: string;
    description: string;
    price: number;
    category: string;
    isActive?: boolean | undefined;
    currency?: "USD" | "EUR" | "VND" | undefined;
    tags?: string[] | undefined;
    images?: string[] | undefined;
    inStock?: boolean | undefined;
    stockQuantity?: number | undefined;
    weight?: number | undefined;
    dimensions?: {
        length: number;
        width: number;
        height: number;
    } | undefined;
}>;
declare const UpdateProductSchema: z.ZodObject<Omit<{
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    price: z.ZodOptional<z.ZodNumber>;
    currency: z.ZodOptional<z.ZodDefault<z.ZodEnum<["USD", "EUR", "VND"]>>>;
    category: z.ZodOptional<z.ZodString>;
    tags: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodString, "many">>>;
    images: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodString, "many">>>;
    inStock: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    stockQuantity: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    weight: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    dimensions: z.ZodOptional<z.ZodOptional<z.ZodObject<{
        length: z.ZodNumber;
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        length: number;
        width: number;
        height: number;
    }, {
        length: number;
        width: number;
        height: number;
    }>>>;
    isActive: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    createdAt: z.ZodOptional<z.ZodDate>;
    updatedAt: z.ZodOptional<z.ZodDate>;
}, "id" | "createdAt">, "strip", z.ZodTypeAny, {
    isActive?: boolean | undefined;
    updatedAt?: Date | undefined;
    name?: string | undefined;
    description?: string | undefined;
    price?: number | undefined;
    currency?: "USD" | "EUR" | "VND" | undefined;
    category?: string | undefined;
    tags?: string[] | undefined;
    images?: string[] | undefined;
    inStock?: boolean | undefined;
    stockQuantity?: number | undefined;
    weight?: number | undefined;
    dimensions?: {
        length: number;
        width: number;
        height: number;
    } | undefined;
}, {
    isActive?: boolean | undefined;
    updatedAt?: Date | undefined;
    name?: string | undefined;
    description?: string | undefined;
    price?: number | undefined;
    currency?: "USD" | "EUR" | "VND" | undefined;
    category?: string | undefined;
    tags?: string[] | undefined;
    images?: string[] | undefined;
    inStock?: boolean | undefined;
    stockQuantity?: number | undefined;
    weight?: number | undefined;
    dimensions?: {
        length: number;
        width: number;
        height: number;
    } | undefined;
}>;
declare const ProductFilterSchema: z.ZodObject<{
    category: z.ZodOptional<z.ZodString>;
    minPrice: z.ZodOptional<z.ZodNumber>;
    maxPrice: z.ZodOptional<z.ZodNumber>;
    inStock: z.ZodOptional<z.ZodBoolean>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    category?: string | undefined;
    tags?: string[] | undefined;
    inStock?: boolean | undefined;
    minPrice?: number | undefined;
    maxPrice?: number | undefined;
}, {
    category?: string | undefined;
    tags?: string[] | undefined;
    inStock?: boolean | undefined;
    minPrice?: number | undefined;
    maxPrice?: number | undefined;
}>;
type Product = z.infer<typeof ProductSchema>;
type CreateProduct = z.infer<typeof CreateProductSchema>;
type UpdateProduct = z.infer<typeof UpdateProductSchema>;
type ProductFilter = z.infer<typeof ProductFilterSchema>;

declare const ApiResponseSchema: z.ZodObject<{
    success: z.ZodBoolean;
    message: z.ZodString;
    data: z.ZodOptional<z.ZodUnknown>;
    error: z.ZodOptional<z.ZodObject<{
        code: z.ZodString;
        message: z.ZodString;
        details: z.ZodOptional<z.ZodUnknown>;
    }, "strip", z.ZodTypeAny, {
        code: string;
        message: string;
        details?: unknown;
    }, {
        code: string;
        message: string;
        details?: unknown;
    }>>;
    timestamp: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    message: string;
    success: boolean;
    timestamp: Date;
    data?: unknown;
    error?: {
        code: string;
        message: string;
        details?: unknown;
    } | undefined;
}, {
    message: string;
    success: boolean;
    timestamp: Date;
    data?: unknown;
    error?: {
        code: string;
        message: string;
        details?: unknown;
    } | undefined;
}>;
declare const PaginationSchema: z.ZodObject<{
    page: z.ZodDefault<z.ZodNumber>;
    limit: z.ZodDefault<z.ZodNumber>;
    total: z.ZodNumber;
    totalPages: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
}, {
    total: number;
    totalPages: number;
    page?: number | undefined;
    limit?: number | undefined;
}>;
declare const PaginatedResponseSchema: z.ZodObject<{
    success: z.ZodBoolean;
    message: z.ZodString;
    error: z.ZodOptional<z.ZodObject<{
        code: z.ZodString;
        message: z.ZodString;
        details: z.ZodOptional<z.ZodUnknown>;
    }, "strip", z.ZodTypeAny, {
        code: string;
        message: string;
        details?: unknown;
    }, {
        code: string;
        message: string;
        details?: unknown;
    }>>;
    timestamp: z.ZodDate;
} & {
    data: z.ZodObject<{
        items: z.ZodArray<z.ZodUnknown, "many">;
        pagination: z.ZodObject<{
            page: z.ZodDefault<z.ZodNumber>;
            limit: z.ZodDefault<z.ZodNumber>;
            total: z.ZodNumber;
            totalPages: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        }, {
            total: number;
            totalPages: number;
            page?: number | undefined;
            limit?: number | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        items: unknown[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    }, {
        items: unknown[];
        pagination: {
            total: number;
            totalPages: number;
            page?: number | undefined;
            limit?: number | undefined;
        };
    }>;
}, "strip", z.ZodTypeAny, {
    message: string;
    success: boolean;
    data: {
        items: unknown[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    timestamp: Date;
    error?: {
        code: string;
        message: string;
        details?: unknown;
    } | undefined;
}, {
    message: string;
    success: boolean;
    data: {
        items: unknown[];
        pagination: {
            total: number;
            totalPages: number;
            page?: number | undefined;
            limit?: number | undefined;
        };
    };
    timestamp: Date;
    error?: {
        code: string;
        message: string;
        details?: unknown;
    } | undefined;
}>;
declare const ErrorResponseSchema: z.ZodObject<{
    success: z.ZodLiteral<false>;
    message: z.ZodString;
    error: z.ZodObject<{
        code: z.ZodString;
        message: z.ZodString;
        details: z.ZodOptional<z.ZodUnknown>;
    }, "strip", z.ZodTypeAny, {
        code: string;
        message: string;
        details?: unknown;
    }, {
        code: string;
        message: string;
        details?: unknown;
    }>;
    timestamp: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    message: string;
    success: false;
    error: {
        code: string;
        message: string;
        details?: unknown;
    };
    timestamp: Date;
}, {
    message: string;
    success: false;
    error: {
        code: string;
        message: string;
        details?: unknown;
    };
    timestamp: Date;
}>;
declare const SuccessResponseSchema: z.ZodObject<{
    success: z.ZodLiteral<true>;
    message: z.ZodString;
    data: z.ZodOptional<z.ZodUnknown>;
    timestamp: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    message: string;
    success: true;
    timestamp: Date;
    data?: unknown;
}, {
    message: string;
    success: true;
    timestamp: Date;
    data?: unknown;
}>;
type ApiResponse<T = unknown> = {
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
type PaginatedResponse<T = unknown> = {
    success: boolean;
    message: string;
    data: {
        items: T[];
        pagination: Pagination;
    };
    timestamp: Date;
};
type Pagination = z.infer<typeof PaginationSchema>;
type ErrorResponse = z.infer<typeof ErrorResponseSchema>;
type SuccessResponse<T = unknown> = Omit<z.infer<typeof SuccessResponseSchema>, 'data'> & {
    data?: T;
};

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

declare const buttonVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
declare function Button({ className, variant, size, asChild, ...props }: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
}): react_jsx_runtime.JSX.Element;

export { type ApiResponse, ApiResponseSchema, Button, type CreateProduct, CreateProductSchema, type CreateUser, CreateUserSchema, type ErrorResponse, ErrorResponseSchema, type PaginatedResponse, PaginatedResponseSchema, type Pagination, PaginationSchema, type Product, type ProductFilter, ProductFilterSchema, ProductSchema, type SuccessResponse, SuccessResponseSchema, type UpdateProduct, UpdateProductSchema, type UpdateUser, UpdateUserSchema, type User, UserSchema, ValidationError, buttonVariants, capitalize, cn, createApiResponse, createErrorResponse, createSuccessResponse, debounce, formatDate, formatDateTime, formatPrice, generateId, isEmail, isUrl, omit, pick, safeValidate, slugify, throttle, truncate, validateSchema, validateSchemaOrThrow };

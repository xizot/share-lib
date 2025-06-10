import { z } from 'zod';

declare const ApiResponseSchema: z.ZodObject<{
    success: z.ZodBoolean;
    message: z.ZodString;
    data: z.ZodOptional<z.ZodUnknown>;
    error: z.ZodOptional<z.ZodObject<{
        code: z.ZodString;
        message: z.ZodString;
        details: z.ZodOptional<z.ZodUnknown>;
    }, "strip", z.ZodTypeAny, {
        message: string;
        code: string;
        details?: unknown;
    }, {
        message: string;
        code: string;
        details?: unknown;
    }>>;
    timestamp: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    success: boolean;
    message: string;
    timestamp: Date;
    data?: unknown;
    error?: {
        message: string;
        code: string;
        details?: unknown;
    } | undefined;
}, {
    success: boolean;
    message: string;
    timestamp: Date;
    data?: unknown;
    error?: {
        message: string;
        code: string;
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
        message: string;
        code: string;
        details?: unknown;
    }, {
        message: string;
        code: string;
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
    success: boolean;
    message: string;
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
        message: string;
        code: string;
        details?: unknown;
    } | undefined;
}, {
    success: boolean;
    message: string;
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
        message: string;
        code: string;
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
        message: string;
        code: string;
        details?: unknown;
    }, {
        message: string;
        code: string;
        details?: unknown;
    }>;
    timestamp: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    success: false;
    message: string;
    error: {
        message: string;
        code: string;
        details?: unknown;
    };
    timestamp: Date;
}, {
    success: false;
    message: string;
    error: {
        message: string;
        code: string;
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
    success: true;
    message: string;
    timestamp: Date;
    data?: unknown;
}, {
    success: true;
    message: string;
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

export { type ApiResponse as A, type ErrorResponse as E, PaginationSchema as P, type SuccessResponse as S, ApiResponseSchema as a, PaginatedResponseSchema as b, ErrorResponseSchema as c, SuccessResponseSchema as d, type PaginatedResponse as e, type Pagination as f };

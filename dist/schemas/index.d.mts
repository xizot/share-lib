import { z } from 'zod';
export { b as ApiResponse, A as ApiResponseSchema, e as ErrorResponse, E as ErrorResponseSchema, c as PaginatedResponse, a as PaginatedResponseSchema, d as Pagination, P as PaginationSchema, f as SuccessResponse, S as SuccessResponseSchema } from '../api.schema-BN4JtsXa.mjs';

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

export { type CreateProduct, CreateProductSchema, type CreateUser, CreateUserSchema, type Product, type ProductFilter, ProductFilterSchema, ProductSchema, type UpdateProduct, UpdateProductSchema, type UpdateUser, UpdateUserSchema, type User, UserSchema };

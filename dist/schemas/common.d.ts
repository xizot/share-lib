import { z } from 'zod';

declare const idSchema: z.ZodString;
declare const paginationSchema: z.ZodObject<{
    page: z.ZodDefault<z.ZodNumber>;
    limit: z.ZodDefault<z.ZodNumber>;
    sortBy: z.ZodOptional<z.ZodString>;
    sortOrder: z.ZodDefault<z.ZodEnum<["asc", "desc"]>>;
}, "strip", z.ZodTypeAny, {
    page: number;
    limit: number;
    sortOrder: "desc" | "asc";
    sortBy?: string | undefined;
}, {
    page?: number | undefined;
    limit?: number | undefined;
    sortBy?: string | undefined;
    sortOrder?: "desc" | "asc" | undefined;
}>;
declare const timestampSchema: z.ZodObject<{
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    createdAt: Date;
    updatedAt: Date;
}, {
    createdAt: Date;
    updatedAt: Date;
}>;
declare const contactSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    phone: z.ZodOptional<z.ZodString>;
    message: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    email: string;
    message: string;
    phone?: string | undefined;
}, {
    name: string;
    email: string;
    message: string;
    phone?: string | undefined;
}>;
declare const addressSchema: z.ZodObject<{
    street: z.ZodString;
    city: z.ZodString;
    state: z.ZodString;
    postalCode: z.ZodString;
    country: z.ZodString;
}, "strip", z.ZodTypeAny, {
    country: string;
    street: string;
    city: string;
    state: string;
    postalCode: string;
}, {
    country: string;
    street: string;
    city: string;
    state: string;
    postalCode: string;
}>;
declare const fileUploadSchema: z.ZodObject<{
    file: z.ZodType<File, z.ZodTypeDef, File>;
    maxSize: z.ZodDefault<z.ZodNumber>;
    allowedTypes: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    file: File;
    maxSize: number;
    allowedTypes: string[];
}, {
    file: File;
    maxSize?: number | undefined;
    allowedTypes?: string[] | undefined;
}>;
declare const statusSchema: z.ZodEnum<["active", "inactive", "pending", "archived"]>;
type ID = z.infer<typeof idSchema>;
type PaginationParams = z.infer<typeof paginationSchema>;
type Timestamp = z.infer<typeof timestampSchema>;
type ContactFormData = z.infer<typeof contactSchema>;
type Address = z.infer<typeof addressSchema>;
type FileUpload = z.infer<typeof fileUploadSchema>;
type Status = z.infer<typeof statusSchema>;

export { type Address, type ContactFormData, type FileUpload, type ID, type PaginationParams, type Status, type Timestamp, addressSchema, contactSchema, fileUploadSchema, idSchema, paginationSchema, statusSchema, timestampSchema };

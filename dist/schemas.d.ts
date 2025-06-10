import { z } from 'zod';

declare const userSchema: z.ZodObject<{
    id: z.ZodString;
    email: z.ZodString;
    name: z.ZodString;
    avatar: z.ZodOptional<z.ZodString>;
    role: z.ZodEnum<["admin", "user", "moderator"]>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    name: string;
    id: string;
    role: "admin" | "user" | "moderator";
    createdAt: string;
    updatedAt: string;
    avatar?: string | undefined;
}, {
    email: string;
    name: string;
    id: string;
    role: "admin" | "user" | "moderator";
    createdAt: string;
    updatedAt: string;
    avatar?: string | undefined;
}>;
declare const createUserSchema: z.ZodObject<Omit<{
    id: z.ZodString;
    email: z.ZodString;
    name: z.ZodString;
    avatar: z.ZodOptional<z.ZodString>;
    role: z.ZodEnum<["admin", "user", "moderator"]>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, "id" | "createdAt" | "updatedAt">, "strip", z.ZodTypeAny, {
    email: string;
    name: string;
    role: "admin" | "user" | "moderator";
    avatar?: string | undefined;
}, {
    email: string;
    name: string;
    role: "admin" | "user" | "moderator";
    avatar?: string | undefined;
}>;
declare const updateUserSchema: z.ZodObject<{
    email: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    role: z.ZodOptional<z.ZodEnum<["admin", "user", "moderator"]>>;
    avatar: z.ZodOptional<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    email?: string | undefined;
    name?: string | undefined;
    role?: "admin" | "user" | "moderator" | undefined;
    avatar?: string | undefined;
}, {
    email?: string | undefined;
    name?: string | undefined;
    role?: "admin" | "user" | "moderator" | undefined;
    avatar?: string | undefined;
}>;
declare const loginSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
declare const registerSchema: z.ZodEffects<z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
} & {
    name: z.ZodString;
    confirmPassword: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
    name: string;
    confirmPassword: string;
}, {
    email: string;
    password: string;
    name: string;
    confirmPassword: string;
}>, {
    email: string;
    password: string;
    name: string;
    confirmPassword: string;
}, {
    email: string;
    password: string;
    name: string;
    confirmPassword: string;
}>;
declare const apiResponseSchema: <T extends z.ZodTypeAny>(dataSchema: T) => z.ZodObject<{
    data: T;
    message: z.ZodString;
    success: z.ZodBoolean;
    error: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
    data: T;
    message: z.ZodString;
    success: z.ZodBoolean;
    error: z.ZodOptional<z.ZodString>;
}>, any> extends infer T_1 ? { [k in keyof T_1]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
    data: T;
    message: z.ZodString;
    success: z.ZodBoolean;
    error: z.ZodOptional<z.ZodString>;
}>, any>[k]; } : never, z.baseObjectInputType<{
    data: T;
    message: z.ZodString;
    success: z.ZodBoolean;
    error: z.ZodOptional<z.ZodString>;
}> extends infer T_2 ? { [k_1 in keyof T_2]: z.baseObjectInputType<{
    data: T;
    message: z.ZodString;
    success: z.ZodBoolean;
    error: z.ZodOptional<z.ZodString>;
}>[k_1]; } : never>;
declare const paginatedResponseSchema: <T extends z.ZodTypeAny>(itemSchema: T) => z.ZodObject<{
    data: z.ZodArray<T, "many">;
    message: z.ZodString;
    success: z.ZodBoolean;
    error: z.ZodOptional<z.ZodString>;
    pagination: z.ZodObject<{
        page: z.ZodNumber;
        limit: z.ZodNumber;
        total: z.ZodNumber;
        totalPages: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    }, {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    }>;
}, "strip", z.ZodTypeAny, {
    message: string;
    data: T["_output"][];
    success: boolean;
    pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
    error?: string | undefined;
}, {
    message: string;
    data: T["_input"][];
    success: boolean;
    pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
    error?: string | undefined;
}>;
declare const contactFormSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    subject: z.ZodString;
    message: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    name: string;
    message: string;
    subject: string;
}, {
    email: string;
    name: string;
    message: string;
    subject: string;
}>;
declare const themeConfigSchema: z.ZodObject<{
    theme: z.ZodEnum<["light", "dark", "system"]>;
    primaryColor: z.ZodString;
    secondaryColor: z.ZodString;
}, "strip", z.ZodTypeAny, {
    theme: "light" | "dark" | "system";
    primaryColor: string;
    secondaryColor: string;
}, {
    theme: "light" | "dark" | "system";
    primaryColor: string;
    secondaryColor: string;
}>;
type UserSchema = z.infer<typeof userSchema>;
type CreateUserSchema = z.infer<typeof createUserSchema>;
type UpdateUserSchema = z.infer<typeof updateUserSchema>;
type LoginSchema = z.infer<typeof loginSchema>;
type RegisterSchema = z.infer<typeof registerSchema>;
type ContactFormSchema = z.infer<typeof contactFormSchema>;
type ThemeConfigSchema = z.infer<typeof themeConfigSchema>;

export { type ContactFormSchema, type CreateUserSchema, type LoginSchema, type RegisterSchema, type ThemeConfigSchema, type UpdateUserSchema, type UserSchema, apiResponseSchema, contactFormSchema, createUserSchema, loginSchema, paginatedResponseSchema, registerSchema, themeConfigSchema, updateUserSchema, userSchema };

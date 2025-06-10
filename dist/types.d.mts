interface ApiResponse<T = any> {
    data: T;
    message: string;
    success: boolean;
    error?: string;
}
interface PaginatedResponse<T = any> extends ApiResponse<T[]> {
    pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
}
interface User {
    id: string;
    email: string;
    name: string;
    avatar?: string;
    role: 'admin' | 'user' | 'moderator';
    createdAt: string;
    updatedAt: string;
}
interface FormField {
    name: string;
    label: string;
    type: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
    required?: boolean;
    placeholder?: string;
    validation?: {
        min?: number;
        max?: number;
        pattern?: string;
        message?: string;
    };
}
type Theme = 'light' | 'dark' | 'system';
interface ThemeConfig {
    theme: Theme;
    primaryColor: string;
    secondaryColor: string;
}
interface NavItem {
    id: string;
    label: string;
    href: string;
    icon?: string;
    children?: NavItem[];
    isActive?: boolean;
}
type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
type RequiredKeys<T, K extends keyof T> = T & Required<Pick<T, K>>;
type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type { ApiResponse, DeepPartial, FormField, NavItem, Optional, PaginatedResponse, RequiredKeys, Theme, ThemeConfig, User };

// Common API types
export interface ApiResponse<T = any> {
  data: T
  message: string
  success: boolean
  error?: string
}

export interface PaginatedResponse<T = any> extends ApiResponse<T[]> {
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

// User types
export interface User {
  id: string
  email: string
  name: string
  avatar?: string
  role: 'admin' | 'user' | 'moderator'
  createdAt: string
  updatedAt: string
}

// Form types
export interface FormField {
  name: string
  label: string
  type: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url'
  required?: boolean
  placeholder?: string
  validation?: {
    min?: number
    max?: number
    pattern?: string
    message?: string
  }
}

// Theme types
export type Theme = 'light' | 'dark' | 'system'

export interface ThemeConfig {
  theme: Theme
  primaryColor: string
  secondaryColor: string
}

// Navigation types
export interface NavItem {
  id: string
  label: string
  href: string
  icon?: string
  children?: NavItem[]
  isActive?: boolean
}

// Generic utility types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
export type RequiredKeys<T, K extends keyof T> = T & Required<Pick<T, K>>
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
} 
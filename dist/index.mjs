import { z } from 'zod';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { jsx } from 'react/jsx-runtime';

// src/schemas/user.schema.ts
var UserSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email("Invalid email address"),
  username: z.string().min(3, "Username must be at least 3 characters").max(20, "Username must be at most 20 characters"),
  fullName: z.string().min(1, "Full name is required").max(100, "Full name must be at most 100 characters"),
  avatar: z.string().url().optional(),
  role: z.enum(["admin", "user", "moderator"]).default("user"),
  isActive: z.boolean().default(true),
  createdAt: z.date(),
  updatedAt: z.date()
});
var CreateUserSchema = UserSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true
});
var UpdateUserSchema = UserSchema.partial().omit({
  id: true,
  createdAt: true
});
var ProductSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, "Product name is required").max(200, "Product name must be at most 200 characters"),
  description: z.string().min(10, "Description must be at least 10 characters").max(1e3, "Description must be at most 1000 characters"),
  price: z.number().positive("Price must be positive"),
  currency: z.enum(["USD", "EUR", "VND"]).default("USD"),
  category: z.string().min(1, "Category is required"),
  tags: z.array(z.string()).default([]),
  images: z.array(z.string().url()).default([]),
  inStock: z.boolean().default(true),
  stockQuantity: z.number().int().min(0, "Stock quantity must be non-negative").default(0),
  weight: z.number().positive().optional(),
  dimensions: z.object({
    length: z.number().positive(),
    width: z.number().positive(),
    height: z.number().positive()
  }).optional(),
  isActive: z.boolean().default(true),
  createdAt: z.date(),
  updatedAt: z.date()
});
var CreateProductSchema = ProductSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true
});
var UpdateProductSchema = ProductSchema.partial().omit({
  id: true,
  createdAt: true
});
var ProductFilterSchema = z.object({
  category: z.string().optional(),
  minPrice: z.number().positive().optional(),
  maxPrice: z.number().positive().optional(),
  inStock: z.boolean().optional(),
  tags: z.array(z.string()).optional()
});
var ApiResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  data: z.unknown().optional(),
  error: z.object({
    code: z.string(),
    message: z.string(),
    details: z.unknown().optional()
  }).optional(),
  timestamp: z.date()
});
var PaginationSchema = z.object({
  page: z.number().int().min(1, "Page must be at least 1").default(1),
  limit: z.number().int().min(1, "Limit must be at least 1").max(100, "Limit must be at most 100").default(10),
  total: z.number().int().min(0, "Total must be non-negative"),
  totalPages: z.number().int().min(0, "Total pages must be non-negative")
});
var PaginatedResponseSchema = ApiResponseSchema.extend({
  data: z.object({
    items: z.array(z.unknown()),
    pagination: PaginationSchema
  })
});
var ErrorResponseSchema = z.object({
  success: z.literal(false),
  message: z.string(),
  error: z.object({
    code: z.string(),
    message: z.string(),
    details: z.unknown().optional()
  }),
  timestamp: z.date()
});
var SuccessResponseSchema = z.object({
  success: z.literal(true),
  message: z.string(),
  data: z.unknown().optional(),
  timestamp: z.date()
});
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/lib/helpers.ts
function formatPrice(price, currency = "USD") {
  const formatters = {
    USD: new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }),
    EUR: new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }),
    VND: new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" })
  };
  return formatters[currency].format(price);
}
function formatDate(date, locale = "en-US") {
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(date);
}
function formatDateTime(date, locale = "en-US") {
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }).format(date);
}
function generateId() {
  return crypto.randomUUID();
}
function slugify(text) {
  return text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}
function truncate(text, maxLength) {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 3) + "...";
}
function debounce(func, delay) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}
function throttle(func, limit) {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
function isEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
function isUrl(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}
function omit(obj, keys) {
  const result = { ...obj };
  keys.forEach((key) => delete result[key]);
  return result;
}
function pick(obj, keys) {
  const result = {};
  keys.forEach((key) => {
    if (key in obj) {
      result[key] = obj[key];
    }
  });
  return result;
}
var ValidationError = class extends Error {
  constructor(message, errors) {
    super(message);
    this.errors = errors;
    this.name = "ValidationError";
  }
};
function validateSchema(schema, data) {
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
function validateSchemaOrThrow(schema, data) {
  try {
    return schema.parse(data);
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new ValidationError("Validation failed", error);
    }
    throw error;
  }
}
function safeValidate(schema, data) {
  try {
    const result = schema.parse(data);
    return { data: result, errors: [] };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors = error.errors.map(
        (err) => `${err.path.join(".")}: ${err.message}`
      );
      return { data: null, errors };
    }
    return { data: null, errors: ["Unknown validation error"] };
  }
}
function createApiResponse(success, message, data, error) {
  return {
    success,
    message,
    data,
    error,
    timestamp: /* @__PURE__ */ new Date()
  };
}
function createSuccessResponse(message, data) {
  return {
    success: true,
    message,
    data,
    timestamp: /* @__PURE__ */ new Date()
  };
}
function createErrorResponse(message, code, details) {
  return {
    success: false,
    message,
    error: {
      code,
      message,
      details
    },
    timestamp: /* @__PURE__ */ new Date()
  };
}
var buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}

export { ApiResponseSchema, Button, CreateProductSchema, CreateUserSchema, ErrorResponseSchema, PaginatedResponseSchema, PaginationSchema, ProductFilterSchema, ProductSchema, SuccessResponseSchema, UpdateProductSchema, UpdateUserSchema, UserSchema, ValidationError, buttonVariants, capitalize, cn, createApiResponse, createErrorResponse, createSuccessResponse, debounce, formatDate, formatDateTime, formatPrice, generateId, isEmail, isUrl, omit, pick, safeValidate, slugify, throttle, truncate, validateSchema, validateSchemaOrThrow };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map
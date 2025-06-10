'use strict';

var zod = require('zod');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var reactSlot = require('@radix-ui/react-slot');
var classVarianceAuthority = require('class-variance-authority');
var jsxRuntime = require('react/jsx-runtime');

// src/schemas/user.schema.ts
var UserSchema = zod.z.object({
  id: zod.z.string().uuid(),
  email: zod.z.string().email("Invalid email address"),
  username: zod.z.string().min(3, "Username must be at least 3 characters").max(20, "Username must be at most 20 characters"),
  fullName: zod.z.string().min(1, "Full name is required").max(100, "Full name must be at most 100 characters"),
  avatar: zod.z.string().url().optional(),
  role: zod.z.enum(["admin", "user", "moderator"]).default("user"),
  isActive: zod.z.boolean().default(true),
  createdAt: zod.z.date(),
  updatedAt: zod.z.date()
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
var ProductSchema = zod.z.object({
  id: zod.z.string().uuid(),
  name: zod.z.string().min(1, "Product name is required").max(200, "Product name must be at most 200 characters"),
  description: zod.z.string().min(10, "Description must be at least 10 characters").max(1e3, "Description must be at most 1000 characters"),
  price: zod.z.number().positive("Price must be positive"),
  currency: zod.z.enum(["USD", "EUR", "VND"]).default("USD"),
  category: zod.z.string().min(1, "Category is required"),
  tags: zod.z.array(zod.z.string()).default([]),
  images: zod.z.array(zod.z.string().url()).default([]),
  inStock: zod.z.boolean().default(true),
  stockQuantity: zod.z.number().int().min(0, "Stock quantity must be non-negative").default(0),
  weight: zod.z.number().positive().optional(),
  dimensions: zod.z.object({
    length: zod.z.number().positive(),
    width: zod.z.number().positive(),
    height: zod.z.number().positive()
  }).optional(),
  isActive: zod.z.boolean().default(true),
  createdAt: zod.z.date(),
  updatedAt: zod.z.date()
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
var ProductFilterSchema = zod.z.object({
  category: zod.z.string().optional(),
  minPrice: zod.z.number().positive().optional(),
  maxPrice: zod.z.number().positive().optional(),
  inStock: zod.z.boolean().optional(),
  tags: zod.z.array(zod.z.string()).optional()
});
var ApiResponseSchema = zod.z.object({
  success: zod.z.boolean(),
  message: zod.z.string(),
  data: zod.z.unknown().optional(),
  error: zod.z.object({
    code: zod.z.string(),
    message: zod.z.string(),
    details: zod.z.unknown().optional()
  }).optional(),
  timestamp: zod.z.date()
});
var PaginationSchema = zod.z.object({
  page: zod.z.number().int().min(1, "Page must be at least 1").default(1),
  limit: zod.z.number().int().min(1, "Limit must be at least 1").max(100, "Limit must be at most 100").default(10),
  total: zod.z.number().int().min(0, "Total must be non-negative"),
  totalPages: zod.z.number().int().min(0, "Total pages must be non-negative")
});
var PaginatedResponseSchema = ApiResponseSchema.extend({
  data: zod.z.object({
    items: zod.z.array(zod.z.unknown()),
    pagination: PaginationSchema
  })
});
var ErrorResponseSchema = zod.z.object({
  success: zod.z.literal(false),
  message: zod.z.string(),
  error: zod.z.object({
    code: zod.z.string(),
    message: zod.z.string(),
    details: zod.z.unknown().optional()
  }),
  timestamp: zod.z.date()
});
var SuccessResponseSchema = zod.z.object({
  success: zod.z.literal(true),
  message: zod.z.string(),
  data: zod.z.unknown().optional(),
  timestamp: zod.z.date()
});
function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
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
    if (error instanceof zod.z.ZodError) {
      return { success: false, error };
    }
    throw error;
  }
}
function validateSchemaOrThrow(schema, data) {
  try {
    return schema.parse(data);
  } catch (error) {
    if (error instanceof zod.z.ZodError) {
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
    if (error instanceof zod.z.ZodError) {
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
var buttonVariants = classVarianceAuthority.cva(
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
  const Comp = asChild ? reactSlot.Slot : "button";
  return /* @__PURE__ */ jsxRuntime.jsx(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}

exports.ApiResponseSchema = ApiResponseSchema;
exports.Button = Button;
exports.CreateProductSchema = CreateProductSchema;
exports.CreateUserSchema = CreateUserSchema;
exports.ErrorResponseSchema = ErrorResponseSchema;
exports.PaginatedResponseSchema = PaginatedResponseSchema;
exports.PaginationSchema = PaginationSchema;
exports.ProductFilterSchema = ProductFilterSchema;
exports.ProductSchema = ProductSchema;
exports.SuccessResponseSchema = SuccessResponseSchema;
exports.UpdateProductSchema = UpdateProductSchema;
exports.UpdateUserSchema = UpdateUserSchema;
exports.UserSchema = UserSchema;
exports.ValidationError = ValidationError;
exports.buttonVariants = buttonVariants;
exports.capitalize = capitalize;
exports.cn = cn;
exports.createApiResponse = createApiResponse;
exports.createErrorResponse = createErrorResponse;
exports.createSuccessResponse = createSuccessResponse;
exports.debounce = debounce;
exports.formatDate = formatDate;
exports.formatDateTime = formatDateTime;
exports.formatPrice = formatPrice;
exports.generateId = generateId;
exports.isEmail = isEmail;
exports.isUrl = isUrl;
exports.omit = omit;
exports.pick = pick;
exports.safeValidate = safeValidate;
exports.slugify = slugify;
exports.throttle = throttle;
exports.truncate = truncate;
exports.validateSchema = validateSchema;
exports.validateSchemaOrThrow = validateSchemaOrThrow;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
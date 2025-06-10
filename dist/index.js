"use client";
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Button: () => Button,
  Card: () => Card,
  CardContent: () => CardContent,
  CardDescription: () => CardDescription,
  CardFooter: () => CardFooter,
  CardHeader: () => CardHeader,
  CardTitle: () => CardTitle,
  Input: () => Input,
  Label: () => Label,
  addressSchema: () => addressSchema,
  buttonVariants: () => buttonVariants,
  capitalizeFirst: () => capitalizeFirst,
  cn: () => cn,
  contactSchema: () => contactSchema,
  fileUploadSchema: () => fileUploadSchema,
  forgotPasswordSchema: () => forgotPasswordSchema,
  formatCurrency: () => formatCurrency,
  formatDate: () => formatDate,
  formatFileSize: () => formatFileSize,
  formatInitials: () => formatInitials,
  formatPhoneNumber: () => formatPhoneNumber,
  formatRelativeTime: () => formatRelativeTime,
  idSchema: () => idSchema,
  isEmpty: () => isEmpty,
  isStrongPassword: () => isStrongPassword,
  isValidCreditCard: () => isValidCreditCard,
  isValidEmail: () => isValidEmail,
  isValidPassword: () => isValidPassword,
  isValidPhoneNumber: () => isValidPhoneNumber,
  isValidPostalCode: () => isValidPostalCode,
  isValidUrl: () => isValidUrl,
  loginSchema: () => loginSchema,
  paginationSchema: () => paginationSchema,
  registerSchema: () => registerSchema,
  resetPasswordSchema: () => resetPasswordSchema,
  statusSchema: () => statusSchema,
  timestampSchema: () => timestampSchema,
  truncateText: () => truncateText,
  useApi: () => useApi,
  useDebounce: () => useDebounce,
  useLocalStorage: () => useLocalStorage,
  useToggle: () => useToggle,
  userProfileSchema: () => userProfileSchema
});
module.exports = __toCommonJS(index_exports);

// src/components/ui/button.tsx
var React = __toESM(require("react"));
var import_react_slot = require("@radix-ui/react-slot");
var import_class_variance_authority = require("class-variance-authority");

// src/utils/cn.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/components/ui/button.tsx
var buttonVariants = (0, import_class_variance_authority.cva)(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? import_react_slot.Slot : "button";
    return /* @__PURE__ */ React.createElement(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

// src/components/ui/input.tsx
var React2 = __toESM(require("react"));
var Input = React2.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ React2.createElement(
      "input",
      {
        type,
        className: cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";

// src/components/ui/card.tsx
var React3 = __toESM(require("react"));
var Card = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React3.createElement(
  "div",
  {
    ref,
    className: cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
var CardHeader = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React3.createElement(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
var CardTitle = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React3.createElement(
  "h3",
  {
    ref,
    className: cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
var CardDescription = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React3.createElement(
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
var CardContent = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React3.createElement("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
var CardFooter = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React3.createElement(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";

// src/components/ui/label.tsx
var React4 = __toESM(require("react"));
var LabelPrimitive = __toESM(require("@radix-ui/react-label"));
var import_class_variance_authority2 = require("class-variance-authority");
var labelVariants = (0, import_class_variance_authority2.cva)(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
var Label = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React4.createElement(
  LabelPrimitive.Root,
  {
    ref,
    className: cn(labelVariants(), className),
    ...props
  }
));
Label.displayName = LabelPrimitive.Root.displayName;

// src/schemas/auth.ts
var import_zod = require("zod");
var loginSchema = import_zod.z.object({
  email: import_zod.z.string().email("Invalid email address"),
  password: import_zod.z.string().min(6, "Password must be at least 6 characters")
});
var registerSchema = import_zod.z.object({
  email: import_zod.z.string().email("Invalid email address"),
  password: import_zod.z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: import_zod.z.string(),
  firstName: import_zod.z.string().min(1, "First name is required"),
  lastName: import_zod.z.string().min(1, "Last name is required")
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
});
var forgotPasswordSchema = import_zod.z.object({
  email: import_zod.z.string().email("Invalid email address")
});
var resetPasswordSchema = import_zod.z.object({
  password: import_zod.z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: import_zod.z.string(),
  token: import_zod.z.string().min(1, "Token is required")
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
});
var userProfileSchema = import_zod.z.object({
  firstName: import_zod.z.string().min(1, "First name is required"),
  lastName: import_zod.z.string().min(1, "Last name is required"),
  email: import_zod.z.string().email("Invalid email address"),
  phone: import_zod.z.string().optional(),
  bio: import_zod.z.string().max(500, "Bio must be less than 500 characters").optional(),
  website: import_zod.z.string().url("Invalid URL").optional().or(import_zod.z.literal(""))
});

// src/schemas/common.ts
var import_zod2 = require("zod");
var idSchema = import_zod2.z.string().uuid("Invalid ID format");
var paginationSchema = import_zod2.z.object({
  page: import_zod2.z.number().min(1, "Page must be at least 1").default(1),
  limit: import_zod2.z.number().min(1, "Limit must be at least 1").max(100, "Limit cannot exceed 100").default(10),
  sortBy: import_zod2.z.string().optional(),
  sortOrder: import_zod2.z.enum(["asc", "desc"]).default("desc")
});
var timestampSchema = import_zod2.z.object({
  createdAt: import_zod2.z.date(),
  updatedAt: import_zod2.z.date()
});
var contactSchema = import_zod2.z.object({
  name: import_zod2.z.string().min(1, "Name is required"),
  email: import_zod2.z.string().email("Invalid email address"),
  phone: import_zod2.z.string().optional(),
  message: import_zod2.z.string().min(1, "Message is required").max(1e3, "Message must be less than 1000 characters")
});
var addressSchema = import_zod2.z.object({
  street: import_zod2.z.string().min(1, "Street is required"),
  city: import_zod2.z.string().min(1, "City is required"),
  state: import_zod2.z.string().min(1, "State is required"),
  postalCode: import_zod2.z.string().min(1, "Postal code is required"),
  country: import_zod2.z.string().min(1, "Country is required")
});
var fileUploadSchema = import_zod2.z.object({
  file: import_zod2.z.instanceof(File, { message: "Invalid file" }),
  maxSize: import_zod2.z.number().default(5 * 1024 * 1024),
  // 5MB
  allowedTypes: import_zod2.z.array(import_zod2.z.string()).default(["image/jpeg", "image/png", "image/gif"])
});
var statusSchema = import_zod2.z.enum(["active", "inactive", "pending", "archived"]);

// src/hooks/use-local-storage.ts
var import_react = require("react");
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = (0, import_react.useState)(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });
  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue];
}

// src/hooks/use-debounce.ts
var import_react2 = require("react");
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = (0, import_react2.useState)(value);
  (0, import_react2.useEffect)(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}

// src/hooks/use-toggle.ts
var import_react3 = require("react");
function useToggle(initialValue = false) {
  const [value, setValue] = (0, import_react3.useState)(initialValue);
  const toggle = (0, import_react3.useCallback)(() => setValue((v) => !v), []);
  const setToggle = (0, import_react3.useCallback)((newValue) => setValue(newValue), []);
  return [value, toggle, setToggle];
}

// src/hooks/use-api.ts
var import_react4 = require("react");
function useApi(apiFunction, options = {}) {
  const { immediate = false } = options;
  const [data, setData] = (0, import_react4.useState)(null);
  const [loading, setLoading] = (0, import_react4.useState)(immediate);
  const [error, setError] = (0, import_react4.useState)(null);
  const execute = (0, import_react4.useCallback)(async (...args) => {
    try {
      setLoading(true);
      setError(null);
      const result = await apiFunction(...args);
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  }, [apiFunction]);
  (0, import_react4.useEffect)(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);
  return { data, loading, error, execute };
}

// src/utils/formatters.ts
function formatCurrency(amount, currency = "USD", locale = "en-US") {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency
  }).format(amount);
}
function formatDate(date, options = {}, locale = "en-US") {
  const dateObj = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
    ...options
  }).format(dateObj);
}
function formatRelativeTime(date) {
  const now = /* @__PURE__ */ new Date();
  const dateObj = typeof date === "string" ? new Date(date) : date;
  const diffInSeconds = Math.floor((now.getTime() - dateObj.getTime()) / 1e3);
  if (diffInSeconds < 60) return "just now";
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
  if (diffInSeconds < 2592e3) return `${Math.floor(diffInSeconds / 86400)} days ago`;
  return formatDate(dateObj);
}
function formatFileSize(bytes) {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}
function formatPhoneNumber(phoneNumber) {
  const cleaned = phoneNumber.replace(/\D/g, "");
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phoneNumber;
}
function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}
function capitalizeFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
function formatInitials(firstName, lastName) {
  return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
}

// src/utils/validators.ts
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
function isValidPhoneNumber(phone) {
  const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/;
  return phoneRegex.test(phone);
}
function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}
function isValidPassword(password, minLength = 6) {
  return password.length >= minLength;
}
function isStrongPassword(password) {
  const hasLowerCase = /[a-z]/.test(password);
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const isLongEnough = password.length >= 8;
  return hasLowerCase && hasUpperCase && hasNumber && hasSpecialChar && isLongEnough;
}
function isValidCreditCard(cardNumber) {
  const cleaned = cardNumber.replace(/\D/g, "");
  if (cleaned.length < 13 || cleaned.length > 19) {
    return false;
  }
  let sum = 0;
  let isEven = false;
  for (let i = cleaned.length - 1; i >= 0; i--) {
    let digit = parseInt(cleaned.charAt(i), 10);
    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
    isEven = !isEven;
  }
  return sum % 10 === 0;
}
function isValidPostalCode(postalCode, country = "US") {
  const patterns = {
    US: /^\d{5}(-\d{4})?$/,
    CA: /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/,
    UK: /^[A-Za-z]{1,2}\d[A-Za-z\d]? \d[A-Za-z]{2}$/
  };
  const pattern = patterns[country];
  return pattern ? pattern.test(postalCode) : true;
}
function isEmpty(value) {
  if (value === null || value === void 0) return true;
  if (typeof value === "string") return value.trim().length === 0;
  if (Array.isArray(value)) return value.length === 0;
  if (typeof value === "object") return Object.keys(value).length === 0;
  return false;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Label,
  addressSchema,
  buttonVariants,
  capitalizeFirst,
  cn,
  contactSchema,
  fileUploadSchema,
  forgotPasswordSchema,
  formatCurrency,
  formatDate,
  formatFileSize,
  formatInitials,
  formatPhoneNumber,
  formatRelativeTime,
  idSchema,
  isEmpty,
  isStrongPassword,
  isValidCreditCard,
  isValidEmail,
  isValidPassword,
  isValidPhoneNumber,
  isValidPostalCode,
  isValidUrl,
  loginSchema,
  paginationSchema,
  registerSchema,
  resetPasswordSchema,
  statusSchema,
  timestampSchema,
  truncateText,
  useApi,
  useDebounce,
  useLocalStorage,
  useToggle,
  userProfileSchema
});
//# sourceMappingURL=index.js.map
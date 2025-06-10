'use strict';

var jsxRuntime = require('react/jsx-runtime');
var zod = require('zod');

// src/components/Button.tsx
var Button = ({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  fullWidth = false,
  className = "",
  disabled,
  ...props
}) => {
  const baseClasses = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  const variantClasses = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground"
  };
  const sizeClasses = {
    sm: "h-9 px-3 text-sm",
    md: "h-10 px-4 py-2",
    lg: "h-11 px-8 text-lg"
  };
  const widthClass = fullWidth ? "w-full" : "";
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`.trim();
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "button",
    {
      className: classes,
      disabled: disabled || loading,
      ...props,
      children: [
        loading && /* @__PURE__ */ jsxRuntime.jsxs(
          "svg",
          {
            className: "mr-2 h-4 w-4 animate-spin",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(
                "circle",
                {
                  className: "opacity-25",
                  cx: "12",
                  cy: "12",
                  r: "10",
                  stroke: "currentColor",
                  strokeWidth: "4"
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx(
                "path",
                {
                  className: "opacity-75",
                  fill: "currentColor",
                  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                }
              )
            ]
          }
        ),
        children
      ]
    }
  );
};
var Card = ({
  children,
  className = "",
  padding = "md",
  shadow = "md"
}) => {
  const baseClasses = "bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700";
  const paddingClasses = {
    none: "",
    sm: "p-3",
    md: "p-6",
    lg: "p-8"
  };
  const shadowClasses = {
    none: "",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg"
  };
  const classes = `${baseClasses} ${paddingClasses[padding]} ${shadowClasses[shadow]} ${className}`.trim();
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: classes, children });
};
var Modal = ({
  isOpen,
  onClose,
  children,
  title,
  size = "md"
}) => {
  if (!isOpen) return null;
  const sizeClasses = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl"
  };
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4", children: [
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50", onClick: onClose }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: `relative bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full ${sizeClasses[size]}`, children: [
      title && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "px-6 py-4 border-b border-gray-200 dark:border-gray-700", children: /* @__PURE__ */ jsxRuntime.jsx("h2", { className: "text-xl font-semibold text-gray-900 dark:text-white", children: title }) }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "p-6", children })
    ] })
  ] });
};
var userSchema = zod.z.object({
  id: zod.z.string().uuid(),
  email: zod.z.string().email(),
  name: zod.z.string().min(2).max(50),
  avatar: zod.z.string().url().optional(),
  role: zod.z.enum(["admin", "user", "moderator"]),
  createdAt: zod.z.string().datetime(),
  updatedAt: zod.z.string().datetime()
});
var createUserSchema = userSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true
});
var updateUserSchema = createUserSchema.partial();
var loginSchema = zod.z.object({
  email: zod.z.string().email("Invalid email address"),
  password: zod.z.string().min(6, "Password must be at least 6 characters")
});
var registerSchema = loginSchema.extend({
  name: zod.z.string().min(2, "Name must be at least 2 characters"),
  confirmPassword: zod.z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
});
var apiResponseSchema = (dataSchema) => zod.z.object({
  data: dataSchema,
  message: zod.z.string(),
  success: zod.z.boolean(),
  error: zod.z.string().optional()
});
var paginatedResponseSchema = (itemSchema) => zod.z.object({
  data: zod.z.array(itemSchema),
  message: zod.z.string(),
  success: zod.z.boolean(),
  error: zod.z.string().optional(),
  pagination: zod.z.object({
    page: zod.z.number().int().positive(),
    limit: zod.z.number().int().positive(),
    total: zod.z.number().int().nonnegative(),
    totalPages: zod.z.number().int().nonnegative()
  })
});
var contactFormSchema = zod.z.object({
  name: zod.z.string().min(2, "Name is required"),
  email: zod.z.string().email("Invalid email address"),
  subject: zod.z.string().min(5, "Subject must be at least 5 characters"),
  message: zod.z.string().min(10, "Message must be at least 10 characters")
});
var themeConfigSchema = zod.z.object({
  theme: zod.z.enum(["light", "dark", "system"]),
  primaryColor: zod.z.string().regex(/^#[0-9A-F]{6}$/i, "Invalid color format"),
  secondaryColor: zod.z.string().regex(/^#[0-9A-F]{6}$/i, "Invalid color format")
});

// src/utils/index.ts
var formatDate = (date, format = "short") => {
  const d = new Date(date);
  switch (format) {
    case "short":
      return d.toLocaleDateString();
    case "long":
      return d.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    case "time":
      return d.toLocaleTimeString();
    default:
      return d.toLocaleDateString();
  }
};
var timeAgo = (date) => {
  const now = /* @__PURE__ */ new Date();
  const past = new Date(date);
  const diffInSeconds = Math.floor((now.getTime() - past.getTime()) / 1e3);
  if (diffInSeconds < 60) return "just now";
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
  if (diffInSeconds < 2592e3) return `${Math.floor(diffInSeconds / 86400)}d ago`;
  if (diffInSeconds < 31536e3) return `${Math.floor(diffInSeconds / 2592e3)}mo ago`;
  return `${Math.floor(diffInSeconds / 31536e3)}y ago`;
};
var capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
var slugify = (str) => {
  return str.toLowerCase().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
};
var truncate = (str, length) => {
  if (str.length <= length) return str;
  return str.slice(0, length) + "...";
};
var unique = (array) => {
  return [...new Set(array)];
};
var groupBy = (array, key) => {
  return array.reduce((groups, item) => {
    const groupKey = String(item[key]);
    if (!groups[groupKey]) {
      groups[groupKey] = [];
    }
    groups[groupKey].push(item);
    return groups;
  }, {});
};
var sortBy = (array, key, direction = "asc") => {
  return [...array].sort((a, b) => {
    const aVal = a[key];
    const bVal = b[key];
    if (aVal < bVal) return direction === "asc" ? -1 : 1;
    if (aVal > bVal) return direction === "asc" ? 1 : -1;
    return 0;
  });
};
var omit = (obj, keys) => {
  const result = { ...obj };
  keys.forEach((key) => delete result[key]);
  return result;
};
var pick = (obj, keys) => {
  const result = {};
  keys.forEach((key) => {
    if (key in obj) {
      result[key] = obj[key];
    }
  });
  return result;
};
var isEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
var isUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};
var isPhoneNumber = (phone) => {
  const phoneRegex = /^\+?[\d\s\-\(\)]+$/;
  return phoneRegex.test(phone) && phone.replace(/\D/g, "").length >= 10;
};
var delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
var debounce = (func, wait) => {
  let timeout = null;
  return (...args) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};
var throttle = (func, limit) => {
  let inThrottle = false;
  return (...args) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};
var storage = {
  get: (key, defaultValue) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue ?? null;
    } catch {
      return defaultValue ?? null;
    }
  },
  set: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Failed to save to localStorage:", error);
    }
  },
  remove: (key) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error("Failed to remove from localStorage:", error);
    }
  },
  clear: () => {
    try {
      localStorage.clear();
    } catch (error) {
      console.error("Failed to clear localStorage:", error);
    }
  }
};

exports.Button = Button;
exports.Card = Card;
exports.Modal = Modal;
exports.apiResponseSchema = apiResponseSchema;
exports.capitalize = capitalize;
exports.contactFormSchema = contactFormSchema;
exports.createUserSchema = createUserSchema;
exports.debounce = debounce;
exports.delay = delay;
exports.formatDate = formatDate;
exports.groupBy = groupBy;
exports.isEmail = isEmail;
exports.isPhoneNumber = isPhoneNumber;
exports.isUrl = isUrl;
exports.loginSchema = loginSchema;
exports.omit = omit;
exports.paginatedResponseSchema = paginatedResponseSchema;
exports.pick = pick;
exports.registerSchema = registerSchema;
exports.slugify = slugify;
exports.sortBy = sortBy;
exports.storage = storage;
exports.themeConfigSchema = themeConfigSchema;
exports.throttle = throttle;
exports.timeAgo = timeAgo;
exports.truncate = truncate;
exports.unique = unique;
exports.updateUserSchema = updateUserSchema;
exports.userSchema = userSchema;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
'use strict';

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

exports.capitalize = capitalize;
exports.debounce = debounce;
exports.delay = delay;
exports.formatDate = formatDate;
exports.groupBy = groupBy;
exports.isEmail = isEmail;
exports.isPhoneNumber = isPhoneNumber;
exports.isUrl = isUrl;
exports.omit = omit;
exports.pick = pick;
exports.slugify = slugify;
exports.sortBy = sortBy;
exports.storage = storage;
exports.throttle = throttle;
exports.timeAgo = timeAgo;
exports.truncate = truncate;
exports.unique = unique;
//# sourceMappingURL=utils.js.map
//# sourceMappingURL=utils.js.map
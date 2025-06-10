"use client";
"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/hooks/index.ts
var hooks_exports = {};
__export(hooks_exports, {
  useApi: () => useApi,
  useDebounce: () => useDebounce,
  useLocalStorage: () => useLocalStorage,
  useToggle: () => useToggle
});
module.exports = __toCommonJS(hooks_exports);

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useApi,
  useDebounce,
  useLocalStorage,
  useToggle
});
//# sourceMappingURL=index.js.map
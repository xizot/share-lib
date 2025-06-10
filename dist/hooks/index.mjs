"use client";

// src/hooks/use-local-storage.ts
import { useState } from "react";
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
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
import { useState as useState2, useEffect as useEffect2 } from "react";
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState2(value);
  useEffect2(() => {
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
import { useState as useState3, useCallback } from "react";
function useToggle(initialValue = false) {
  const [value, setValue] = useState3(initialValue);
  const toggle = useCallback(() => setValue((v) => !v), []);
  const setToggle = useCallback((newValue) => setValue(newValue), []);
  return [value, toggle, setToggle];
}

// src/hooks/use-api.ts
import { useState as useState4, useEffect as useEffect3, useCallback as useCallback2 } from "react";
function useApi(apiFunction, options = {}) {
  const { immediate = false } = options;
  const [data, setData] = useState4(null);
  const [loading, setLoading] = useState4(immediate);
  const [error, setError] = useState4(null);
  const execute = useCallback2(async (...args) => {
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
  useEffect3(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);
  return { data, loading, error, execute };
}
export {
  useApi,
  useDebounce,
  useLocalStorage,
  useToggle
};
//# sourceMappingURL=index.mjs.map
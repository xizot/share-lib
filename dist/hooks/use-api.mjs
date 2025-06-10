"use client";

// src/hooks/use-api.ts
import { useState, useEffect, useCallback } from "react";
function useApi(apiFunction, options = {}) {
  const { immediate = false } = options;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(immediate);
  const [error, setError] = useState(null);
  const execute = useCallback(async (...args) => {
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
  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);
  return { data, loading, error, execute };
}
export {
  useApi
};
//# sourceMappingURL=use-api.mjs.map
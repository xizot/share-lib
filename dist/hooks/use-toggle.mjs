"use client";

// src/hooks/use-toggle.ts
import { useState, useCallback } from "react";
function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toggle = useCallback(() => setValue((v) => !v), []);
  const setToggle = useCallback((newValue) => setValue(newValue), []);
  return [value, toggle, setToggle];
}
export {
  useToggle
};
//# sourceMappingURL=use-toggle.mjs.map
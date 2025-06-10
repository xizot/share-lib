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

// src/hooks/use-toggle.ts
var use_toggle_exports = {};
__export(use_toggle_exports, {
  useToggle: () => useToggle
});
module.exports = __toCommonJS(use_toggle_exports);
var import_react = require("react");
function useToggle(initialValue = false) {
  const [value, setValue] = (0, import_react.useState)(initialValue);
  const toggle = (0, import_react.useCallback)(() => setValue((v) => !v), []);
  const setToggle = (0, import_react.useCallback)((newValue) => setValue(newValue), []);
  return [value, toggle, setToggle];
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useToggle
});
//# sourceMappingURL=use-toggle.js.map
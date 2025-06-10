'use strict';

var jsxRuntime = require('react/jsx-runtime');

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

exports.Button = Button;
exports.Card = Card;
exports.Modal = Modal;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
import React from 'react';

/**
 * Reusable Syntax Highlight component in VS Code Dark+ style.
 * Maps semantic token types to exact theme colors with subtle micro-glow hover effect.
 *
 * Color map:
 * - function (Names/people): #DCDCAA
 * - type (Companies/universities/orgs): #4EC9B0
 * - string (Locations): #CE9178
 * - keyword (Tech/languages): #569CD6
 * - number (Numbers/years/grades): #B5CEA8
 * - control (Roles/action words): #C586C0
 * - comment (Labels/tags): #6A9955 (monospace + italic)
 */
export default function Hl({ type = "keyword", children, className = "" }) {
  // Normalize alias types to canonical categories
  const normalizedType = (() => {
    switch (type.toLowerCase()) {
      case "name":
      case "person":
      case "function":
        return "function";

      case "company":
      case "university":
      case "org":
      case "class":
      case "type":
        return "type";

      case "location":
      case "string":
        return "string";

      case "tech":
      case "language":
      case "keyword":
        return "keyword";

      case "year":
      case "grade":
      case "number":
        return "number";

      case "role":
      case "action":
      case "control":
        return "control";

      case "tag":
      case "label":
      case "comment":
        return "comment";

      default:
        return type;
    }
  })();

  return (
    <span
      data-type={normalizedType}
      className={`hl-token ${className}`}
    >
      {children}
    </span>
  );
}

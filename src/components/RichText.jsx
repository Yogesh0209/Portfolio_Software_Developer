import React from 'react';
import Hl from './Hl';

const TYPE_MAP = {
  k: 'keyword',
  c: 'control',
  t: 'type',
  s: 'string',
  n: 'number',
  f: 'function',
};

/**
 * Parses inline tokens of the form {{x|text}} and renders them with <Hl>.
 * Letter map:
 *   k = keyword (tech)
 *   c = control (verbs, roles)
 *   t = type (companies/universities)
 *   s = string (locations)
 *   n = number
 *   f = function (names)
 *
 * Text outside tokens renders as plain text. Never renders raw "{{" in the UI.
 */
export default function RichText({ text = '', className = '' }) {
  if (!text || typeof text !== 'string') return null;

  // Split by full token capturing group
  const parts = text.split(/(\{\{[kctsnf]\|[^}]+\}\})/g);

  return (
    <span className={className}>
      {parts.map((part, index) => {
        if (!part) return null;

        const tokenMatch = part.match(/^\{\{([kctsnf])\|([^}]+)\}\}$/);
        if (tokenMatch) {
          const [, code, content] = tokenMatch;
          const hlType = TYPE_MAP[code] || 'keyword';
          return (
            <Hl key={index} type={hlType}>
              {content}
            </Hl>
          );
        }

        // Clean any stray {{ or }} just in case
        const safeText = part.replace(/\{\{|\}\}/g, '');
        return <React.Fragment key={index}>{safeText}</React.Fragment>;
      })}
    </span>
  );
}

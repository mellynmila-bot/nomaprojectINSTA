import React from 'react';

interface InkCodeLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  textColor?: string;
}

export const InkCodeLogo: React.FC<InkCodeLogoProps> = ({
  className = '',
  size = 28,
  showText = true,
  textColor = 'currentColor',
}) => {
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Seta de papel geométrica da InkCode */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:-translate-y-0.5 hover:translate-x-0.5"
        aria-label="Logótipo InkCode - Seta de papel"
      >
        {/* Paper airplane faceted geometry */}
        <path
          d="M28 4L4 15.5L14 18.5L28 4Z"
          fill="currentColor"
          fillOpacity="0.95"
        />
        <path
          d="M28 4L18 28L14 18.5L28 4Z"
          fill="currentColor"
          fillOpacity="0.75"
        />
        <path
          d="M14 18.5L14 24L18 20L14 18.5Z"
          fill="currentColor"
          fillOpacity="0.5"
        />
        <path
          d="M28 4L14 18.5"
          stroke="white"
          strokeWidth="0.75"
          strokeLinecap="round"
        />
      </svg>
      {showText && (
        <span
          className="font-display text-2xl tracking-wider leading-none"
          style={{ color: textColor }}
        >
          INKCODE
        </span>
      )}
    </div>
  );
};

import React from 'react';

const Growth = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      style={{ width, height }}
    >
      {/* Growth Arrow */}
      <path
        d="M4 28L12 20L18 26L32 12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Target Point */}
      <circle cx="28" cy="8" r="3" stroke="currentColor" strokeWidth="2.5" />
      {/* Base Container */}
      <path
        d="M22 4H10C5 4 3 6 3 11V25C3 30 5 32 10 32H26C31 32 33 30 33 25V13"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Growth;

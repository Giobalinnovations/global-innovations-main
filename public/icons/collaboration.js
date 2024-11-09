import React from 'react';

const Collaboration = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      style={{ width, height }}
    >
      {/* Connected People */}
      <circle cx="10" cy="18" r="4" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="26" cy="18" r="4" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="18" cy="8" r="4" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="18" cy="28" r="4" stroke="currentColor" strokeWidth="2.5" />
      {/* Connection Lines */}
      <path
        d="M13.5 18H22.5M18 12V24"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Collaboration;

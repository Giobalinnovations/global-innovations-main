import React from 'react';

const CustomerFocus = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      style={{ width, height }}
    >
      {/* Customer Profile */}
      <circle cx="18" cy="12" r="6" stroke="currentColor" strokeWidth="2.5" />
      {/* Focus Target */}
      <path
        d="M8 30C8 25 12.477 21 18 21C23.523 21 28 25 28 30"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Focus Rings */}
      <path
        d="M4 18C4 10.268 10.268 4 18 4C25.732 4 32 10.268 32 18"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default CustomerFocus;

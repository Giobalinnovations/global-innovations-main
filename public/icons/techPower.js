import React from 'react';

const TechPower = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      style={{ width, height }}
    >
      {/* Circuit Board Base */}
      <rect
        x="4"
        y="4"
        width="28"
        height="28"
        rx="4"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      {/* Power Symbol */}
      <path
        d="M18 10V20M13 15H23"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Circuit Lines */}
      <path
        d="M8 26H12M24 26H28M18 26H20"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Connection Points */}
      <circle cx="12" cy="26" r="1" fill="currentColor" />
      <circle cx="24" cy="26" r="1" fill="currentColor" />
    </svg>
  );
};

export default TechPower;

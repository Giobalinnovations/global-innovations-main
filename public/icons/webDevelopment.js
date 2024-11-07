import React from 'react';

const WebDevelopment = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="47"
      height="48"
      viewBox="0 0 47 48"
      fill="none"
      style={{ width, height }}
    >
      {/* Browser Window Frame */}
      <path
        d="M41.5 14.5H5.5C4.4 14.5 3.5 13.6 3.5 12.5V6.5C3.5 5.4 4.4 4.5 5.5 4.5H41.5C42.6 4.5 43.5 5.4 43.5 6.5V12.5C43.5 13.6 42.6 14.5 41.5 14.5Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Browser Controls */}
      <path
        d="M8.5 9.5H8.51"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 9.5H14.51"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.5 9.5H20.51"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Code Brackets */}
      <path
        d="M15.5 25.5L8.5 32.5L15.5 39.5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31.5 25.5L38.5 32.5L31.5 39.5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Code Line/Slash */}
      <path
        d="M27.5 19.5L19.5 43.5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Browser Window Base */}
      <path
        d="M3.5 14.5V41.5C3.5 42.6 4.4 43.5 5.5 43.5H41.5C42.6 43.5 43.5 42.6 43.5 41.5V14.5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default WebDevelopment;

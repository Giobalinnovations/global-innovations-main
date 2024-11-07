import React from 'react';

const MediaBuying = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="47"
      height="48"
      viewBox="0 0 47 48"
      fill="none"
      style={{ width, height }}
    >
      {/* Main Display/Ad Space */}
      <path
        d="M41.5 14.5H5.5C4.4 14.5 3.5 13.6 3.5 12.5V6.5C3.5 5.4 4.4 4.5 5.5 4.5H41.5C42.6 4.5 43.5 5.4 43.5 6.5V12.5C43.5 13.6 42.6 14.5 41.5 14.5Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Currency/Cost Symbol */}
      <path
        d="M23.5 21.5V25.5M23.5 25.5V29.5M23.5 25.5H27.5M23.5 25.5H19.5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Chart/Analytics */}
      <path
        d="M8.5 35.5L15.5 28.5L20.5 33.5L27.5 26.5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Media Channels */}
      <path
        d="M33.5 28.5C35.7 28.5 37.5 26.7 37.5 24.5C37.5 22.3 35.7 20.5 33.5 20.5C31.3 20.5 29.5 22.3 29.5 24.5C29.5 26.7 31.3 28.5 33.5 28.5Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Container Frame */}
      <path
        d="M3.5 14.5V41.5C3.5 42.6 4.4 43.5 5.5 43.5H41.5C42.6 43.5 43.5 42.6 43.5 41.5V14.5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Target/ROI Indicator */}
      <path
        d="M37.5 35.5C39.2 35.5 40.5 34.2 40.5 32.5C40.5 30.8 39.2 29.5 37.5 29.5C35.8 29.5 34.5 30.8 34.5 32.5C34.5 34.2 35.8 35.5 37.5 35.5Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MediaBuying;

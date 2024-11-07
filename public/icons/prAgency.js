import React from 'react';

const PrAgency = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="47"
      height="48"
      viewBox="0 0 47 48"
      fill="none"
      style={{ width, height }}
    >
      {/* Central Message Bubble */}
      <path
        d="M23.5 33.2H11.8C6.6 33.2 3.5 31.1 3.5 24.9V15.3C3.5 9.1 6.6 7 11.8 7H29.2C34.4 7 37.5 9.1 37.5 15.3V20.1"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Network Connection Points */}
      <path
        d="M29.2 38.4C33.0601 38.4 36.2 35.2601 36.2 31.4C36.2 27.5399 33.0601 24.4 29.2 24.4C25.3399 24.4 22.2 27.5399 22.2 31.4C22.2 35.2601 25.3399 38.4 29.2 38.4Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Connection Lines */}
      <path
        d="M38.5 40.7L34.7 36.9"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Message Indicators */}
      <path
        d="M11.8 20.1H23.5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Brand Reach Indicators */}
      <path
        d="M43.5 31.4C43.5 33.6 43.1 35.7 42.3 37.6C42 38.4 41.6 39.2 41.1 39.9C39.3 42.8 36.5 44.9 33.2 45.8C31.9 46.2 30.5 46.4 29.2 46.4C27.9 46.4 26.5 46.2 25.2 45.8C21.9 44.9 19.1 42.8 17.3 39.9C15.5 37 14.5 33.4 14.5 29.4C14.5 25.4 15.5 21.8 17.3 18.9C19.1 16 21.9 13.9 25.2 13C26.5 12.6 27.9 12.4 29.2 12.4C30.5 12.4 31.9 12.6 33.2 13C36.5 13.9 39.3 16 41.1 18.9C41.6 19.6 42 20.4 42.3 21.2C43.1 23.1 43.5 25.2 43.5 27.4"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PrAgency;

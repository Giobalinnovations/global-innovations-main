import React from 'react';

const SearchEngineMarketing = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="47"
      height="48"
      viewBox="0 0 47 48"
      fill="none"
      style={{ width, height }}
    >
      {/* Search Magnifying Glass */}
      <path
        d="M21.5 34C28.4036 34 34 28.4036 34 21.5C34 14.5964 28.4036 9 21.5 9C14.5964 9 9 14.5964 9 21.5C9 28.4036 14.5964 34 21.5 34Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Search Handle */}
      <path
        d="M30.5 30.5L38 38"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Ranking Bars */}
      <path
        d="M15 21.5H19"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 21.5H28"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Keywords/Tags */}
      <path
        d="M4 42L8 38M8 38L12 42M8 38V46"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Results Indicator */}
      <path
        d="M35 42L39 38M39 38L43 42M39 38V46"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Page Rank Indicator */}
      <path
        d="M21.5 15V17"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.5 26V28"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SearchEngineMarketing;

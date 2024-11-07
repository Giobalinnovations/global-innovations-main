import React from 'react';

const Influencer = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="47"
      height="48"
      viewBox="0 0 47 48"
      fill="none"
      style={{ width, height }}
    >
      {/* Profile Circle - Representing Influencer */}
      <path
        d="M23.5 21.2C27.4 21.2 30.5 18.1 30.5 14.2C30.5 10.3 27.4 7.2 23.5 7.2C19.6 7.2 16.5 10.3 16.5 14.2C16.5 18.1 19.6 21.2 23.5 21.2Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Followers/Community Circle */}
      <path
        d="M36.5 11.2C38.2 11.2 39.5 9.9 39.5 8.2C39.5 6.5 38.2 5.2 36.5 5.2C34.8 5.2 33.5 6.5 33.5 8.2C33.5 9.9 34.8 11.2 36.5 11.2Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Star Rating/Popularity */}
      <path
        d="M41.5 23.2L39.9 19.1C39.3 17.8 38 17 36.6 17H34.5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Social Media Engagement */}
      <path
        d="M7.5 40.8V37.9C7.5 34 10.6 30.9 14.5 30.9H32.5C36.4 30.9 39.5 34 39.5 37.9V40.8"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Like/Engagement Symbol */}
      <path
        d="M10.5 11.2C8.8 11.2 7.5 9.9 7.5 8.2C7.5 6.5 8.8 5.2 10.5 5.2C12.2 5.2 13.5 6.5 13.5 8.2C13.5 9.9 12.2 11.2 10.5 11.2Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Connection Lines */}
      <path
        d="M5.5 23.2L7.1 19.1C7.7 17.8 9 17 10.4 17H12.5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Influencer;

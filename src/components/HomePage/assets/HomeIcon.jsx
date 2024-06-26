import React from "react";

export default function HomeIcon({ color }) {
  return (
    <svg
      className="home-icon"
      width="39"
      height="39"
      viewBox="0 0 39 39"
      fill={color} // Use the color prop for fill
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.75 30.875H14.625V21.125H24.375V30.875H29.25V16.25L19.5 8.9375L9.75 16.25V30.875ZM6.5 34.125V14.625L19.5 4.875L32.5 14.625V34.125H21.125V24.375H17.875V34.125H6.5Z"
      />
    </svg>
  );
}

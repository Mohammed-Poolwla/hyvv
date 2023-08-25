import React from "react";

export interface IDollarCircleIcon {
  className: string;
}

const DollarCircleIcon: React.FC<IDollarCircleIcon> = ({ className }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.78125 9.55319C5.78125 10.4132 6.44125 11.1065 7.26125 11.1065H8.93458C9.64792 11.1065 10.2279 10.4999 10.2279 9.75319C10.2279 8.93986 9.87458 8.65319 9.34792 8.46652L6.66125 7.53319C6.13458 7.34652 5.78125 7.05986 5.78125 6.24652C5.78125 5.49985 6.36125 4.89319 7.07458 4.89319H8.74792C9.56792 4.89319 10.2279 5.58652 10.2279 6.44652"
        stroke="#292D32"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 4V12"
        stroke="#292D32"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.00065 14.6667C11.6825 14.6667 14.6673 11.6819 14.6673 8.00004C14.6673 4.31814 11.6825 1.33337 8.00065 1.33337C4.31875 1.33337 1.33398 4.31814 1.33398 8.00004C1.33398 11.6819 4.31875 14.6667 8.00065 14.6667Z"
        stroke="#292D32"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DollarCircleIcon;

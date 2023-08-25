import React from "react";

export interface IProgressBar {
  value: number;
}

const ProgressBar: React.FC<IProgressBar> = ({ value }) => {
  return (
    <div className="items-top flex gap-4">
      <div className="mb-5 h-4 w-full overflow-hidden rounded-full bg-gray-200">
        <div
          className="h-4 animate-pulse rounded-full bg-gradient-to-r from-green-500 to-blue-500"
          style={{ width: `${value}%` }}
        ></div>
      </div>
      <p className="text-[12px]">{Math.ceil(value)}%</p>
    </div>
  );
};

export default ProgressBar;

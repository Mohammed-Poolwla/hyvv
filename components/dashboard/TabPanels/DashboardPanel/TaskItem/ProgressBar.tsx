import React from "react";

export interface IProgressBar {
  value: number;
}

const ProgressBar: React.FC<IProgressBar> = ({ value }) => {
  return (
    <div className="mt-auto mb-auto ml-8 h-1.5 w-[285px] rounded-full bg-gray-100 dark:bg-gray-200">
      <div
        className="h-1.5 rounded-full bg-green-400 dark:bg-green-600"
        style={{ width: value + "%" }}
      ></div>
    </div>
  );
};

export default ProgressBar;

import React from "react";

import ProgressItem from "./ProgressItem";

export interface IProgressItem {
  title: string;
  progress: number;
}

export interface IProgressChart {
  data: IProgressItem[];
}

const ProgressChart: React.FC<IProgressChart> = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => {
        return (
          <ProgressItem
            title={item.title}
            progress={item.progress}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default ProgressChart;

import React from "react";

import { Text } from "@chakra-ui/react";

import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  TimeScale,
  Title,
  Tooltip,
} from "chart.js";
import "chartjs-adapter-moment";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  TimeScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export interface ITimelineChart {
  title: string;
  labels: Array<string>;
  chartData: Array<{}>;
}

const TimelineChart: React.FC<ITimelineChart> = ({
  title,
  labels,
  chartData,
}) => {
  const options: any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: "Chart.js Floating Bar Chart",
      },
    },
    indexAxis: "y",
    scales: {
      y: {
        grid: {
          display: false,
        },
      },
      x: {
        type: "time",
        time: {
          tooltipFormat: "MMM D",
          displayFormats: {
            day: "MMM D",
          },
          unit: "week",
        },
        min: "2023-04-02",
        max: "2023-05-21",
      },
    },
  };

  const data = {
    labels: labels,
    datasets: [
      {
        data: chartData,
        backgroundColor: "rgba(8, 101, 126, 0.3)",
        barThickness: 16,
        borderRadius: 5,
        borderSkipped: false,
      },
    ],
  };

  return (
    <div>
      <Text fontSize="lg">{title}</Text>
      <div>
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};

export default TimelineChart;

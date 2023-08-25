import React from "react";

import DeliveryTime from "../components/DeliveryTime/DeliveryTime";
import OrderDetails from "../components/OrderDetails/OrderDetails";
import Tags from "../components/Tags/Tags";

import TaskInfo from "./TaskInfo/TaskInfo";
import TaskList from "./TaskList/TaskList";

export interface ITaskDetails {
  parentData: any;
  childData: any[];
}

const TaskDetails: React.FC<ITaskDetails> = ({ parentData, childData }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div className="col-span-2 flex flex-col gap-6">
        <TaskInfo />
        <TaskList childData={childData} parentData={parentData} />
      </div>
      <div className="flex w-full flex-col gap-6 md:col-span-2 lg:col-span-1">
        <DeliveryTime />
        <OrderDetails />
        <Tags />
      </div>
    </div>
  );
};

export default TaskDetails;

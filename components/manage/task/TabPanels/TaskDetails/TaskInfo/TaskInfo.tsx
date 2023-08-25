import React from "react";

import Attachment from "./Attachment/Attachment";
import TaskDescription from "./TaskDescription/TaskDescription";

export interface ITaskInfo {}

const TaskInfo: React.FC<ITaskInfo> = () => {
  return (
    <div className="flex flex-col gap-4 rounded-md bg-white bg-white p-4 shadow-md">
      <TaskDescription />
      <Attachment />
    </div>
  );
};

export default TaskInfo;

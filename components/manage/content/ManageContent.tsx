import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { useAppStore } from "../../../lib/store";
import { list_to_tree } from "../../../utils/functions/convert";
import { trpc } from "../../../utils/trpc";

const ContentItem = dynamic(() => import("./ContentItem"), {
  ssr: false,
});
export interface IComment {
  author: string;
  date: Date;
  read: boolean;
  content: string;
  file: string[]; //for temp
}
export interface ISubTask {
  title: string;
  children: ISubTask[];
  checked: boolean;
}
export interface IData {
  title: string;
  icon: object;
  subTask: ISubTask[];
  freelancer: string[];
  comment: IComment[];
  endDate: Date;
  modifiedDate: Date;
  budget: number;
  startDate: Date;
}

export interface IBuildStateItem {
  items: IData[];
}
export interface IBuildState {
  complete: object;
  for_review: object;
  in_progress: object;
  offer: object;
  plan: object;
  staged: object;
  starting: object;
}

const ManageContent = () => {
  const [error, setError] = useState<boolean>(false);
  const { manageData, startupData, setManageData, moveItemFromTo } =
    useAppStore();

  const startUpId = startupData.selectedStartup[0];
  const { data: mData, isSuccess } = trpc.build.listByStatus.useQuery({
    startUpId: startUpId,
    status: ["STARTING", "IN_PROGRESS", "FOR_REVIEW", "COMPLETE"],
  });

  const updateBuildMutation = trpc.build.update.useMutation();

  useEffect(() => {
    if (isSuccess) {
      if (mData.error !== null) {
        setError(true);
      } else {
        let manageDataTemp: any = {
          starting: [],
          in_progress: [],
          for_review: [],
          complete: [],
        };

        const temp = [...list_to_tree(JSON.parse(JSON.stringify(mData.data)))];

        temp.map((item) => {
          item.icon = "/startupicon.png";
          item.subTask = [...item.children];
          const status = item.status;

          delete item.children;

          if (manageDataTemp[status.toLowerCase()] !== undefined) {
            if (item.tasks.length) {
              const tasks: any = { ...item.tasks[0] };
              delete item.tasks;
              delete tasks.id;
              item = { ...item, ...tasks };
            }
            manageDataTemp[status.toLowerCase()].push({ ...item });
          }
        });
        setManageData(manageDataTemp);

        setError(false);
      }
    }
  }, [mData]);

  const onDragEnd = ({ source, destination }: DropResult) => {
    if (destination === undefined || destination === null) return null;
    if (
      source.droppableId === destination.droppableId &&
      destination.index === source.index
    )
      return null;

    const start = manageData[source.droppableId];

    const id = start.items[source.index].id;

    moveItemFromTo(id, source.droppableId, destination.droppableId);

    updateBuildMutation.mutate({
      id: id,
      status: destination.droppableId.toUpperCase(),
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div
        className={`scroll-display-none grid flex-1 gap-x-6  gap-y-6 overflow-y-auto bg-[#fafafa] p-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4`}
      >
        {Object.keys({
          starting: manageData.starting,
          in_progress: manageData.in_progress,
          for_review: manageData.for_review,
          complete: manageData.complete,
        })
          .map((key) => {
            return {
              ...manageData[key],
              id: key,
            };
          })
          .map(({ id }) => (
            <Droppable droppableId={id} key={id}>
              {(provided) => (
                <div ref={provided.innerRef}>
                  <ContentItem provided={provided} type={id} />
                </div>
              )}
            </Droppable>
          ))}
      </div>
    </DragDropContext>
  );
};

export default ManageContent;

import { useState } from "react";

import {
  Box,
  Button,
  Editable,
  EditableInput,
  EditablePreview,
  IconButton,
  Input,
  Text,
} from "@chakra-ui/react";
import { BsInfoCircle, BsPlusLg } from "react-icons/bs";
import { IoCloseCircle } from "react-icons/io5";

const TaskDetail: React.FC<{}> = () => {
  const [taskList, setTaskList] = useState([
    {
      id: 0,
      title:
        "I will log into to your quickbooks every week and sort transactions",
    },
    { id: 1, title: "I will balance your books" },
    { id: 2, title: "I will sort your taxes" },
    { id: 3, title: "I will create a summary report of income and expenses" },
  ]);
  function addTaskList() {
    const newId = taskList.reduce((prev, current) => {
      return prev.id > current.id ? prev : current;
    });
    const updatedTaskList = [
      ...taskList,
      { id: newId.id + 1, title: "new Task" },
    ];

    setTaskList(updatedTaskList);
  }

  function removeTaskList(taskId: number) {
    const updatedTasks = taskList.filter((item) => item.id !== taskId);
    setTaskList(updatedTasks);
  }

  function changeTaskList(taskId: number, value: string) {
    const updatedTasks = taskList.map((item) => {
      if (item.id === taskId) {
        return { ...item, title: value };
      }
      return item;
    });
    setTaskList(updatedTasks);
  }
  return (
    <div className="flex flex-col gap-y-5">
      <Box>
        <Text className="flex items-center gap-x-3 font-medium">
          Task Details
          <BsInfoCircle color="gray" />
        </Text>
        <Text className="text-gray-500">
          There are many variations of the passages of Lorem lpsum avaiable, but
          the majority have
        </Text>
      </Box>
      <div className="flex flex-col gap-y-3">
        {taskList.map((item, index) => (
          <div
            className="flex w-full items-center rounded-md border shadow-md"
            key={index}
          >
            <Editable
              className="flex-1"
              value={item.title}
              onChange={(e) => changeTaskList(item.id, e)}
            >
              <Text sx={{ py: 2, px: 4 }} as={EditablePreview} />
              <Input as={EditableInput} />
            </Editable>
            <IconButton
              aria-label="delete"
              variant={"ghost"}
              colorScheme="blackAlpha"
              icon={<IoCloseCircle />}
              onClick={() => removeTaskList(item.id)}
            />
          </div>
        ))}

        <Button
          leftIcon={<BsPlusLg />}
          colorScheme="main"
          variant={"outline"}
          borderColor={"main.500"}
          borderStyle={"dashed"}
          onClick={() => addTaskList()}
        >
          Add New Task
        </Button>
      </div>
    </div>
  );
};

export default TaskDetail;

import { useState } from "react";

import { FormControl, FormLabel, Text } from "@chakra-ui/react";

import MultiChipSelectMenu from "../../../base/Select/MultiChipSelectMenu";
import SelectMenu from "../../../base/Select/SelectMenu";
import { QuillEditor } from "../../../inputs";

import { DatePicker } from "../../../base/Input/DatePicker";
import TaskAttachments from "./TaskAttachments/TaskAttachments";

const ManageDetails = () => {
  const [taskDescription, setTaskDescription] = useState<any>();
  const [tagList, setTagList] = useState([]);
  //temp data
  const tagListData = [
    { title: "LinkedIn" },
    { title: "Marketing" },
    { title: "Sales" },
    { title: "Financial" },
    { title: "Management" },
    { title: "Accounting" },
    { title: "Bookkeeping" },
  ];

  return (
    <div>
      <Text fontSize="18px" className="font-semibold text-hyvv-title-1">
        Manage Details
      </Text>
      <Text fontSize="14px" className="mb-2 text-hyvv-description">
        There are many variations of passages of Lorem Ipsum available
      </Text>
      <Text fontSize="14px" className="mb-2 font-semibold text-hyvv-title-1">
        Task Description
      </Text>
      <QuillEditor value={taskDescription} onChange={setTaskDescription} />
      <TaskAttachments />
      <FormControl isRequired>
        <FormLabel>Select Budget Range</FormLabel>
        <SelectMenu placeholder="Select Category" data={[]} />
      </FormControl>
      <div className="mb-4 mt-4 flex gap-4">
        <FormControl isRequired>
          <FormLabel>Select Category</FormLabel>
          <SelectMenu placeholder="Select Category" data={[]} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Select Frequency*</FormLabel>
          <SelectMenu placeholder="Select Category" data={[]} />
        </FormControl>
      </div>
      <div className="mb-4 mt-4 flex gap-4">
        <FormControl isRequired>
          <FormLabel>Starting Date</FormLabel>
          <DatePicker />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>End Date</FormLabel>
          <DatePicker />
        </FormControl>
      </div>
      <FormControl>
        <FormLabel>Select Tags</FormLabel>
        <MultiChipSelectMenu
          placeholder="Select Tags"
          data={tagListData}
          selected={tagList}
          setSelected={setTagList}
        />
      </FormControl>
      <FormControl className="mb-4 mt-4">
        <FormLabel>Reference Define Section</FormLabel>
        <SelectMenu placeholder="Select Define Section" data={[]} />
      </FormControl>
    </div>
  );
};

export default ManageDetails;

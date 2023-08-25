import { Divider, Progress, Text } from "@chakra-ui/react";

import { useAppStore } from "../../../../lib/store";

import EmploymentItem from "./EmploymentItem";

const Employment = () => {
  const { freelancerProfileData } = useAppStore();

  return (
    <div className="rounded-lg bg-white shadow-md">
      <div className="flex w-full flex-col gap-2 border-b p-5 font-semibold">
        <Text className="font-bold text-xl">Employment History</Text>
        <Text className="text-base font-medium text-[#77747c]">
          Contrary to popular belief, Lorem lpsum
        </Text>
      </div>
      <div className="flex w-full justify-around border-b py-3 text-xl font-semibold">
        <div className="flex flex-col">
          <Text className="font-semibold text-[#08657E]">
            {freelancerProfileData.workExperience.jobSuccess}%
          </Text>
          <Progress
            size="sm"
            colorScheme="main"
            value={freelancerProfileData.workExperience.jobSuccess}
          />
          <Text className="text-base font-medium text-[#84818A]">
            Job Success
          </Text>
        </div>
        <div className="py-2">
          <Divider
            className="text-xl"
            borderWidth={"1px"}
            orientation="vertical"
            borderColor={"#97979760"}
          />
        </div>
        <div className="flex flex-col">
          <Text className="font-semibold text-[#08657E]">
            {freelancerProfileData.workExperience.jobCompleted}
          </Text>
          <Text className="text-base font-medium text-[#84818A]">
            Job Completed
          </Text>
        </div>
      </div>
      <div className="flex w-full flex-col gap-y-5 p-5 text-xl font-semibold">
        {freelancerProfileData.workExperience.employmentHistory.map(
          (item, index) => (
            <EmploymentItem data={item} key={index} />
          )
        )}
      </div>
    </div>
  );
};

export default Employment;

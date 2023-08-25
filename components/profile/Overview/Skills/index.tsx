import { Text } from "@chakra-ui/react";

import { BsDot } from "react-icons/bs";

import { useAppStore } from "../../../../lib/store";

const Skills = () => {
  const { freelancerProfileData } = useAppStore();

  return (
    <div className="rounded-lg bg-white p-5 shadow-md">
      <div className="flex w-full flex-col gap-2 border-b border-[#e8e8e8]">
        <Text className="text-xl font-bold text-[#2A2044]">Top Skills</Text>
        <div className="grid grid-cols-2 py-2">
          {freelancerProfileData.workExperience.topSkills.map((item, index) => {
            if (item.selected)
              return (
                <div
                  className="flex items-center text-[18px] font-semibold"
                  key={index}
                >
                  <BsDot className="text-3xl text-[#08657E]" />
                  {item.name}
                </div>
              );
            else return null;
          })}
        </div>
      </div>
      <div className="mt-2 flex w-full flex-col gap-2">
        <Text className="text-xl font-bold text-[#2A2044]">Others</Text>
        <div className="flex flex-wrap gap-2 py-2">
          {freelancerProfileData.workExperience.topSkills.map((item, index) => {
            if (!item.selected)
              return (
                <Text
                  className="rounded-full bg-[#F3F3F3] px-4 py-1 text-[16px] font-medium text-[#808191]"
                  key={index}
                >
                  {item.name}
                </Text>
              );
            else return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;

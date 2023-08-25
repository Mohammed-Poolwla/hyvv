import { Box, Collapse, Text, useDisclosure } from "@chakra-ui/react";

import moment from "moment";

import { useAppStore } from "../../../../lib/store";

import PresentationIcon from "../../../icons/PresentationIcon";
import { useEffect, useRef } from "react";

const Summary = () => {
  const profileRef = useRef();

  const { freelancerProfileData } = useAppStore();

  const { isOpen, onToggle } = useDisclosure();
  useEffect(() => {
    console.log(freelancerProfileData.personalInfo.summary);
    if (freelancerProfileData.personalInfo.summary && profileRef.current) {
      const profileRefContainer: HTMLElement = profileRef.current;
      profileRefContainer.innerHTML =
        freelancerProfileData.personalInfo.summary;
    }
  }, [freelancerProfileData]);

  return (
    <div className="flex flex-col gap-y-2 rounded-lg bg-white p-4 shadow-md">
      <div className="flex w-full flex-col gap-2">
        <Text className="text-xl font-bold">About</Text>
        <Collapse startingHeight={25} in={isOpen} ref={profileRef}></Collapse>
        <Text
          className="text-md cursor-pointer font-bold text-[#08657E] underline"
          onClick={onToggle}
        >
          Show more
        </Text>
      </div>
      <div className="flex w-full flex-col gap-2">
        <Text className="text-xl font-bold">Education</Text>
        <div className="flex w-full items-center gap-x-4 py-2">
          <div className="rounded-full bg-[#E7F0F3] p-3">
            <PresentationIcon />
          </div>
          <Box>
            <Text className="text-xl font-bold">
              {freelancerProfileData.personalInfo.educationalInstitute}
            </Text>
            <Text className="text-gray-500">
              Bsc in{" "}
              {freelancerProfileData.personalInfo.studyField +
                " · " +
                moment(freelancerProfileData.personalInfo.from).format("YYYY") +
                " - " +
                moment(freelancerProfileData.personalInfo.to).format("YYYY")}
            </Text>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Summary;

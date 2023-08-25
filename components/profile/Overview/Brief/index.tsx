import { Avatar, AvatarBadge, Box, Divider, Text } from "@chakra-ui/react";

import { AiFillDollarCircle } from "react-icons/ai";
import {
  BsFillCheckCircleFill,
  BsFillHeartFill,
  BsFillStarFill,
} from "react-icons/bs";
import { FaMapMarkerAlt, FaShoppingBag } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";

import { useAppStore } from "../../../../lib/store";

import LanguageIcon from "../../../icons/LanguageIcon";

const Brief = () => {
  const { freelancerProfileData } = useAppStore();

  const languages = [];
  freelancerProfileData.personalInfo.languageProficiency.map((languageItem) =>
    languages.push(languageItem.language)
  );

  let ratingSum = 0;

  for (let review of freelancerProfileData.personalInfo.reviews) {
    ratingSum += review.rating;
  }

  return (
    <div className="rounded-lg bg-white p-3 shadow-md">
      <div className="flex w-full flex-wrap items-start justify-between gap-x-5 rounded-sm bg-[#E7F0F3] p-5 text-2xl font-semibold">
        <div className="flex items-center gap-x-5">
          <Avatar
            boxSize="75px"
            name={
              freelancerProfileData.personalInfo.firstName +
              " " +
              freelancerProfileData.personalInfo.lastName
            }
            src={freelancerProfileData.personalInfo.profilePicture}
          >
            <AvatarBadge
              boxSize="18px"
              bg="green.400"
              placement="top-end"
              top={"2"}
              right={"2"}
            />
          </Avatar>
          <Box className="items-center">
            <Text fontSize="3xl" className="mb-3">
              {freelancerProfileData.personalInfo.firstName +
                " " +
                freelancerProfileData.personalInfo.lastName}
            </Text>
            <div className="flex gap-x-5 text-base">
              <Text className="flex items-center gap-x-2 text-[#08657E]">
                <FaMapMarkerAlt />
                {freelancerProfileData.personalInfo.currentCity},{" "}
                {freelancerProfileData.personalInfo.country}
              </Text>
              <div>
                <Divider
                  className="text-xl"
                  borderWidth={"1px"}
                  orientation="vertical"
                  borderColor={"#97979760"}
                />
              </div>
              <Text className="flex items-center gap-x-2 text-green-500">
                <BsFillCheckCircleFill />
                Available for Hire
              </Text>
            </div>
          </Box>
        </div>
        <Box className="flex gap-x-2 text-[18px] font-bold">
          <Box className="flex items-center gap-x-2 rounded-md bg-white px-2">
            <BsFillStarFill color={"#FBB830"} />
            {(
              ratingSum / freelancerProfileData.personalInfo.reviews.length
            ).toFixed(1)}
          </Box>
          <Box className="flex items-center gap-x-2 rounded-md bg-white px-2">
            <BsFillHeartFill className="cursor-pointer " color={"#dd315c"} />
            {freelancerProfileData.personalInfo.reviews.length}
          </Box>
        </Box>
      </div>
      <div className="flex w-full flex-wrap items-stretch justify-around pt-3 text-2xl font-semibold text-gray-500">
        <div className="flex items-center gap-x-3">
          <div className="rounded-full border border-[#dadada] p-2 text-[#84818a]">
            <AiFillDollarCircle size={"25px"} />
          </div>
          <Box className="flex flex-col gap-y-1 text-[17px]">
            <span className="font-medium leading-none">Hourly rate</span>
            <span className="font-bold leading-none text-[#08657E]">
              ${freelancerProfileData.serviceDetails.hourlyRate}
            </span>
          </Box>
        </div>

        <div className="py-2">
          <Divider
            className="text-xl"
            borderWidth={"1px"}
            orientation="vertical"
            borderColor={"#97979760"}
          />
        </div>

        <div className="flex items-center gap-x-3">
          <div className="rounded-full border border-[#dadada] p-2 text-[#84818a]">
            <RiMessage2Fill size={"25px"} />
          </div>
          <Box className="flex flex-col gap-y-1 text-[17px]">
            <span className="font-medium leading-none">Reviews</span>
            <span className="font-bold leading-none text-[#08657E]">
              {freelancerProfileData.personalInfo.reviews.length}
            </span>
          </Box>
        </div>

        <div className="py-2">
          <Divider
            className="text-[17px]"
            borderWidth={"1px"}
            orientation="vertical"
            borderColor={"#97979760"}
          />
        </div>

        <div className="flex items-center gap-x-3">
          <div className="rounded-full border border-[#dadada] p-2 text-[#84818a]">
            <FaShoppingBag size={"25px"} />
          </div>
          <Box className="flex flex-col gap-y-1 text-[17px]">
            <span className="font-medium leading-none">Experience</span>
            <span className="font-bold leading-none text-[#08657E]">
              {freelancerProfileData.personalInfo.experience}
              {freelancerProfileData.personalInfo.experience === 1
                ? " Year"
                : " Years"}
            </span>
          </Box>
        </div>

        <div className="py-2">
          <Divider
            className="text-xl"
            borderWidth={"1px"}
            orientation="vertical"
            borderColor={"#97979760"}
          />
        </div>

        <div className="flex items-center gap-x-3">
          <div className="rounded-full border border-[#dadada] p-2 text-[#84818a]">
            <LanguageIcon width={"25"} height={"25"} />
          </div>
          <Box className="flex flex-col gap-y-1 text-[17px]">
            <span className="font-medium leading-none">Language</span>
            <span className="font-bold leading-none text-[#08657E]">
              {languages.join(", ")}
            </span>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Brief;

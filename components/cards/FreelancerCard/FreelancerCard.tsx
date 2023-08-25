import Link from "next/link";
import React from "react";

import { Tag, TagLabel, TagLeftIcon, Text } from "@chakra-ui/react";

import BadgeAvatar from "./BadgeAvatar/BadgeAvatar";

import { useToast } from "@chakra-ui/react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { IoBriefcase } from "react-icons/io5";
import SuccessIcon from "../../icons/SuccessIcon";
import YellowStarIcon from "../../icons/YellowStarIcon";
export interface IFreelancerCard {
  id?: number;
  avatar: string;
  name: string;
  rating: number;
  rank: number;
  hourlyRate: number;
  successRate: number;
  job: string;
  saved?: boolean;
  setSavedFreelancer?: Function;
}

const FreelancerCard: React.FC<IFreelancerCard> = ({
  id,
  avatar,
  name,
  rating,
  rank,
  hourlyRate,
  successRate,
  job,
  saved,
  setSavedFreelancer,
}) => {
  const onDrag = (event) => {
    event.dataTransfer.setData("avatar", avatar);
    event.dataTransfer.setData("name", name);
    event.dataTransfer.setData("rating", rating);
    event.dataTransfer.setData("rank", rank);
    event.dataTransfer.setData("hourlyRate", hourlyRate);
    event.dataTransfer.setData("successRate", successRate);
    event.dataTransfer.setData("job", job);
  };
  const toast = useToast();

  return (
    <div
      className="overflow-hidden rounded-md border border-[#e7e7e7] shadow-md"
      onDragStart={onDrag}
      draggable
    >
      <div className="flex flex-col gap-y-4 border-b border-[#e7e7e7] bg-white p-4">
        <div className="flex justify-between">
          <div className="flex">
            <BadgeAvatar avatar={avatar} isOnline={true} />
            <div className="pl-1">
              <Text fontSize="16px" color="black" className="">
                {name}
              </Text>
              <Text fontSize="12px" color="#84818a" className="font-Manrope">
                Available for hire
              </Text>
            </div>
          </div>
          <div className="flex">
            <YellowStarIcon size={12} className="mr-[3px] mt-[5px]" />
            <Text fontSize="14px" color="black">
              {rating}
            </Text>
          </div>
        </div>
        <div className="flex items-center justify-between gap-x-1">
          <Tag colorScheme="main">
            <TagLeftIcon as={IoBriefcase} />
            <TagLabel> {job}</TagLabel>
          </Tag>
          {saved != null ? (
            !saved ? (
              <AiOutlineHeart
                className="cursor-pointer"
                color="#e01f4f"
                size="25px"
                onClick={() => {
                  setSavedFreelancer(id);
                  toast({
                    description: "You saved freelancer",
                    status: "success",
                    position: "top-right",
                    duration: 2000,
                    icon: <AiFillHeart className="m-auto" />,
                    isClosable: true,
                  });
                }}
              />
            ) : (
              <AiFillHeart
                className="cursor-pointer"
                color="#e01f4f"
                size="25px"
                onClick={() => {
                  setSavedFreelancer(id);
                  toast({
                    description: "You unsaved freelancer",
                    status: "success",
                    position: "top-right",
                    variant: "subtle",
                    icon: <AiOutlineHeart className="m-auto" />,
                    duration: 2000,
                    isClosable: true,
                  });
                }}
              />
            )
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="border-r border-[#e7e7e7] p-2">
          <Text fontSize="12px" color="#84818a" className="font-Manrope">
            HYVV Rank
          </Text>
          <Text fontSize="16px" color="black" className="font-semibold">
            {rank}
          </Text>
        </div>
        <div className="p-2">
          <Text fontSize="12px" color="#84818a" className="font-Manrope">
            Hourly Rate
          </Text>
          <Text fontSize="16px" color="black" className="font-semibold">
            ${hourlyRate}
          </Text>
        </div>
      </div>
      <div className="bg-manage-teal-light p-1.5">
        <div className="flex items-center justify-between">
          <div className="flex gap-x-1">
            <SuccessIcon />
            <Text
              fontSize="12px"
              color="#27ae60"
              className="font-Manrope font-semibold"
            >
              {successRate}% Success Rate
            </Text>
          </div>
          <Link href={`/profile`} passHref>
            <Text
              fontSize="12px"
              color="#08657e"
              className="cursor-pointer font-Manrope font-semibold"
            >
              View Details &gt;
            </Text>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FreelancerCard;

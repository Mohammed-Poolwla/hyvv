import React from "react";

import { Avatar, AvatarGroup, Divider, Image, Text } from "@chakra-ui/react";

import { ChevronRightIcon } from "@chakra-ui/icons";
import Carousel from "../../base/Carousel";

import MessageIcon from "../../icons/MessageIcon";
import YellowStarIcon from "../../icons/YellowStarIcon";

export interface IServiceCard {
  id: number;
  imgUrl: string[];
  serviceName: string;
  rating: number;
  reviews: number;
  userGroup: Array<string>;
  monthlyRate: number;
  setCurrent: Function;
}

const ServiceCard: React.FC<IServiceCard> = ({
  id,
  imgUrl,
  serviceName,
  rating,
  reviews,
  userGroup,
  monthlyRate,
  setCurrent,
}) => {
  return (
    <div className="w-full overflow-hidden rounded-md border border-[#e7e7e7]">
      <Carousel imgList={imgUrl} />
      <Text
        fontSize="16px"
        color="#1e1e1e"
        className="truncate px-4 py-2 font-bold"
      >
        {serviceName}
      </Text>
      <div className="flex items-center gap-x-2 border-b border-[#e7e7e7] px-4 pb-2">
        <div className="flex  justify-center">
          <YellowStarIcon size={20} className="mr-1" />
          <Text fontSize="14px" color="#000">
            {rating}
          </Text>
        </div>
        <Divider orientation="vertical" h={5} />
        <div className="flex items-center justify-center">
          <MessageIcon className="mr-1" />
          <Text fontSize="12px" color="#84818a">
            {reviews}&nbsp;Reviews
          </Text>
        </div>{" "}
        <Divider orientation="vertical" h={5} />
        <div className="flex items-center justify-center">
          <AvatarGroup size="xs" max={3}>
            {userGroup.map((user, index) => {
              return <Avatar src={user} name="User Avatar" key={index} />;
            })}
          </AvatarGroup>
        </div>
      </div>
      <div className="flex items-start justify-between px-4 py-2">
        <div className="flex items-end justify-center">
          <Text
            fontSize="20px"
            color="#1e1e1e"
            className="mr-1 font-bold leading-none"
          >
            ${monthlyRate}
          </Text>
          <Text fontSize="12px" color="#84818a">
            monthly
          </Text>
        </div>
        <div
          className="cursor-pointer"
          onClick={() => {
            console.log(id);
            setCurrent(id);
          }}
        >
          <ChevronRightIcon />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

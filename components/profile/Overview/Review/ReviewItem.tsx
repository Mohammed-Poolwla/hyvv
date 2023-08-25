import React from "react";

import { Avatar, Box } from "@chakra-ui/react";
import { BsFillSquareFill } from "react-icons/bs";

import moment from "moment";

import { Review } from "../../../../lib/slices/freelancerProfileSlice";

import Flags from "country-flag-icons/react/3x2";
import Rating from "../../../base/Rating";

export interface IReviewItem {
  data: Review;
}

const Reviews: React.FC<IReviewItem> = ({ data }) => {
  const { reviewerAvatar, reviewerName, review, date, from, company, rating } =
    data;

  const FlagItem = (countryId: string) => {
    const Component = Flags[countryId];
    return <Component title={countryId} className="h-4 w-4" />;
  };

  return (
    <div className="rounded-lg border border-[#e1e1e1] bg-white">
      <div className="border-b px-4 py-2">
        <div className="flex justify-between py-3">
          <div className="flex items-center gap-x-4">
            <Avatar boxSize="50px" name={reviewerName} src={reviewerAvatar} />
            <Box>
              <span className="mb-1 text-[20px] font-semibold">
                {reviewerName}
              </span>
              <div className="flex items-center gap-x-2 text-base ">
                {FlagItem(from[0])}
                <span className="font-medium text-[#827f88]">{from[1]}</span>
              </div>
            </Box>
          </div>
          <Box className="float-right mr-0 flex items-center gap-x-2">
            <Rating mark={Number(rating)} />
            <span className="text-[20px] font-bold">{rating}</span>
          </Box>
        </div>
        <p className="py-3 text-[16px] font-medium text-[#827f88]">{review}</p>
      </div>
      <div className="flex items-center justify-between px-4 py-3">
        <Box className="flex items-center gap-x-2">
          <BsFillSquareFill className="text-[#08657E]" size={"15px"} />
          <span className="text-[16px] font-medium text-[#08657E]">
            {company}
          </span>
        </Box>
        <span className="text-[16px] font-medium text-[#827f88]">
          {moment(date).startOf("months").fromNow()}
        </span>
      </div>
    </div>
  );
};

export default Reviews;

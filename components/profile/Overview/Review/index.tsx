import { Box, Text } from "@chakra-ui/react";

import { Review } from "../../../../lib/slices/freelancerProfileSlice";
import { useAppStore } from "../../../../lib/store";

import ReviewItem from "./ReviewItem";
import SelectMenu from "../../../base/Select/SelectMenu";
import { useState } from "react";
import SortIcon from "../../../icons/SortIcon";

const Reviews = () => {
  const { freelancerProfileData, setReviewData } = useAppStore();
  const [selectedSort, setSelectedSort] = useState(1);

  const handleSortBy = (e: any) => {
    let tmp: Array<Review> = [...freelancerProfileData.personalInfo.reviews];
    switch (Number(e)) {
      case 1:
        tmp.sort((a, b) => {
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        });
        break;
      case 2:
        tmp.sort((a, b) => {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        });
        break;
      case 3:
        tmp.sort((a, b) => {
          return Number(b.rating) - Number(a.rating);
        });
        break;
      case 4:
        tmp.sort((a, b) => {
          return Number(a.rating) - Number(b.rating);
        });
        break;
    }

    setReviewData(tmp);
  };

  return (
    <div className="flex w-full flex-col gap-2 rounded-lg bg-white p-5 text-xl font-semibold shadow-md">
      <div className="flex items-center justify-between">
        <Text className="font-bold">Reviews</Text>
        <Box className="flex items-center gap-x-3 text-[#84818a]">
          <SortIcon className="mt-1" />
          <span className="text-[17px] font-medium">Sort&nbsp;by:</span>
          <SelectMenu
            data={[
              { label: "Latest", value: 1 },
              { label: "Oldest", value: 2 },
              { label: "Highest Rating", value: 3 },
              { label: "Lowest Rating", value: 4 },
            ]}
            variant="ghost"
            selected={selectedSort}
            setSelected={setSelectedSort}
            onChange={handleSortBy}
          />
        </Box>
      </div>
      <div className="flex flex-col gap-y-5 py-2">
        {freelancerProfileData.personalInfo.reviews.map((item, index) => (
          <ReviewItem data={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;

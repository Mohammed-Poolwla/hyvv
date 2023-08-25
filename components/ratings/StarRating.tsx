import React, { Dispatch, SetStateAction, useState } from "react";

import { Text } from "@chakra-ui/react";

export interface IStarRating {
  title?: string;
  rating: number;
  setRating: Dispatch<SetStateAction<number>>;
}

const StarRating: React.FC<IStarRating> = ({ title, rating, setRating }) => {
  const [hover, setHover] = useState(0);

  return (
    <div>
      <Text fontSize="16px" className="ml-1 font-semibold text-hyvv-title-2">
        {title}
      </Text>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={
              index <= (hover || rating) ? "text-[#FFE000]" : "text-[#E0E0E0]"
            }
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="text-3xl">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;

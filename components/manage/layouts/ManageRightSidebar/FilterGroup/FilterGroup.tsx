import React from "react";

import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  Text,
} from "@chakra-ui/react";
import SelectMenu from "../../../../base/Select/SelectMenu";
import SortIcon from "../../../../icons/SortIcon";

const categoryList = [
  {
    label: "Booking",
    count: 248,
  },
  {
    label: "Data Processing",
    count: 12,
  },
  {
    label: "Website Design",
    count: 23,
  },
  {
    label: "Data Analytics",
    count: 158,
  },
  {
    label: "Software Development",
    count: 198,
  },
  {
    label: "Financials Analytics",
    count: 27,
  },
  {
    label: "Data Visualization",
    count: 42,
  },
];

export interface IFilterGroup {
  sortOptionHidden: string;
}

const FilterGroup: React.FC<IFilterGroup> = ({ sortOptionHidden }) => {
  return (
    <div
      className={`mb-4 flex flex-wrap justify-between gap-3 ${sortOptionHidden}`}
    >
      <div className="flex gap-2">
        <SelectMenu data={categoryList} placeholder="Category" />
        <SelectMenu data={[]} placeholder="Rating" />
        <SelectMenu data={[]} placeholder="HYVV Rank" />
        <SelectMenu data={[]} placeholder="Hourly Rate" />
      </div>
      <div className="flex items-center gap-1">
        <SortIcon className="shrink-0" />
        <Text fontSize="15px" color="#84818A">
          Sort by :{" "}
        </Text>
        <SelectMenu data={[]} variant="ghost" placeholder="Relevent" />
      </div>
    </div>
  );
};

export default FilterGroup;

import React from "react";

import Image from "next/image";

import {
  Badge,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";

import { createColumnHelper } from "@tanstack/react-table";

import { Search2Icon } from "@chakra-ui/icons";
import { BsFilterLeft } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";

import { DataTable } from "../../../../../base/DataTable";

type UnitConversion = {
  rank: number;
  company: [string, string, string];
  score: number;
  speed: number;
  impressions: number;
  salesGrowth: [number, number];
  headCount: number;
  action: Array<string>;
};

const data: UnitConversion[] = [
  {
    rank: 1,
    company: ["/companies/maria_roselia.svg", "Maria Roselia", "Melbourne"],
    score: 9202,
    speed: 94,
    impressions: 403540,
    salesGrowth: [65, 429230],
    headCount: 254,
    action: ["View Details"],
  },
  {
    rank: 2,
    company: ["/companies/rapid_dynamics.svg", "Rapid Dynamics", "Melbourne"],
    score: 9202,
    speed: 94,
    impressions: 4540,
    salesGrowth: [65, 429230],
    headCount: 254,
    action: ["View Details"],
  },
  {
    rank: 3,
    company: ["/companies/solenoid.svg", "Solenoid", "Mackay"],
    score: 9202,
    speed: 94,
    impressions: 403540,
    salesGrowth: [65, 429230],
    headCount: 254,
    action: ["View Details"],
  },
  {
    rank: 4,
    company: ["/companies/verify.svg", "Verify", "Brisbane"],
    score: 9202,
    speed: 94,
    impressions: 4540,
    salesGrowth: [65, 429230],
    headCount: 254,
    action: ["View Details"],
  },
  {
    rank: 5,
    company: ["/companies/wiegand-shields.svg", "Wiegand-Shields", "Melbourne"],
    score: 9202,
    speed: 94,
    impressions: 403540,
    salesGrowth: [65, 429230],
    headCount: 254,
    action: ["View Details"],
  },
  {
    rank: 6,
    company: ["/companies/performante.svg", "Performante", "Mackay"],
    score: 9202,
    speed: 94,
    impressions: 4540,
    salesGrowth: [65, 429230],
    headCount: 254,
    action: ["View Details"],
  },
  {
    rank: 7,
    company: ["/companies/median.svg", "Median", "Townsville"],
    score: 9202,
    speed: 94,
    impressions: 403540,
    salesGrowth: [65, 429230],
    headCount: 254,
    action: ["View Details"],
  },
  {
    rank: 8,
    company: ["/companies/mertz_group.svg", "Mertz Group", "Sydney"],
    score: 9202,
    speed: 94,
    impressions: 4540,
    salesGrowth: [65, 429230],
    headCount: 254,
    action: ["View Details"],
  },
  {
    rank: 9,
    company: [
      "/companies/wiegand-shields2.svg",
      "Wiegand-Shields",
      "Melbourne",
    ],
    score: 9202,
    speed: 94,
    impressions: 403540,
    salesGrowth: [65, 429230],
    headCount: 254,
    action: ["View Details"],
  },
  {
    rank: 10,
    company: ["/companies/performante2.svg", "Performante", "Mackay"],
    score: 9202,
    speed: 94,
    impressions: 4540,
    salesGrowth: [65, 429230],
    headCount: 254,
    action: ["View Details"],
  },
  {
    rank: 11,
    company: ["/companies/median2.svg", "Median", "Townsville"],
    score: 9202,
    speed: 94,
    impressions: 403540,
    salesGrowth: [65, 429230],
    headCount: 254,
    action: ["View Details"],
  },
  {
    rank: 12,
    company: ["/companies/mertz_group2.svg", "Mertz Group", "Sydney"],
    score: 9202,
    speed: 94,
    impressions: 4540,
    salesGrowth: [65, 429230],
    headCount: 254,
    action: ["View Details"],
  },
];

const columnHelper = createColumnHelper<UnitConversion>();

const columns = [
  columnHelper.accessor("rank", {
    cell: (info) => (
      <Text fontSize="16px" className="text-hyvv-desciption font-medium">
        {"#" + info.getValue()}
      </Text>
    ),
    header: "Rank",
  }),
  columnHelper.accessor("company", {
    cell: (info) => (
      <div className="flex gap-2">
        <Image
          src={info.getValue()[0]}
          width={34}
          height={34}
          alt="Picture of the author"
        />
        <div className="flex flex-col">
          <Text fontSize="16px" className="font-semibold text-hyvv-title-3">
            {info.getValue()[1]}
          </Text>
          <Text fontSize="14px" className="text-hyvv-desciption font-medium">
            {info.getValue()[2]}
          </Text>
        </div>
      </div>
    ),
    header: "Company Details",
  }),
  columnHelper.accessor("score", {
    cell: (info) => (
      <Text
        fontSize="16px"
        className="flex items-center justify-center font-semibold text-hyvv-title-3"
      >
        {new Intl.NumberFormat().format(info.getValue())}
      </Text>
    ),
    header: "Hyvv Score",
  }),
  columnHelper.accessor("speed", {
    cell: (info) => (
      <Text
        fontSize="16px"
        className="flex items-center justify-center font-semibold text-hyvv-title-3"
      >
        {info.getValue() + "%"}
      </Text>
    ),
    header: "Product Speed",
  }),
  columnHelper.accessor("impressions", {
    cell: (info) => (
      <Text
        fontSize="16px"
        className="flex items-center justify-center font-semibold text-hyvv-title-3"
      >
        {Intl.NumberFormat("en", { notation: "compact" }).format(
          info.getValue()
        )}
      </Text>
    ),
    header: "No. of Impression",
  }),
  columnHelper.accessor("salesGrowth", {
    cell: (info) => (
      <div className="flex flex-col items-center justify-center">
        <Text fontSize="16px" className="font-semibold text-hyvv-title-3">
          {info.getValue()[0] + "%"}
        </Text>
        <Text fontSize="14px" className="text-hyvv-desciption font-medium">
          {"$" +
            Intl.NumberFormat("en", { notation: "compact" }).format(
              info.getValue()[1]
            )}
        </Text>
      </div>
    ),
    header: "Sales Growth",
  }),
  columnHelper.accessor("headCount", {
    cell: (info) => (
      <Text fontSize="16px" className="font-semibold text-hyvv-title-3">
        {info.getValue()}
      </Text>
    ),
    header: "Headcount",
    meta: {
      isNumeric: true,
    },
  }),
  columnHelper.accessor("action", {
    cell: (info) => (
      <div className="flex items-center justify-center">
        {info.getValue().map((actionText: string, index: number) => (
          <Button variant="outline" borderRadius="full" key={index}>
            {actionText}
          </Button>
        ))}
      </div>
    ),
  }),
];

export interface IAllTimePanel {}

const AllTimePanel: React.FC<IAllTimePanel> = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flow-root">
        <div className="float-left w-1/2">
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Search2Icon color="#C1C1C1" />
            </InputLeftElement>
            <Input placeholder="Search here.." />
          </InputGroup>
        </div>
        <div className="float-right flex gap-2">
          <Button variant="outline" leftIcon={<BsFilterLeft color="#858585" />}>
            Sort
          </Button>
          <Button variant="outline" leftIcon={<FiFilter color="#858585" />}>
            Filters
            <Badge colorScheme="main" borderRadius="full" className="ml-1">
              <Text fontSize="16px" className="font-semibold">
                2
              </Text>
            </Badge>
          </Button>
        </div>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default AllTimePanel;

import React, { useState } from "react";

import { Button, IconButton, Text } from "@chakra-ui/react";

import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

import FreelancerCard from "../../../cards/FreelancerCard/FreelancerCard";
import FilterGroup from "./FilterGroup/FilterGroup";
import SearchInput from "../../../base/Input/SearchInput";

const staticFreelancerData = [
  {
    id: 0,
    avatar: "/avatar1.png",
    name: "David Oshodi",
    job: "FrontEnd Development",
    rating: 4.8,
    rank: 10489,
    hourlyRate: 30,
    successRate: 77,
    saved: true,
  },
  {
    id: 1,
    avatar: "/avatar1.png",
    name: "Denis Naipanoi",
    job: "FrontEnd Development",
    rating: 4.6,
    rank: 10490,
    hourlyRate: 30,
    successRate: 77,
    saved: true,
  },
  {
    id: 2,
    avatar: "/avatar1.png",
    name: "Joseph Diaz",
    job: "FrontEnd Development",
    rating: 4.2,
    rank: 10491,
    hourlyRate: 30,
    successRate: 77,
    saved: true,
  },
  {
    id: 3,
    avatar: "/avatar1.png",
    name: "Joseph Ngumbau",
    job: "FrontEnd Development",
    rating: 5,
    rank: 10492,
    hourlyRate: 30,
    successRate: 100,
    saved: false,
  },
  {
    id: 4,
    avatar: "/avatar1.png",
    name: "John Leboo",
    job: "FrontEnd Development",
    rating: 4.9,
    rank: 10493,
    hourlyRate: 30,
    successRate: 92,
    saved: true,
  },
  {
    id: 5,
    avatar: "/avatar1.png",
    name: "John Leboo",
    job: "FrontEnd Development",
    rating: 4.9,
    rank: 10494,
    hourlyRate: 30,
    successRate: 92,
    saved: false,
  },
  {
    id: 6,
    avatar: "/avatar1.png",
    name: "John Leboo",
    job: "FrontEnd Development",
    rating: 4.9,
    rank: 10495,
    hourlyRate: 30,
    successRate: 92,
    saved: false,
  },
  {
    id: 7,
    avatar: "/avatar1.png",
    name: "John Leboo",
    job: "FrontEnd Development",
    rating: 4.9,
    rank: 10496,
    hourlyRate: 30,
    successRate: 92,
    saved: false,
  },
  {
    id: 8,
    avatar: "/avatar1.png",
    name: "John Leboo",
    job: "FrontEnd Development",
    rating: 4.9,
    rank: 10497,
    hourlyRate: 30,
    successRate: 92,
    saved: false,
  },
  {
    id: 9,
    avatar: "/avatar1.png",
    name: "John Leboo",
    job: "FrontEnd Development",
    rating: 4.9,
    rank: 10498,
    hourlyRate: 30,
    successRate: 92,
    saved: true,
  },
  {
    id: 10,
    avatar: "/avatar1.png",
    name: "John Leboo",
    job: "FrontEnd Development",
    rating: 4.9,
    rank: 10499,
    hourlyRate: 30,
    successRate: 92,
    saved: true,
  },
  {
    id: 11,
    avatar: "/avatar1.png",
    name: "John Leboo",
    job: "FrontEnd Development",
    rating: 4.9,
    rank: 10500,
    hourlyRate: 30,
    successRate: 92,
    saved: false,
  },
  {
    id: 12,
    avatar: "/avatar1.png",
    name: "John Leboo",
    job: "FrontEnd Development",
    rating: 4.9,
    rank: 10501,
    hourlyRate: 30,
    successRate: 92,
    saved: false,
  },
  {
    id: 13,
    avatar: "/avatar1.png",
    name: "John Leboo",
    job: "FrontEnd Development",
    rating: 4.9,
    rank: 10502,
    hourlyRate: 30,
    successRate: 92,
    saved: false,
  },
  {
    id: 14,
    avatar: "/avatar1.png",
    name: "John Leboo",
    job: "FrontEnd Development",
    rating: 4.9,
    rank: 10503,
    hourlyRate: 30,
    successRate: 92,
    saved: true,
  },
  {
    id: 15,
    avatar: "/avatar1.png",
    name: "John Leboo",
    job: "FrontEnd Development",
    rating: 4.9,
    rank: 10504,
    hourlyRate: 30,
    successRate: 92,
    saved: false,
  },
];

const ManageRightSidebar = () => {
  const [hideContent, setHideContent] = useState(false);
  const [freelancerData, setFreelancerData] = useState(staticFreelancerData);
  const [savedFreelancerView, setSavedFreelancerView] = useState(false);

  const showFreelancers = () => {
    setHideContent(!hideContent);
  };

  const setSavedFreelancer = (i: number) => {
    const temp = freelancerData.map((item, index) => {
      if (index === i) {
        return { ...item, saved: !item.saved };
      } else {
        return item;
      }
    });
    setFreelancerData(temp);
  };

  return (
    <>
      <div className="w-[300px]" />
      <div
        className={`absolute transition-all ${
          hideContent ? "w-[calc(100%-315px)]" : "w-[300px]"
        } right-0 h-full border-l bg-white duration-500`}
      >
        <div className="relative flex h-full flex-col">
          <div className="flex-1 overflow-y-auto  p-4">
            <Text fontSize="20px" color="#0d1317">
              {savedFreelancerView ? "Saved" : ""} Freelancers
            </Text>
            <Text fontSize="12px" color="#84818a" className="font-Manrope">
              Lorem Ipsum is simply dummy text of the printing
            </Text>
            <SearchInput />
            <FilterGroup sortOptionHidden={hideContent ? "" : "hidden"} />
            <div
              className={`grid gap-4 ${
                hideContent
                  ? "sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-4"
                  : "grid-cols-1"
              }`}
            >
              {(savedFreelancerView
                ? freelancerData.filter((item) => item.saved == true)
                : freelancerData
              ).map((freelancer, index) => {
                return (
                  <FreelancerCard
                    avatar={freelancer.avatar}
                    name={freelancer.name}
                    rating={freelancer.rating}
                    rank={freelancer.rank}
                    hourlyRate={freelancer.hourlyRate}
                    successRate={freelancer.successRate}
                    job={freelancer.job}
                    saved={freelancer.saved}
                    id={freelancer.id}
                    setSavedFreelancer={setSavedFreelancer}
                    key={index}
                  />
                );
              })}
            </div>
            <IconButton
              size="xs"
              aria-label="View Freelancers"
              icon={hideContent ? <ChevronRightIcon /> : <ChevronLeftIcon />}
              top="30px"
              left="-10px"
              borderRadius="50px"
              position="absolute"
              backgroundColor={"white"}
              zIndex={5}
              onClick={() => {
                showFreelancers();
                setSavedFreelancerView(false);
              }}
              className="z-10 shadow-md"
            />
          </div>
          {!hideContent ? (
            <div className={`p-4`}>
              <Button
                variant="solid"
                colorScheme="main"
                color="white"
                leftIcon={<ChevronLeftIcon />}
                onClick={() => {
                  showFreelancers();
                  setSavedFreelancerView(true);
                }}
                className="w-full"
              >
                Saved Freelancers
              </Button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default ManageRightSidebar;

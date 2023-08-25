import { Button } from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";
import ShareIcon from "../../icons/ShareIcon";

import UserInfo from "./UserInfo/UserInfo";
import CompanyDetails from "./CompanyDetails";
import CoreInfo from "./CoreInfo";
import CoreProduct from "./CoreProduct";
import MarketCapture from "./MarketCapture";
import MarketSize from "./MarketSize";
import ProductImage from "./ProductImage";
import TextGroup from "./TextGroup";

const leftElements = [
  <CompanyDetails key={0} />,
  <TextGroup key={1} />,
  <ProductImage key={2} />,
];
const rightElements = [
  <CoreProduct key={0} />,
  <UserInfo key={1} />,
  <MarketSize key={2} />,
  <MarketCapture key={3} />,
  <CoreInfo key={4} />,
];

const OnePager = () => {
  return (
    <div>
      <div className="flex justify-between">
        <span
          color="#2E2C34"
          className="font-Manrope text-[28px] font-semibold"
        >
          One Pager
        </span>
        <Button
          colorScheme="main"
          color="white"
          leftIcon={<ShareIcon />}
          rightIcon={<ChevronDownIcon />}
        >
          Share
        </Button>
      </div>
      <div className="mt-4 grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col gap-y-6">
          {leftElements.map((element, index) => {
            return (
              <div className="rounded-md bg-white shadow-md" key={index}>
                {element}
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-y-6">
          {rightElements.map((element, index) => {
            return (
              <div className="rounded-md bg-white shadow-md" key={index}>
                {element}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OnePager;

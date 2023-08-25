import React, { useState } from "react";

import Link from "next/link";

import { Button, Text } from "@chakra-ui/react";

import { ChevronRightIcon } from "@chakra-ui/icons";
import { BsCheck2Circle } from "react-icons/bs";

import BreadcrumbHeader from "../../../../base/Breadcrumb";

import BadgeAvatar from "../../../../cards/FreelancerCard/BadgeAvatar/BadgeAvatar";

import TypeRadioGroup from "../../../../TypeRadioGroup/TypeRadioGroup";

import { IAvailableFreelancerCard } from "../../../../cards/AvailableFreelancerCard/AvailableFreelancerCard";
import { IType } from "../../../../TypeRadioGroup/TypeRadioGroup";

import PositionIcon from "../../../../icons/PositionIcon";
import SecurityPaymentIcon from "../../../../icons/SecurityPaymentIcon";
import SuccessIcon from "../../../../icons/SuccessIcon";
import YellowStarIcon from "../../../../icons/YellowStarIcon";

const paymentTypes: Array<IType> = [
  {
    title: "Weekly",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text",
    paymentType: "Per week payment",
    amount: 320,
    nextPaymentDate: "May 14, 2023",
    visibleFooter: true,
  },
  {
    title: "Monthly",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text",
    paymentType: "Per month payment",
    amount: 600,
    nextPaymentDate: "May 14, 2023",
    visibleFooter: true,
  },
  {
    title: "One Time",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text",
    paymentType: "Total Price",
    amount: 380,
    visibleFooter: false,
  },
];

export interface ISetPayment {
  availableFreelancers: Array<IAvailableFreelancerCard>;
  selectedUser: number;
}

const SetPayment: React.FC<ISetPayment> = ({
  availableFreelancers,
  selectedUser,
}) => {
  const [type, setType] = useState("Weekly");

  const { name, avatar, successRate, bidRate } =
    availableFreelancers[selectedUser];

  return (
    <div>
      <div className="border-b pl-4 pr-4 pt-4">
        <BreadcrumbHeader
          parentName="Available Freelancer"
          name={name}
          showIcon={false}
          invisibleBreadcrumbIcon
          invisibleHeader
          invisibleTitle
        />
      </div>
      <div className="flex gap-4 border-b p-4">
        <BadgeAvatar
          avatar={avatar}
          size={54}
          isOnline={true}
          className="mb-auto mt-auto"
        />
        <div className="flex flex-col gap-2">
          <div className="flex">
            <Text fontSize="24px" className="font-semibold text-hyvv-title-1">
              {name}
            </Text>
            <YellowStarIcon className="mb-auto ml-2 mt-auto" />
            <Text
              fontSize="16px"
              className="mb-auto ml-1 mt-auto font-bold text-hyvv-title-1"
            >
              4.2
            </Text>
          </div>
          <div className="flex">
            <div className="flex pr-4">
              <PositionIcon />
              <Text fontSize="14px" className="ml-1 font-bold text-hyvv-main">
                Fort Collins, United States
              </Text>
            </div>
            <div className="mb-auto mt-auto flex border-l pl-4">
              <SuccessIcon />
              <Text fontSize="12px" color="#27ae60" className="font-Manrope">
                {successRate}% Success Rate
              </Text>
            </div>
          </div>
        </div>
      </div>
      <div className="flow-root pb-2 pl-4 pr-4 pt-2">
        <div className="float-left flex gap-2">
          <BsCheck2Circle size="24px" />
          <Text fontSize="14px" className="font-Manrope font-semibold">
            Task List
          </Text>
        </div>
        <div className="float-right">
          <Link href="/manage/taskitem" className="flex gap-2" passHref>
            <Text
              fontSize="14px"
              className="font-Manrope font-medium text-hyvv-description"
            >
              LinkedIn Marketing #42903
            </Text>
            <ChevronRightIcon className="mb-auto mt-auto" />
          </Link>
        </div>
      </div>
      <div className="border-t pl-4 pr-4">
        <TypeRadioGroup types={paymentTypes} type={type} setType={setType} />
      </div>
      <div className="m-4 flow-root border-t p-4">
        <div className="float-left flex flex-col gap-2">
          <Text fontSize="14px" className="text-hyvv-description">
            Subtotal
          </Text>
          <Text fontSize="14px" className="text-hyvv-description">
            Subtotal
          </Text>
          <Button variant="link">
            <Text fontSize="14px" className="font-medium text-hyvv-title-1">
              Have a promo code?
            </Text>
          </Button>
        </div>
        <div className="float-right flex flex-col gap-2">
          <Text fontSize="14px" className="font-bold text-hyvv-title-1">
            $ {bidRate}
          </Text>
          <Text fontSize="14px" className="font-bold text-hyvv-title-1">
            $ 15
          </Text>
        </div>
      </div>
      <div className="m-4 flow-root border-t p-4">
        <div className="float-left">
          <Text fontSize="14px" className="font-semibold text-hyvv-title-1">
            Amount to be paid today
          </Text>
        </div>
        <div className="float-right">
          <Text fontSize="14px" className="font-semibold text-hyvv-title-1">
            $ {bidRate + 15}
          </Text>
        </div>
      </div>
      <div className="m-4 border-t p-4">
        <Text fontSize="10px" className="font-Manrope text-hyvv-title-2">
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without.
        </Text>
      </div>
      <div className="p-4">
        <Button
          colorScheme="main"
          leftIcon={<SecurityPaymentIcon />}
          className="w-full"
        >
          Proceed for payment
        </Button>
      </div>
    </div>
  );
};

export default SetPayment;

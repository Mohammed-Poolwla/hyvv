import {
  Button,
  Checkbox,
  Grid,
  GridItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import Stripe from "./Stripe";
import React, { useState } from "react";
import { BsArrowLeft, BsCheckCircleFill, BsStarFill } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import AXIOS from "../../../services";
const PlanList = [
  {
    title: "Starter",
    description: "Perfect for starter",
    price: { monthly: 0, yearly: 0 },
    state: "enable",
    service: {
      data_api: false,
      team_member: 1,
      could_storage: "1GB",
      vision_history: false,
      sharing_permissions: false,
      team_libraries: false,
      snippets: true,
    },
  },
  {
    title: "Small Team",
    description: "For Creative Individuals",
    price: { monthly: 49, yearly: 30 },
    state: "current",
    service: {
      data_api: true,
      team_member: 3,
      could_storage: "5GB",
      vision_history: true,
      sharing_permissions: false,
      team_libraries: false,
      snippets: true,
    },
  },
  {
    title: "Organization",
    description: "Perfect for a small Team",
    price: { monthly: 79, yearly: 60 },
    state: "recommend",
    popular: true,
    service: {
      data_api: true,
      team_member: 10,
      could_storage: "10GB",
      vision_history: true,
      sharing_permissions: true,
      team_libraries: true,
      snippets: true,
    },
  },
  {
    title: "Enterprise",
    description: "Perfect for Whole Team",
    price: { monthly: 120, yearly: 100 },
    state: "enable",
    service: {
      data_api: true,
      team_member: "Unlimited",
      could_storage: "Unlimited",
      vision_history: true,
      sharing_permissions: true,
      team_libraries: true,
      snippets: true,
    },
  },
];
const PlanModal = ({ isOpen, onClose }) => {
  const [period, setPeriod] = useState("monthly");
  const [intent, setIntent] = React.useState("");
  const {
    isOpen: isCheckOutOpen,
    onOpen: onCheckOutOpen,
    onClose: onCheckOutClose,
  } = useDisclosure();
  const handlePay = () => {
    onCheckOutOpen();
    AXIOS.post("/api/payments/create-stripe-intent", {
      plan_id: 1,
      plan_type: "monthly",
      amount: 30,
    })
      .then((res) => {
        setIntent(res.data.client_secret);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size={"6xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody p={10} className="flex flex-col gap-y-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-[30px] font-semibold">Pricing & Plans</h3>
                <p className="text-[15px] text-[#84818A]">
                  There are many variations of passages of Lorem Ipsum available
                </p>
              </div>
              <div className="flex cursor-pointer gap-x-1 overflow-hidden rounded-md bg-[#f8f8f8] p-1 font-semibold">
                <div
                  className={`rounded-md transition-all ${
                    period == "monthly"
                      ? "bg-[#fff] shadow-[0_5px_20px_rgba(4,4,21,0.1)]"
                      : ""
                  }  px-4 py-1`}
                  onClick={() => setPeriod("monthly")}
                >
                  Monthly
                </div>
                <div
                  className={`rounded-md transition-all ${
                    period == "yearly"
                      ? "bg-[#fff] shadow-[0_5px_20px_rgba(4,4,21,0.1)]"
                      : ""
                  } px-4 py-1`}
                  onClick={() => setPeriod("yearly")}
                >
                  Yearly
                </div>
              </div>
            </div>

            <Grid
              templateColumns={`auto repeat(${PlanList.length}, 1fr)`}
              gap={4}
            >
              <GridItem>
                <p className="w-[300px] text-[16px] text-[#6C727F]">
                  Need Customized solution for your whole team?
                </p>
              </GridItem>
              {PlanList.map((item, i) => {
                return (
                  <GridItem key={i}>
                    <h3 className="text-[20px] font-semibold">{item.title}</h3>
                    <p className="text-[14px] text-[#6C727F]">
                      {item.description}
                    </p>
                  </GridItem>
                );
              })}

              <GridItem>
                <p className="flex items-center text-[16px] font-semibold text-[#08657E]">
                  Contact Sales <FiArrowUpRight />
                </p>
              </GridItem>
              {PlanList.map((item, i) => {
                return (
                  <GridItem key={i}>
                    {item.price[period] == 0 ? (
                      <h3 className="text-[30px] font-bold">Free</h3>
                    ) : (
                      <div className="flex font-bold">
                        <p className="text-[20px]">$</p>
                        <h3 className="text-[30px]"> {item.price[period]}</h3>
                      </div>
                    )}
                    <div className="flex items-center gap-x-2">
                      <p className="text-[14px] text-[#6C727F]">
                        {item.price[period] ? "/monthly" : "For lifetime"}
                      </p>
                      {item.popular ? (
                        <p className="flex items-center gap-x-1 rounded-full bg-[#e6f9ee] px-2 py-1 text-[13px] text-[#27ae60]">
                          <BsStarFill />
                          Popular
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                  </GridItem>
                );
              })}
              <GridItem></GridItem>
              {PlanList.map((item, i) => {
                return (
                  <GridItem key={i}>
                    <Button variant={"outline"} colorScheme="main" onClick={handlePay}>
                      Choose Plan
                    </Button>
                  </GridItem>
                );
              })}

              <GridItem />
              <GridItem />
              <GridItem />
            </Grid>
            <Grid
              templateColumns={`auto repeat(${PlanList.length}, 1fr)`}
              gap={0}
            >
              <GridItem className="col-span-5 border-b border-[#eef1f7] py-4">
                <p className="w-[300px] text-[16px] font-semibold text-[#000]">
                  Core Features
                </p>
              </GridItem>
              <GridItem className="border-b border-[#eef1f7] py-4">
                <p className="w-[300px] text-[16px] text-[#737373]">Data API</p>
              </GridItem>
              {PlanList.map((item, i) => {
                return (
                  <GridItem
                    key={i}
                    className="flex items-center justify-center border-b border-[#eef1f7] py-4"
                  >
                    {item.service.data_api ? (
                      <BsCheckCircleFill color="#27ae60" />
                    ) : (
                      "-"
                    )}
                  </GridItem>
                );
              })}
              <GridItem className="border-b border-[#eef1f7] py-4">
                <p className="w-[300px] text-[16px] text-[#737373]">
                  Team Member
                </p>
              </GridItem>
              {PlanList.map((item, i) => {
                return (
                  <GridItem
                    key={i}
                    className="flex items-center justify-center border-b border-[#eef1f7] py-4 font-semibold text-[#000]"
                  >
                    {item.service.team_member}
                  </GridItem>
                );
              })}
              <GridItem className="border-b border-[#eef1f7] py-4">
                <p className="w-[300px] text-[16px] text-[#737373]">
                  Cloud Storage
                </p>
              </GridItem>
              {PlanList.map((item, i) => {
                return (
                  <GridItem
                    key={i}
                    className="flex items-center justify-center border-b border-[#eef1f7] py-4 font-semibold text-[#000]"
                  >
                    {item.service.could_storage}
                  </GridItem>
                );
              })}
            </Grid>
            <Grid
              templateColumns={`auto repeat(${PlanList.length}, 1fr)`}
              gap={0}
            >
              <GridItem className="col-span-5 border-b border-[#eef1f7] py-4">
                <p className="w-[300px] text-[16px] font-semibold text-[#000]">
                  Productivity & Collaboration
                </p>
              </GridItem>
              <GridItem className="border-b border-[#eef1f7] py-4">
                <p className="w-[300px] text-[16px] text-[#737373]">
                  Version history
                </p>
              </GridItem>
              {PlanList.map((item, i) => {
                return (
                  <GridItem
                    key={i}
                    className="flex items-center justify-center border-b border-[#eef1f7] py-4"
                  >
                    {item.service.vision_history ? (
                      <BsCheckCircleFill color="#27ae60" />
                    ) : (
                      "-"
                    )}
                  </GridItem>
                );
              })}
              <GridItem className="border-b border-[#eef1f7] py-4">
                <p className="w-[300px] text-[16px] text-[#737373]">
                  Sharing permissions
                </p>
              </GridItem>
              {PlanList.map((item, i) => {
                return (
                  <GridItem
                    key={i}
                    className="flex items-center justify-center border-b border-[#eef1f7] py-4 font-semibold text-[#000]"
                  >
                    {item.service.sharing_permissions ? (
                      <BsCheckCircleFill color="#27ae60" />
                    ) : (
                      "-"
                    )}
                  </GridItem>
                );
              })}
              <GridItem className="border-b border-[#eef1f7] py-4">
                <p className="w-[300px] text-[16px] text-[#737373]">
                  Team libraries
                </p>
              </GridItem>
              {PlanList.map((item, i) => {
                return (
                  <GridItem
                    key={i}
                    className="flex items-center justify-center border-b border-[#eef1f7] py-4 font-semibold text-[#000]"
                  >
                    {item.service.team_libraries ? (
                      <BsCheckCircleFill color="#27ae60" />
                    ) : (
                      "-"
                    )}
                  </GridItem>
                );
              })}
              <GridItem className="border-b border-[#eef1f7] py-4">
                <p className="w-[300px] text-[16px] text-[#737373]">Snippets</p>
              </GridItem>
              {PlanList.map((item, i) => {
                return (
                  <GridItem
                    key={i}
                    className="flex items-center justify-center border-b border-[#eef1f7] py-4 font-semibold text-[#000]"
                  >
                    {item.service.snippets ? (
                      <BsCheckCircleFill color="#27ae60" />
                    ) : (
                      "-"
                    )}
                  </GridItem>
                );
              })}
            </Grid>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Modal isOpen={isCheckOutOpen} onClose={onCheckOutClose} isCentered size={"xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody p={8} className="flex flex-col gap-y-6">
            <div className="flex items-center gap-x-3 text-[#808494]" onClick={onCheckOutClose}>
              <BsArrowLeft />
              Back to Pricing & Plan
            </div>
            {intent ? <Stripe intent={intent} callBack={onCheckOutClose} /> : null}
            <div className="flex flex-col gap-y-4">
              {/* <Button colorScheme="main" className="w-full">
                Confirm & Checkout
              </Button>
              <Button
                colorScheme="black"
                className="w-full"
                variant={"outline"}
                onClick={onClose}
              >
                Close
              </Button> */}
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PlanModal;
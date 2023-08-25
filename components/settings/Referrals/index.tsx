import { Button, Divider, Input, useToast } from "@chakra-ui/react";
import React, { useRef } from "react";
import Image from "next/image";
import StatusIcon from "../../icons/StatusIcon";
const startupData = [
  {
    name: "Vertigo Inc.",
    email: "hello@vertigo.com",
    logo: "/startups/Vertigo Inc..png",
    plan: 4.99,
    earning: 10,
    status: "Active",
  },
  {
    name: "Mindfulness",
    email: "hello@vertigo.com",
    logo: "/startups/Mindfulness.png",
    plan: 4.99,
    earning: 10,
    status: "Disactive",
  },
];

const Notification = () => {
  const toast = useToast();
  const handleCopyCode = (codeRef) => {
    navigator.clipboard.writeText(codeRef.current.value);
    if (codeRef.current.value.length) {
      toast({
        description: `Copied '${codeRef.current.value}' to clipboard`,
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    } else {
      toast({
        description: `You haven't Referral Code`,
        status: "warning",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    }
  };
  const codeRef = useRef();
  return (
    <>
      <div className="flex flex-col gap-y-6 px-6">
        <div className="flex flex-col gap-y-3">
          <h3 className="text-[15px] font-semibold">Your Referral Code:</h3>
          <div className="flex items-center gap-x-4">
            <Input
              defaultValue={"https://hyvv.io/referrals/los7vz9zs"}
              sx={{ width: "400px" }}
              ref={codeRef}
            />
            <Button
              colorScheme="main"
              onClick={() => {
                handleCopyCode(codeRef);
              }}
            >
              COPY CODE
            </Button>
            <Button colorScheme="main">COPY INVITE EMAIL</Button>
          </div>
        </div>
        <div className="flex items-center gap-x-6 rounded-lg border border-[#e8e8e8] px-6 py-4">
          <div className="flex flex-1 flex-col self-start">
            <span className="text-[20px] font-bold text-[#000929]">Step 1</span>
            <span className="text-[15px] font-semibold text-[#000929]">
              Copy your Referral code or email template
            </span>
          </div>
          <div className="h-[30px] w-px bg-[#e8e8e8]" />
          <div className="flex flex-1 flex-col self-start">
            <span className="text-[20px] font-bold text-[#000929]">Step 2</span>
            <span className="text-[15px] font-semibold text-[#000929]">
              Send email to your contacts or text people your referral code
            </span>
          </div>
          <div className="h-[30px] w-px bg-[#e8e8e8]" />
          <div className="flex flex-1 flex-col self-start">
            <span className="text-[20px] font-bold text-[#000929]">Step 3</span>
            <span className="text-[15px] font-semibold text-[#000929]">
              See linked sign up and view earnings
            </span>
          </div>
          <Button colorScheme="green" variant={"outline"}>
            Get Paid
          </Button>
        </div>
      </div>
      <Divider />
      <div className="flex flex-col gap-y-3 px-6">
        {startupData.map((item, i) => {
          return (
            <div
              key={i}
              className="flex items-center gap-x-6 rounded-lg border border-[#e8e8e8] px-6 py-4"
            >
              <div className="flex flex-1 items-center gap-x-6">
                <Image
                  src={item.logo}
                  alt="startup-logo"
                  width={40}
                  height={40}
                />
                <div className="flex flex-col">
                  <span className="text-[20px] font-bold text-[#000929]">
                    {item.name}
                  </span>
                  <span className="text-[15px] text-[#AFAFAF]">
                    {item.email}
                  </span>
                </div>
              </div>
              <div className="h-[30px] w-px bg-[#e8e8e8]" />
              <div className="flex flex-1 items-center justify-center gap-x-3">
                <span className="text-[15px] text-[#6C727F]">
                  Scale up Plan - ${item.plan}
                </span>
              </div>
              <div className="h-[30px] w-px bg-[#e8e8e8]" />
              <div className="flex flex-1 items-center gap-x-3">
                <div className="rounded-full border border-[#ebebeb] p-2 text-[#08657e]">
                  <StatusIcon />
                </div>
                <div className="flex flex-col">
                  <span className="text-[15px] text-[#6C727F]">Status</span>
                  <span
                    className={`text-[18px] ${
                      item.status == "Active"
                        ? "text-[#39a430]"
                        : "text-[#aaaaaa]"
                    } font-semibold`}
                  >
                    {item.status}
                  </span>
                </div>
              </div>
              <div className="h-[30px] w-px bg-[#e8e8e8]" />
              <div className="flex flex-1 items-center gap-x-3">
                <div className="flex flex-col">
                  <span className="text-[15px] text-[#6C727F]">
                    Your Earnings
                  </span>
                  <span className={`text-[18px] font-semibold text-[#39a430]`}>
                    ${item.earning} a month
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Divider />
      <div className="px-6 text-[20px] font-semibold">
        <span className="text-[#08657E]">Monthly Referral Revenue:</span>
        <span className="text-[#39A430]">$20.00 a month</span>
      </div>
    </>
  );
};

export default Notification;

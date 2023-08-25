import { Button, Image, Select, Text } from "@chakra-ui/react";

import Rating from "../../base/Rating";

const data = [
  {
    service: "g2",
    review: 4.5,
  },
  {
    service: "trustpilot",
    review: 4.5,
  },
  {
    service: "google_suite",
    review: 4.5,
  },
];

const HeroSection: React.FC<{}> = () => {
  return (
    <div className="grid grid-cols-1 items-center gap-y-10 text-center">
      <Text className="px-6 text-5xl font-bold">
        An all-in-one system for{" "}
        <span className="text-[#36A635]">startups</span>&nbsp; that
        <br /> execute.
      </Text>
      <Text className="px-6">
        Everything you need to take an idea from zero to one. Startups, start
        here.
      </Text>

      <div className="mx-auto grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-2">
        <Button
          colorScheme="whatsapp"
          style={{ width: 150, borderRadius: 100 }}
        >
          Try free
        </Button>
        <Button
          colorScheme="black"
          variant="outline"
          style={{ width: 150, borderRadius: 100 }}
          className="transition-all hover:bg-slate-100"
        >
          See demo
        </Button>
      </div>
      <div className="mx-auto grid max-w-xl grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-3">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-x-2">
            <Image
              boxSize="30px"
              src={`/logos/${item.service}.svg`}
              alt="logos"
            />
            <Rating key={index} mark={Number(item.review)} width={"15px"} />
          </div>
        ))}
      </div>
      <div className="relative grid justify-center justify-items-center pt-32 sm:pt-60 md:pt-96">
        <Image
          className="absolute bottom-64 rounded-xl md:w-[900px]"
          src={`/landing/manage.png`}
          alt="landing"
        />
        <div className="flex h-[700px] w-[100vw] flex-col  items-center justify-end gap-y-10 bg-[#006CEB] pb-10">
          <Text className="w-[500px] text-4xl font-bold text-white">
            I&apos;m interested in starting a business in:
          </Text>
          <div className="px-5">
            <Select
              placeholder="Select your busniess type"
              size="lg"
              bg="white"
              color="black"
              maxW="400px"
              height={"65px"}
              style={{ fontWeight: "bold", cursor: "pointer" }}
            ></Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

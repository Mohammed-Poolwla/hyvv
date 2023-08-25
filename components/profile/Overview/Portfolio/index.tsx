import NextLink from "next/link";

import { Link, Text } from "@chakra-ui/react";

import { BsBehance, BsDribbble, BsLinkedin } from "react-icons/bs";

import { useAppStore } from "../../../../lib/store";

const SiteIcon = {
  LinkedIn: <BsLinkedin className="text-[#0A66C2]" size={"25px"} />,
  Behance: <BsBehance size={"25px"} />,
  Dribbble: (
    <BsDribbble
      className="rounded-full bg-[#EA4C89] text-[#C32361]"
      size={"25px"}
    />
  ),
};

const Portfolio = () => {
  const { freelancerProfileData } = useAppStore();

  return (
    <div className="flex w-full flex-col gap-2 rounded-lg bg-white p-5 text-xl font-semibold shadow-md">
      <Text className="font-bold">Portfolio</Text>
      <div className="flex flex-col gap-y-3">
        {freelancerProfileData.workExperience.portfolio.map((item, index) => {
          return (
            <div className="flex items-center gap-x-2" key={index}>
              <div>{SiteIcon[item.provider]}</div>
              <Link
                className="flex-1 truncate"
                as={NextLink}
                href={"https://" + item.link}
              >
                <Text className="text-ml text-[#0085FF] hover:underline">
                  {item.link}
                </Text>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;

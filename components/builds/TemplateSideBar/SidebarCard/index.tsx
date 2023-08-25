import {
  Avatar,
  Box,
  Button,
  Divider,
  Image,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Tag,
  TagLabel,
  TagLeftIcon,
} from "@chakra-ui/react";
import { BsPlus } from "react-icons/bs";
import { ItemType } from "..";
import ClockIcon from "../../../icons/ClockIcon";
import GraphCircleIcon from "../../../icons/GraphCircleIcon";

import {
  HiOutlineThumbDown,
  HiOutlineThumbUp,
  HiThumbDown,
  HiThumbUp,
} from "react-icons/hi";
import { Dispatch, SetStateAction } from "react";
import { MdArrowForwardIos } from "react-icons/md";

export interface ITemplateSideBarCard {
  dataSource: ItemType;
  type?: string;
  setUpVote: Function;
  setDownVote: Function;
  setTemplateBuild: Dispatch<SetStateAction<object>>;
}

export const TemplateSideBarCard: React.FC<ITemplateSideBarCard> = ({
  dataSource,
  setUpVote,
  type,
  setDownVote,
  setTemplateBuild,
}) => {
  const handleBuildBar = () => {
    const { title, subBar } = dataSource;
    setTemplateBuild({
      title,
      subBar,
      icon: `/logos/${title.toLocaleLowerCase().split(" ").join("_")}.svg`,
    });
  };

  return (
    <Box className="rounded-lg border border-[#E7E7E7]">
      <Box className="p-3">
        <Box className="flex flex-col gap-1">
          <Box className="flex justify-between">
            <Box className="flex items-center gap-x-2">
              {dataSource.title ? (
                <Image
                  boxSize="22px"
                  src={`/logos/${dataSource.title
                    .toLocaleLowerCase()
                    .split(" ")
                    .join("_")}.svg`}
                  alt="logos"
                />
              ) : (
                <GraphCircleIcon />
              )}
              <h3 className="font-semibold">{dataSource.title}</h3>
            </Box>
            <Box className="flex items-center gap-2">
              {type === "freelancer" ? (
                <Tag
                  size={"md"}
                  variant="subtle"
                  borderRadius="full"
                  colorScheme={"main"}
                  className="gap-x-1 text-[#08657e]"
                >
                  <TagLabel>$&nbsp;200</TagLabel>
                </Tag>
              ) : (
                ""
              )}
              <Box className="cursor-pointer" onClick={handleBuildBar}>
                <BsPlus size={"25px"} color="#84818a" />
              </Box>
            </Box>
          </Box>
          {type === "freelancer" ? (
            <span className="pl-6 text-[12px] font-semibold text-[#4cbb7b]">
              100% Success Rate
            </span>
          ) : (
            ""
          )}
        </Box>
      </Box>
      <Box className="flex justify-between rounded-b-lg bg-[#f7f7f7] px-3 py-3">
        <Box className="flex items-center gap-x-2">
          {type === "freelancer" ? (
            <Avatar name="Dan Abrahmov" size={"sm"} />
          ) : (
            ""
          )}

          <Tag
            size={"md"}
            variant="subtle"
            borderRadius="full"
            colorScheme={"main"}
            className="gap-x-1 text-[#08657e]"
          >
            <TagLeftIcon boxSize="12px" as={ClockIcon} />
            <TagLabel>
              {dataSource.time}&nbsp;{"min"}
            </TagLabel>
          </Tag>

          <Tag
            size={"md"}
            variant="subtle"
            borderRadius="full"
            colorScheme={"main"}
            className="gap-x-1 text-[#08657e]"
          >
            <TagLabel>{dataSource.duration}</TagLabel>
          </Tag>
        </Box>
        {type === "freelancer" ? (
          <Button
            colorScheme="main"
            variant="link"
            size="sm"
            rightIcon={<MdArrowForwardIos />}
          >
            View Details
          </Button>
        ) : (
          <Box className="flex items-center gap-x-2">
            {!dataSource.upVoteState ? (
              <HiOutlineThumbUp
                color="#08657e"
                className="cursor-pointer"
                onClick={() => {
                  setUpVote(dataSource.id);
                }}
              />
            ) : (
              <HiThumbUp
                color="#08657e"
                className="cursor-pointer"
                onClick={() => {
                  setUpVote(dataSource.id);
                }}
              />
            )}
            {dataSource.upVote}
            <Divider orientation="vertical" />
            {!dataSource.downVoteState ? (
              <HiOutlineThumbDown
                color="#7d0808"
                className="cursor-pointer"
                onClick={() => {
                  setDownVote(dataSource.id);
                }}
              />
            ) : (
              <HiThumbDown
                color="#7d0808"
                className="cursor-pointer"
                onClick={() => {
                  setDownVote(dataSource.id);
                }}
              />
            )}
            {dataSource.downVote}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export const SkeletonCard = () => {
  return (
    <Box className="rounded-lg border border-[#E7E7E7]">
      <Box className="p-3">
        <Box className="flex justify-between">
          <Box className="flex items-center gap-x-2">
            <SkeletonCircle size={"30px"} />
            <SkeletonText skeletonHeight="5" width={"50px"} noOfLines={1} />
          </Box>
          <Box className="cursor-pointer">
            <BsPlus size={"25px"} color="#84818a" />
          </Box>
        </Box>
      </Box>
      <Box className="flex justify-between rounded-b-lg bg-[#f7f7f7] px-3 py-3">
        <Box className="flex gap-x-2">
          <Skeleton height={"20px"} width={"60px"} />
          <Skeleton height={"20px"} width={"60px"} />
        </Box>
        <Box className="flex items-center gap-x-2">
          <Skeleton height={"20px"} width={"45px"} />
          <Skeleton height={"20px"} width={"45px"} />
        </Box>
      </Box>
    </Box>
  );
};

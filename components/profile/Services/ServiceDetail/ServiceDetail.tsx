import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Avatar,
  AvatarGroup,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Collapse,
  Divider,
  Heading,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { BsStarFill } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import { RiHome6Line } from "react-icons/ri";
import { TbMessageDots } from "react-icons/tb";

import { useAppStore } from "../../../../lib/store";

import ReviewItem from "../../Overview/Review/ReviewItem";
import UserInfo from "../UserInfo";
import CarouselView from "../../../base/Carousel";
import Price from "./Price";
interface PriceDataArray {
  id: number;
  due: string;
  price: number;
  service: string;
}

const PriceData: PriceDataArray[] = [
  { id: 0, due: "Monthly", price: 500, service: "included VAT" },
  { id: 1, due: "Weekly", price: 200, service: "included VAT" },
];

export default function ServiceDetail(props: any) {
  const { freelancerProfileData } = useAppStore();

  const { serviceData, setCurrent } = props;
  const [show, setShow] = React.useState(false);

  return (
    <div className="w-full">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-8 rounded-md bg-white shadow-md">
          <div className="flex flex-col gap-y-4 p-4">
            <Breadcrumb
              spacing="8px"
              separator={<ChevronRightIcon color="#d0d5dd" h={6} />}
            >
              <BreadcrumbItem>
                <BreadcrumbLink href="#">
                  <RiHome6Line color="#667085" size="20px" />
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink
                  sx={{
                    color: "#667085",
                    fontWeight: "medium",
                    fontSize: "16px",
                  }}
                  href="#"
                >
                  Christopher Lee
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink
                  sx={{
                    color: "#667085",
                    fontWeight: "medium",
                    fontSize: "16px",
                  }}
                  href="#"
                  onClick={() => setCurrent(null)}
                >
                  About
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink
                  sx={{
                    color: "#0B0A0F",
                    fontWeight: "medium",
                    fontSize: "16px",
                    bgColor: "#F9FAFB",
                    borderRadius: "5px",
                    py: 1,
                    px: 2,
                  }}
                  href="#"
                >
                  Contact
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <CarouselView imgList={serviceData.imgUrl} className="rounded-md" />
            <span className="text-[24px] font-bold">
              {serviceData.serviceName}
            </span>

            <div className="flex items-stretch gap-x-4">
              <div className="flex items-center gap-x-2">
                <BsStarFill color="#fbb830" />
                <span className="font-bold">{serviceData.rating}</span>
              </div>
              <div className="w-px bg-[#e0e0e0]" />
              <div className="flex items-center gap-x-2 text-[14px] text-[#84818A]">
                <TbMessageDots color="#84818a" size={20} />
                {serviceData.reviews} Reviews
              </div>
              <div className="w-px bg-[#e0e0e0]" />
              <div>
                <AvatarGroup size="xs" max={3}>
                  {serviceData.userGroup.map((user, index) => {
                    return <Avatar src={user} name="User Avatar" key={index} />;
                  })}
                </AvatarGroup>
              </div>
            </div>
            <Divider borderColor={"#e2e2e2"} />
            <span className="text-[18px]  font-bold">Overview</span>

            <Collapse startingHeight={70} in={show} className="text-[#84818A]">
              Vestibulum tempus imperdiet sem ac porttitor. Vivamus pulvinar
              commodo orci, suscipit porttitor velit elementum non. Fusce nec
              pellentesque erat, id lobortis nunc. Donec dui leo, ultrices quis
              turpis nec, sollicitudin sodales tortor. Aenean dapibus magna
              quam, id tincidunt quam placerat consequat. Nulla eu laoreet ex.
              Vestibulum nec vulputate turpis, id euismod orci. Phasellus
              consectetur tortor est. Donec lectus ex, rhoncus ac consequat at,
              viverra sit amet sem. Aliquam sed vestibulum nibh. Phasellus ut
              lorem pharetra, placerat urna id, tincidunt quam. Praesent non ex
              congue, tristique risus quis, blandit purus. Sed tristique sapien
              ut vehicula pretium. Donec purus metus, vulputate sit amet
              ullamcorper vel, aliquet ac lectus. Vestibulum tempus imperdiet
              sem ac porttitor. Vivamus pulvinar commodo orci, suscipit
              porttitor velit elementum non. Fusce nec pellentesque erat, id
              lobortis nunc. Donec dui leo, ultrices quis turpis nec,
              sollicitudin sodales tortor. Aenean dapibus magna quam, id
              tincidunt quam placerat consequat. Nulla eu laoreet ex. Vestibulum
              nec vulputate turpis, id euismod orci. Phasellus consectetur
              tortor est. Donec lectus ex, rhoncus ac consequat at, viverra sit
              amet sem. Aliquam sed vestibulum nibh. Phasellus ut lorem
              pharetra, placerat urna id, tincidunt quam. Praesent non ex
              congue, tristique risus quis, blandit purus. Sed tristique sapien
              ut vehicula pretium. Donec purus metus, vulputate sit amet
              ullamcorper vel, aliquet ac lectus.lorem pharetra, placerat urna
              id, tincidunt quam. Praesent non ex congue, tristique risus quis,
              blandit purus. Sed tristique sapien ut vehicula pretium. Donec
              purus metus, vulputate sit amet ullamcorper vel, aliquet ac
              lectus. Vestibulum tempus imperdiet sem ac porttitor. Vivamus
              pulvinar commodo orci, suscipit porttitor velit elementum non.
              Fusce nec pellentesque erat, id lobortis nunc. Donec dui leo,
              ultrices quis turpis nec, sollicitudin sodales tortor. Aenean
              dapibus magna quam, id tincidunt quam placerat consequat. Nulla eu
              laoreet ex. Vestibulum nec vulputate turpis, id euismod orci.
              Phasellus consectetur tortor est. Donec lectus ex, rhoncus ac
              consequat at, viverra sit amet sem. Aliquam sed vestibulum nibh.
              Phasellus ut lorem pharetra, placerat urna id, tincidunt quam.
              Praesent non ex congue, tristique risus quis, blandit purus. Sed
              tristique sapien ut vehicula pretium. Donec purus metus, vulputate
              sit amet ullamcorper vel, aliquet ac lectus.
            </Collapse>
            <span
              className="cursor-pointer text-[18px] font-bold text-[#08657e] underline underline-offset-4"
              onClick={() => setShow(!show)}
            >
              Show {show ? "Less" : "More"}
            </span>
            <span className="text-[18px] font-bold">Reviews</span>
            {freelancerProfileData.personalInfo.reviews.map((item, index) => (
              <ReviewItem data={item} key={index} />
            ))}
          </div>
        </div>
        <div className="col-span-4">
          <div className="flex flex-col gap-y-4">
            <UserInfo />
            <Price />
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";

import {
  Box,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import ServiceCard from "../../cards/ServiceCard/ServiceCard";
import Employment from "../Overview/Employment";
import ServiceDetail from "./ServiceDetail/ServiceDetail";
import UserInfo from "./UserInfo";
import Pagination from "../../base/Pagination";
import { AddIcon } from "@chakra-ui/icons";
import { BsInfoCircle } from "react-icons/bs";
import { PriceInput } from "../../inputs";
import TaskDetail from "../../freelancerSetting/ServiceDetails/TaskDetail";

const services = [
  {
    id: 0,
    imgUrl: ["/img1.png", "/img1.png", "/img1.png", "/img1.png"],
    serviceName: "LinkedIn Marketing A-Z",
    rating: 4.9,
    reviews: 203,
    userGroup: ["/avatar1.png", "/avatar1.png", "/avatar1.png", "/avatar1.png"],
    monthlyRate: 200,
  },
  {
    id: 1,
    imgUrl: ["/img2.png", "/img2.png", "/img2.png", "/img2.png", "/img2.png"],
    serviceName: "Design Website, Dashboard, Web app and other Web..",
    rating: 5,
    reviews: 54,
    userGroup: ["/avatar1.png", "/avatar1.png", "/avatar1.png", "/avatar1.png"],
    monthlyRate: 500,
  },
  {
    id: 2,
    imgUrl: ["/img3.png", "/img3.png", "/img3.png"],
    serviceName: "Design Website, Dashboard, Web app and other Web..",
    rating: 5,
    reviews: 54,
    userGroup: ["/avatar1.png", "/avatar1.png", "/avatar1.png", "/avatar1.png"],
    monthlyRate: 500,
  },
  {
    id: 3,
    imgUrl: ["/img4.png", "/img4.png"],
    serviceName: "Design Website, Dashboard, Web app and other Web..",
    rating: 5,
    reviews: 54,
    userGroup: ["/avatar1.png", "/avatar1.png", "/avatar1.png", "/avatar1.png"],
    monthlyRate: 500,
  },
  {
    id: 4,
    imgUrl: ["/img3.png", "/img3.png", "/img3.png"],
    serviceName: "Network infrastructure design and implementation",
    rating: 5,
    reviews: 54,
    userGroup: ["/avatar1.png", "/avatar1.png", "/avatar1.png", "/avatar1.png"],
    monthlyRate: 500,
  },
  {
    id: 5,
    imgUrl: ["/img4.png", "/img4.png"],
    serviceName: "IT consultation and project management",
    rating: 5,
    reviews: 54,
    userGroup: ["/avatar1.png", "/avatar1.png", "/avatar1.png", "/avatar1.png"],
    monthlyRate: 500,
  },
  {
    id: 6,
    imgUrl: ["/img3.png", "/img3.png", "/img3.png"],
    serviceName: "Software development and application management",
    rating: 5,
    reviews: 54,
    userGroup: ["/avatar1.png", "/avatar1.png", "/avatar1.png", "/avatar1.png"],
    monthlyRate: 500,
  },
  {
    id: 7,
    imgUrl: ["/img4.png", "/img4.png"],
    serviceName: "Disaster recovery and business continuity planning",
    rating: 5,
    reviews: 54,
    userGroup: ["/avatar1.png", "/avatar1.png", "/avatar1.png", "/avatar1.png"],
    monthlyRate: 500,
  },
  {
    id: 8,
    imgUrl: ["/img3.png", "/img3.png", "/img3.png"],
    serviceName: "IT asset management and inventory tracking",
    rating: 5,
    reviews: 54,
    userGroup: ["/avatar1.png", "/avatar1.png", "/avatar1.png", "/avatar1.png"],
    monthlyRate: 500,
  },
  {
    id: 9,
    imgUrl: ["/img4.png", "/img4.png"],
    serviceName: "Email hosting and management services",
    rating: 5,
    reviews: 54,
    userGroup: ["/avatar1.png", "/avatar1.png", "/avatar1.png", "/avatar1.png"],
    monthlyRate: 500,
  },
  {
    id: 10,
    imgUrl: ["/img3.png", "/img3.png", "/img3.png"],
    serviceName: "IT consultation and project management",
    rating: 5,
    reviews: 54,
    userGroup: ["/avatar1.png", "/avatar1.png", "/avatar1.png", "/avatar1.png"],
    monthlyRate: 500,
  },
  {
    id: 11,
    imgUrl: ["/img4.png", "/img4.png"],
    serviceName: "Helpdesk and technical support services",
    rating: 5,
    reviews: 54,
    userGroup: ["/avatar1.png", "/avatar1.png", "/avatar1.png", "/avatar1.png"],
    monthlyRate: 500,
  },
  {
    id: 12,
    imgUrl: ["/img3.png", "/img3.png", "/img3.png"],
    serviceName: "Cloud computing and hosting services",
    rating: 5,
    reviews: 54,
    userGroup: ["/avatar1.png", "/avatar1.png", "/avatar1.png", "/avatar1.png"],
    monthlyRate: 500,
  },
  {
    id: 13,
    imgUrl: ["/img4.png", "/img4.png"],
    serviceName: "Virtual desktops and remote access",
    rating: 5,
    reviews: 54,
    userGroup: ["/avatar1.png", "/avatar1.png", "/avatar1.png", "/avatar1.png"],
    monthlyRate: 500,
  },
];
//temp data
function displayPageData(data, activePage, itemsCountPerPage) {
  const startIndex = (activePage - 1) * itemsCountPerPage;
  const endIndex = startIndex + itemsCountPerPage;
  const pageData = data.slice(startIndex, endIndex);
  return pageData;
}
const Services = () => {
  const [current, setCurrent] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const {
    isOpen: isModalOpen,
    onClose: onModalClose,
    onOpen: onModalOpen,
  } = useDisclosure();

  const contentSwitch = (id: number) => {
    if (id !== null) {
      return (
        <ServiceDetail
          serviceData={services.find((item) => item.id === id)}
          setCurrent={setCurrent}
        />
      );
    } else {
      return (
        <>
          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
            <div className="col-span-2 ">
              <div className=" rounded-md bg-white p-4 shadow-md">
                <div className="flex items-start justify-between">
                  <Text
                    fontSize="20px"
                    color="#2a2044"
                    className="font-semibold"
                  >
                    Services
                  </Text>
                  <Button
                    size="sm"
                    leftIcon={<AddIcon />}
                    colorScheme="main"
                    onClick={onModalOpen}
                  >
                    Add New Services
                  </Button>
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-1 md:grid-cols-2">
                  {displayPageData(services, currentPage, itemsPerPage).map(
                    (service, index) => {
                      return (
                        <ServiceCard
                          imgUrl={service.imgUrl}
                          serviceName={service.serviceName}
                          rating={service.rating}
                          reviews={service.reviews}
                          userGroup={service.userGroup}
                          monthlyRate={service.monthlyRate}
                          setCurrent={setCurrent}
                          key={index}
                          id={service.id}
                        />
                      );
                    }
                  )}
                </div>
                <Pagination
                  className="mt-4"
                  activePage={currentPage || 1}
                  itemsCountPerPage={itemsPerPage}
                  totalItemsCount={services.length}
                  pageRangeDisplayed={5}
                  onChange={(e) => {
                    setCurrentPage(e);
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <UserInfo />
              <Employment />
            </div>
          </div>
          <Modal isOpen={isModalOpen} onClose={onModalClose} size="lg">
            <ModalOverlay />
            <ModalContent className="font-Plus_Jakarta_Sans">
              <ModalHeader>Add New Service</ModalHeader>
              <ModalCloseButton />

              <ModalBody>
                <div className="pb-8">
                  <div className="grid grid-cols-2 gap-4">
                    <Box className="col-span-2 flex flex-col gap-y-1">
                      <Text className="flex items-center gap-x-3 font-medium">
                        Service Title
                        <BsInfoCircle color="gray" />
                      </Text>
                      <Input
                        placeholder="Service Title"
                        size="md"
                        // value={serviceTitle}
                        // onChange={(e) => setServiceTitle(e.target.value)}
                      />
                    </Box>
                    <Box className="flex flex-col gap-y-1">
                      <Text className="flex items-center gap-x-3 font-medium">
                        Service Price
                        <BsInfoCircle color="gray" />
                      </Text>
                      {/* <PriceInput /> */}
                    </Box>
                    <Box className="flex flex-col gap-y-1">
                      <Text className="flex items-center gap-x-3 font-medium">
                        Frequency
                        <BsInfoCircle color="gray" />
                      </Text>
                      <Select
                        placeholder="Select Proficiency"
                        size="md"
                      ></Select>
                    </Box>
                  </div>
                </div>
                <TaskDetail />
              </ModalBody>
              <ModalFooter className="gap-4">
                <Button variant={"outline"}>Cancel</Button>
                <Button colorScheme="main">Create</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      );
    }
  };

  return contentSwitch(current);
};

export default Services;

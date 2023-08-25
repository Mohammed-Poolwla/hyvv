import { useState } from "react";

import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";

import { BsPlus } from "react-icons/bs";

import { useAppStore } from "../../../../lib/store";

import {
  CityByCountryInput,
  CountryInput,
} from "../../../base/Input/RegionSelect";

import ExperienceItem from "./ExperienceItem";

import AddExperienceIcon from "../../../icons/AddExperienceIcon";
import { DatePicker } from "../../../base/Input/DatePicker";

const Experiences = () => {
  const { addWorkExperience, freelancerProfileData } = useAppStore();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [title, setTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [country, setCountry] = useState("US");
  const [currentRole, setCurrentRole] = useState(false);
  const [startDate, setStartDate] = useState(new Date("2020-01-01"));
  const [endDate, setEndDate] = useState(new Date("2023-01-01"));
  const [jobDescription, setJobDescription] = useState("");

  const addWorkExperienceData = () => {
    addWorkExperience(
      title,
      companyName,
      location,
      country,
      currentRole,
      new Date(startDate),
      new Date(endDate),
      jobDescription
    );

    onClose();
  };

  return (
    <div>
      <div className="flex flex-col gap-y-4">
        {freelancerProfileData.workExperience.employmentHistory.map(
          (experience, index) => {
            return (
              <ExperienceItem
                companyName={experience.companyName}
                position={experience.position}
                startDate={experience.startDate}
                endDate={experience.endDate}
                currentRole={experience.currentRole}
                key={index}
              />
            );
          }
        )}
      </div>
      <Button
        variant="link"
        colorScheme="main"
        size="md"
        leftIcon={<BsPlus />}
        className="mb-1 mt-2"
        onClick={onOpen}
      >
        <Text fontSize="16px">Add More</Text>
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent className="font-Plus_Jakarta_Sans">
          <ModalHeader className="flex rounded-md bg-hyvv-main-light">
            <AddExperienceIcon />
            <div className="mb-auto mt-auto">
              <Text
                fontSize="24px"
                className="font-Manrope font-semibold text-hyvv-title-1"
              >
                Add Work Experience
              </Text>
              <Text fontSize="14px" className="text-hyvv-description">
                Help us understand your skills, experience, and the type of work
                you&apos;re interested in
              </Text>
            </div>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl className="mt-4" isRequired>
              <FormLabel className="text-[14px] text-hyvv-title-1">
                Title
              </FormLabel>
              <Input value={title} onChange={(e) => setTitle(e.target.value)} />
            </FormControl>
            <FormControl className="mt-4" isRequired>
              <FormLabel className="text-[14px] text-hyvv-title-1">
                Company Name
              </FormLabel>
              <Input
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </FormControl>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <FormControl isRequired>
                <FormLabel className="text-[14px] text-hyvv-title-1">
                  Location
                </FormLabel>
                <CityByCountryInput
                  countryId={country}
                  city={location}
                  setCity={setLocation}
                />
              </FormControl>
              <FormControl>
                <FormLabel className="text-[14px] text-hyvv-title-1">
                  Conutry
                </FormLabel>
                <CountryInput countryId={country} setCountryId={setCountry} />
              </FormControl>
            </div>
            <Checkbox
              className="mt-4"
              colorScheme="main"
              onChange={(e) => setCurrentRole(e.target.checked)}
            >
              <Text fontSize="14px" className="text-hyvv-title-1">
                I am currently working in this role
              </Text>
            </Checkbox>{" "}
            <div className="mt-4 grid grid-cols-2 gap-4">
              <FormControl isRequired>
                <FormLabel className="text-[14px] text-hyvv-title-1">
                  Start Date
                </FormLabel>
                <DatePicker date={startDate} onChange={setStartDate} />
              </FormControl>
              <FormControl>
                <FormLabel className="text-[14px] text-hyvv-title-1">
                  End Date
                </FormLabel>
                <DatePicker
                  date={endDate}
                  onChange={setEndDate}
                  disabled={currentRole}
                />
              </FormControl>
            </div>
            <FormControl className="mt-4">
              <FormLabel className="text-[14px] text-hyvv-title-1">
                Job Description
              </FormLabel>
              <Textarea
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter className="gap-2">
            <Button variant="outline" onClick={onClose}>
              <Text fontSize="16px" className="font-semibold">
                Cancel
              </Text>
            </Button>
            <Button colorScheme="main" onClick={addWorkExperienceData}>
              <Text fontSize="16px" className="font-semibold">
                Save
              </Text>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Experiences;

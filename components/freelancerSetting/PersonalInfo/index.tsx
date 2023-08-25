import { Box, Button, Checkbox, Input, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

import { useAppStore } from "../../../lib/store";

import { FaUser } from "react-icons/fa";
import { PhoneNumberInput, QuillEditor } from "../../inputs";
import { DatePicker } from "../../base/Input/DatePicker";
import {
  CityByCountryInput,
  CountryInput,
} from "../../base/Input/RegionSelect";

const PersonalInfo: React.FC<{}> = () => {
  const {
    setProfilePicture,
    freelancerProfileData,
    removeProfilePicture,
    setFirstName,
    setLastName,
    setBirthday,
    setSummary,
    setCountry,
    setCurrentCity,
  } = useAppStore();

  const handleDateChange = (e: any) => {
    setBirthday(e);
  };

  const handleImageUpload = (e: any) => {
    setProfilePicture(URL.createObjectURL(e.target.files[0]));
  };

  const handleImageRemove = () => {
    removeProfilePicture();
  };

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleSummaryChange = (summary: string) => {
    setSummary(summary);
  };

  return (
    <>
      <div className="flex gap-4 ">
        <div className="flex h-[135px] min-h-[135px] w-[135px] min-w-[135px] rounded-xl border-2 border-dashed">
          {freelancerProfileData.personalInfo.profilePicture ? (
            <Image
              src={freelancerProfileData.personalInfo.profilePicture}
              width="135"
              height="100"
              alt="Profile Picture"
              className="rounded-xl"
            />
          ) : (
            <FaUser className="m-auto text-[60px] text-gray-400" />
          )}
        </div>
        <Box className="flex flex-col gap-y-2 self-center text-2xl">
          <Text className="text-xl font-semibold">Profile Picture</Text>
          <Text className="text-base text-gray-500">
            We recommend a professional image of at least 500x500px
          </Text>
          <Stack spacing={4} direction="row">
            <Button
              bg={"#08657E"}
              width={"120px"}
              colorScheme="teal"
              size="md"
              as="label"
              className="cursor-pointer"
            >
              <input
                hidden
                className="w-full"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
              Upload
            </Button>
            <Button
              color={"red"}
              width={"120px"}
              size="md"
              colorScheme="teal"
              variant="outline"
              onClick={handleImageRemove}
            >
              Remove
            </Button>
          </Stack>
        </Box>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Box className="flex flex-col gap-y-1">
          <Text className="font-medium">First Name</Text>
          <Input
            placeholder="First Name"
            size="md"
            value={freelancerProfileData.personalInfo.firstName}
            onChange={handleFirstName}
          />
        </Box>
        <Box className="flex flex-col gap-y-1">
          <Text className="font-medium">Last Name</Text>
          <Input
            placeholder="Last Name"
            size="md"
            value={freelancerProfileData.personalInfo.lastName}
            onChange={handleLastName}
          />
        </Box>
        <Box className="flex flex-col gap-y-1">
          <Text className="font-medium">Country of Residence</Text>
          <CountryInput
            countryId={freelancerProfileData.personalInfo.country}
            setCountryId={setCountry}
          />
        </Box>
        <Box className="flex flex-col gap-y-1">
          <Text className="font-medium">Current City</Text>
          <CityByCountryInput
            countryId={freelancerProfileData.personalInfo.country}
            city={freelancerProfileData.personalInfo.currentCity}
            setCity={setCurrentCity}
          />
        </Box>
        <Box className="flex flex-col gap-y-1">
          <Text className="font-medium">Contact Number*</Text>
          <PhoneNumberInput
            countryId={freelancerProfileData.personalInfo.country}
          />
        </Box>
        <Box className="flex flex-col gap-y-1">
          <Text className="font-medium">Date of Birth</Text>
          <DatePicker
            date={new Date(freelancerProfileData.personalInfo.birthday)}
            onChange={handleDateChange}
          />
        </Box>
      </div>
      <div className="flex flex-col">
        <Text className="text-xl font-semibold">
          Now write a bio to tell the world about yourself.
        </Text>
        <Text className="text-base text-gray-500">
          Allow people to get know you quickly. What do you excelat? Inform them
          succinctly, using paragrahps or bullet points. You can always go back
          and edit later:just make sure you proofread first!
        </Text>
      </div>
      <div className="h-48">
        <QuillEditor
          value={freelancerProfileData.personalInfo.summary}
          onChange={handleSummaryChange}
        />
      </div>
      <div className="mt-10 flex gap-x-4">
        <Checkbox colorScheme="" size="lg" />
        <Text className="text-base text-gray-500">
          The information I provided are valid & I&apos;m responsible for this.
        </Text>
      </div>{" "}
    </>
  );
};

export default PersonalInfo;

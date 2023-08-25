import { useAppStore } from "../../../lib/store";

import { Box, Input, Select, Text } from "@chakra-ui/react";
import { FiUpload } from "react-icons/fi";
import FileUpload from "../../base/FileUpload";

const Field = [
  "Computer Science",
  "Computer Application",
  "Computer Engineering",
];

const University = [
  "University of Warsaw",
  "University of Ottawa",
  "Miami University",
];

const Certification: React.FC<{}> = () => {
  const {
    freelancerProfileData,
    setEducationalInstitute,
    setStudyField,
    setStudyFrom,
    setStudyTo,
  } = useAppStore();

  const handleEducationalInstitute = (e) => {
    setEducationalInstitute(e.target.value);
  };

  const handleStudyFieldChange = (e) => {
    setStudyField(e.target.value);
  };

  const handleStudyFrom = (e) => {
    setStudyFrom(e.target.value);
  };

  const handleStudyTo = (e) => {
    setStudyTo(e.target.value);
  };

  return (
    <div className="flex flex-col gap-y-5">
      <div className="grid grid-cols-2 gap-4">
        <Box className="flex flex-col gap-y-1">
          <Text className="font-medium">Select Educational Institute</Text>
          <Select
            placeholder="Select University"
            size="md"
            defaultValue={
              freelancerProfileData.personalInfo.educationalInstitute
            }
            onChange={handleEducationalInstitute}
          >
            {University.sort((a, b) => a.localeCompare(b)).map(
              (item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              )
            )}
          </Select>
        </Box>
        <Box className="flex flex-col gap-y-1">
          <Text className="font-medium">Field of Study</Text>
          <Select
            placeholder="Select Subject"
            size="md"
            defaultValue={freelancerProfileData.personalInfo.studyField}
            onChange={handleStudyFieldChange}
          >
            {Field.sort((a, b) => a.localeCompare(b)).map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </Select>
        </Box>
        <Box className="flex flex-col gap-y-1">
          <Text className="font-medium">From</Text>
          <Input
            placeholder="Select Year"
            size="md"
            type="date"
            defaultValue={freelancerProfileData.personalInfo.from.toLocaleString()}
            onChange={handleStudyFrom}
          />
        </Box>
        <Box className="flex flex-col gap-y-1">
          <Text className="font-medium">To or expected graducation year</Text>
          <Input
            placeholder="Select Year"
            size="md"
            type="date"
            defaultValue={freelancerProfileData.personalInfo.to.toLocaleString()}
            onChange={handleStudyTo}
          />
        </Box>
      </div>

      <div>
        <Box className="flex flex-col gap-y-1">
          <Text className="font-medium">Upload Certification</Text>
          <FileUpload
            accept={["jpg", "png", "pdf"]}
            multiple={true}
            maxSize={2097152}
          />
        </Box>
      </div>
    </div>
  );
};

export default Certification;

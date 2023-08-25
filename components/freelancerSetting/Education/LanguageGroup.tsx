import { Button, Select, Text } from "@chakra-ui/react";
import { BsPlus } from "react-icons/bs";

import { useAppStore } from "../../../lib/store";

interface ILanguage {
  language: string;
  proficiency: string;
}

const proficiency = [
  "Basic",
  "Conversational",
  "Fluent",
  "Native or Bilingual",
];

const language = [
  "Albanian",
  "Arabic",
  "Bengali",
  "Chinese",
  "Dutch",
  "English",
  "French",
  "German",
  "Greek",
  "Guarani",
  "Hindi",
  "Italian",
  "Korean",
  "Malay",
  "Persian",
  "Portuguese",
  "Romanian",
  "Russian",
  "Serbo-Croatian",
  "Spanish",
  "Swahili",
  "Swedish",
  "Tamil",
  "Turkish",
];

const LanguageGroup: React.FC<{}> = () => {
  const {
    freelancerProfileData,
    addNewLanguage,
    changeLanguageItem,
    changeProficiencyItem,
  } = useAppStore();

  const handleAddLang = () => {
    addNewLanguage("A", "B");
  };

  return (
    <div className="flex flex-col gap-y-3">
      <div className="flex flex-col pb-3">
        <Text className="text-xl font-semibold">Language proficiency</Text>
        <Text className="text-base text-gray-500">
          Because we are global, clients frequently require about the languages
          you speak. English is required, but do you speak any other languages?
        </Text>
      </div>
      <div className="grid grid-cols-2 gap-4 font-medium text-gray-600">
        <Text>LANGUAGE</Text>
        <Text>PROFICIENY</Text>
      </div>
      {freelancerProfileData.personalInfo.languageProficiency.map(
        (item, index) => (
          <div className="grid grid-cols-2 gap-4" key={index}>
            <Select
              placeholder="Select Language"
              size="md"
              defaultValue={item.language}
              onChange={(e) => changeLanguageItem(e.target.value, index)}
            >
              {language.map((lang, j) => (
                <option key={`${index}-l-${j}`} value={lang}>
                  {lang}
                </option>
              ))}
            </Select>
            <Select
              placeholder="Select Proficiency"
              size="md"
              defaultValue={item.proficiency}
              onChange={(e) => changeProficiencyItem(e.target.value, index)}
            >
              {proficiency.map((pro, i) => (
                <option key={`${index}-p-${i}`} value={pro}>
                  {pro}
                </option>
              ))}
            </Select>
          </div>
        )
      )}

      <div>
        <Button
          variant="link"
          colorScheme="main"
          size="md"
          leftIcon={<BsPlus />}
          className="mb-1 mt-2"
          onClick={handleAddLang}
        >
          <Text fontSize="16px">Add More</Text>
        </Button>
      </div>
    </div>
  );
};

export default LanguageGroup;

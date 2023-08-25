import {
  Box,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

import MultiSelectMenu from "../../base/Select/MultiSelectMenu";

import { Dispatch, SetStateAction, useState } from "react";
import { FiFilter } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";

export interface ITemplateModal {
  isOpen: boolean;
  closeHandle: Dispatch<SetStateAction<boolean>>;
  addSection: Function;
}
const TemplatesData = [
  {
    id: "6de4d4ea-11e7-11ee-be56-0242ac120002",
    title: "Marketing Plan",
    author: "HYVV",
    fields: [
      { fieldName: "Target Release Date", fieldType: "date", required: true },
      { fieldName: "Target Audience", fieldType: "input", required: true },
      { fieldName: "Description", fieldType: "textarea", reuired: false },
    ],
  },
  {
    id: "bba5df63-6862-4bf8-8aff-b493a8c666e6",
    title: "Startup Costs",
    author: "HYVV",
    fields: [
      {
        title: "Incorporation",
        frequency: null,
        budget: { currency: "$", amount: null },
      },
      {
        title: "Market Research",
        frequency: null,
        budget: { currency: "$", amount: null },
      },
      {
        title: "Business Plan Development",
        frequency: null,
        budget: { currency: "$", amount: null },
      },
      {
        title: "Logo Design and Branding",
        frequency: null,
        budget: { currency: "$", amount: null },
      },
      {
        title: "Website & Hosting",
        frequency: null,
        budget: { currency: "$", amount: null },
      },
      {
        title: "Computer Hardware & Software",
        frequency: null,
        budget: { currency: "$", amount: null },
      },
      {
        title: "Communication Systems (Phones & Internet)",
        frequency: null,
        budget: { currency: "$", amount: null },
      },
      {
        title: "Product Development & Testing",
        frequency: null,
        budget: { currency: "$", amount: null },
      },
      {
        title: "Licensing and Permits",
        frequency: null,
        budget: { currency: "$", amount: null },
      },
      {
        title: "Content Creation",
        frequency: null,
        budget: { currency: "$", amount: null },
      },
      {
        title: "Legal & Accounting Software",
        frequency: null,
        budget: { currency: "$", amount: null },
      },
      {
        title: "Intellectual Property Protection",
        frequency: null,
        budget: { currency: "$", amount: null },
      },
      {
        title: "Banking & Payment Processing",
        frequency: null,
        budget: { currency: "$", amount: null },
      },
    ],
  },
  {
    id: "436ec5fe-cec8-4863-affd-0b918e074244",
    title: "MVP Plan",
    author: "HYVV",
    fields: [
      {
        fieldName: "Number of Employees",
        fieldType: "decimal",
        required: true,
      },
      { fieldName: "Cost per Employee", fieldType: "budget", required: true },
      { fieldName: "Development costs", fieldType: "budget", required: true },
      { fieldName: "Marketing costs", fieldType: "budget", required: true },
      { fieldName: "Other costs", fieldType: "budget", required: false },
    ],
  },
  {
    id: "436ec5fe-cec8-4863-affd-0b918e074244",
    title: "Market Analysis",
    author: "HYVV",
    fields: [
      {
        fieldName: "Number of Employees",
        fieldType: "decimal",
        required: true,
      },
      { fieldName: "Cost per Employee", fieldType: "budget", required: true },
      { fieldName: "Development costs", fieldType: "budget", required: true },
      { fieldName: "Marketing costs", fieldType: "budget", required: true },
      { fieldName: "Other costs", fieldType: "budget", required: false },
    ],
  },
  {
    id: "7131c9fa-2ce5-470d-a197-140b48be44e5",
    title: "Go-To-Market Plan",
    author: "HYVV",
    fields: [
      {
        fieldName: "Number of Employees",
        fieldType: "decimal",
        required: true,
      },
      { fieldName: "Cost per Employee", fieldType: "budget", required: true },
      { fieldName: "Development costs", fieldType: "budget", required: true },
      { fieldName: "Marketing costs", fieldType: "budget", required: true },
      { fieldName: "Other costs", fieldType: "budget", required: false },
    ],
  },
  {
    id: "50ff82d1-9770-43cd-94f3-01c7370ccb9a",
    title: "Competitors Analysis",
    author: "HYVV",
    fields: [
      {
        fieldName: "Number of Employees",
        fieldType: "decimal",
        required: true,
      },
      { fieldName: "Cost per Employee", fieldType: "budget", required: true },
      { fieldName: "Development costs", fieldType: "budget", required: true },
      { fieldName: "Marketing costs", fieldType: "budget", required: true },
      { fieldName: "Other costs", fieldType: "budget", required: false },
    ],
  },
  {
    id: "8247b5bd-bdbc-43d8-b122-32da6849cf3f",
    title: "Go-To-Market Plan",
    author: "HYVV",
    fields: [
      {
        fieldName: "Number of Employees",
        fieldType: "decimal",
        required: true,
      },
      { fieldName: "Cost per Employee", fieldType: "budget", required: true },
      { fieldName: "Development costs", fieldType: "budget", required: true },
      { fieldName: "Marketing costs", fieldType: "budget", required: true },
      { fieldName: "Other costs", fieldType: "budget", required: false },
    ],
  },
  {
    id: "19157edd-b9ed-403b-a32f-63f90e720ec4",
    title: "Competitors Analysis",
    author: "HYVV",
    fields: [
      {
        fieldName: "Number of Employees",
        fieldType: "decimal",
        required: true,
      },
      { fieldName: "Cost per Employee", fieldType: "budget", required: true },
      { fieldName: "Development costs", fieldType: "budget", required: true },
      { fieldName: "Marketing costs", fieldType: "budget", required: true },
      { fieldName: "Other costs", fieldType: "budget", required: false },
    ],
  },
];
const FilterData = ["AI Template", "Standard Template", "Exportable"];
const PriceData = ["Free", "$1-$10", "$10+"];
const TypeData = [
  "Branding",
  "Fundraising",
  "Finance",
  "Legal",
  "Marketing",
  "Operations",
  "Planning",
  "Product",
  "Sales",
  "Team",
];

const TemplateModal: React.FC<ITemplateModal> = ({
  isOpen,
  closeHandle,
  addSection,
}) => {
  const [selectedFilter, setSelectedFilter] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState([]);
  const [selectedType, setSelectedType] = useState([]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => closeHandle(null)}
      isCentered
      size={"xl"}
    >
      <ModalOverlay />
      <ModalContent maxW={"899px"} className="font-Plus_Jakarta_Sans">
        <ModalCloseButton />
        <ModalBody p={6} display={"flex"} flexDirection={"column"}>
          <Stack spacing="12px" flex={1} maxHeight={"86vh"}>
            <Text fontWeight="600" color="black" fontSize={"20px"} mt="15px">
              Templates
            </Text>
            <Text color="#84818A" fontSize={"13px"}>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have
            </Text>{" "}
            <InputGroup borderColor="#E3E3E3">
              <InputLeftElement pointerEvents="none">
                <IoSearchOutline />
              </InputLeftElement>
              <Input type="text" bg={"#F8F8F8"} placeholder="Search template" />
            </InputGroup>
            <HStack spacing="12px">
              <MultiSelectMenu
                title="Filters"
                icon={<FiFilter color="#858585" />}
                data={FilterData}
                setSelected={setSelectedFilter}
                selected={selectedFilter}
              />
              <MultiSelectMenu
                title="Price"
                data={PriceData}
                setSelected={setSelectedPrice}
                selected={selectedPrice}
              />
              <MultiSelectMenu
                title="Type"
                data={TypeData}
                setSelected={setSelectedType}
                selected={selectedType}
              />
            </HStack>
            <SimpleGrid columns={3} spacing={5} py={1} overflow="auto">
              {TemplatesData.map((item, i) => {
                return (
                  <Box
                    key={i}
                    className="flex cursor-pointer flex-col rounded-lg border border-[#BCBCBC] transition-all hover:shadow-md"
                    onClick={() => {
                      addSection("Company Overview", item.title, item.fields);
                      closeHandle(null);
                    }}
                  >
                    <Box className="h-[170px]" />
                    <Box p={3} className="flex flex-col gap-y-[10px] p-4">
                      <Text color="black">{item.title}</Text>
                      <Text fontSize="15px" color="4A495Ca0">
                        by {item.author}
                      </Text>
                    </Box>
                  </Box>
                );
              })}
            </SimpleGrid>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default TemplateModal;

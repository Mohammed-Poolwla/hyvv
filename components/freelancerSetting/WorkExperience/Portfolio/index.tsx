import {
  Button,
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
  Select,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";

import { BsPlus } from "react-icons/bs";

import { ProviderType } from "../../../../lib/slices/freelancerProfileSlice";
import { useAppStore } from "../../../../lib/store";

import LinkInput from "./LinkInput";

const Portfolio = () => {
  const { freelancerProfileData, addPortfolioItem } = useAppStore();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [provider, setProvider] = useState<ProviderType>("Dribbble");
  const [link, setLink] = useState("");

  const handleProviderChange = (e) => {
    if (e.target.value === "Dribbble") setProvider("Dribbble");
    else setProvider("LinkedIn");
  };

  const addPortfolio = () => {
    addPortfolioItem(provider, link);
    onClose();
  };

  return (
    <div>
      <Text fontSize="18px" className="font-semibold text-hyvv-title-1">
        Portfolio
      </Text>
      <Text
        fontSize="14px"
        className="mb-2 font-semibold text-hyvv-description"
      >
        Contrary to popular belief, Lorem Ipsum is not simply random text.
      </Text>
      {freelancerProfileData.workExperience.portfolio.map(
        (portfolioLink, index) => {
          return (
            <LinkInput
              provider={portfolioLink.provider}
              link={portfolioLink.link}
              index={index}
              key={index}
            />
          );
        }
      )}
      <Button
        variant="link"
        colorScheme="main"
        size="md"
        leftIcon={<BsPlus />}
        onClick={onOpen}
        className="mt-2"
      >
        <Text fontSize="16px">Add More</Text>
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Portfolio</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Provider</FormLabel>
              <Select
                placeholder="Select a provider"
                value={provider}
                onChange={handleProviderChange}
              >
                <option value="Dribbble">Dribbble</option>
                <option value="LinkedIn">LinkedIn</option>
              </Select>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Link</FormLabel>
              <Input value={link} onChange={(e) => setLink(e.target.value)} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="main" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button onClick={addPortfolio}>Add portfolio</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Portfolio;

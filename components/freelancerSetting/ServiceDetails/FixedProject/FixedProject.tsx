import { Button, Text } from "@chakra-ui/react";

import { ChevronRightIcon } from "@chakra-ui/icons";

import HyvvAddIcon from "../../../icons/HyvvAddIcon";

const FixedProject = () => {
  return (
    <div className="rounded-md border p-4">
      <Text fontSize="18px" className="font-bold text-hyvv-main">
        Fixed Project
      </Text>
      <Text fontSize="12px" className="mb-2 text-hyvv-description">
        Offer more flexible type of work by recommending what you&apos;ll
        provide
      </Text>
      <div className="flex items-center rounded-md border-2 border-dashed p-16">
        <div className="mx-auto justify-center text-center">
          <HyvvAddIcon className="ml-auto mr-auto" />
          <Text fontSize="18px" className="font-bold text-hyvv-title-1">
            Create Your First gig
          </Text>
          <Text fontSize="14px" className="text-hyvv-description">
            Contrary to popular belief, Lorem Ipsum is not simply random text
          </Text>
          <Button variant="link" rightIcon={<ChevronRightIcon />}>
            <Text fontSize="14px" className="text-hyvv-main">
              Create Now
            </Text>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FixedProject;

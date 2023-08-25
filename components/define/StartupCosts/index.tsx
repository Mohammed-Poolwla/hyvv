import { Button, IconButton, Input, useToast } from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";
import ShareIcon from "../../icons/ShareIcon";
import SelectMenu from "../../base/Select/SelectMenu";
import BudgetInput from "../../base/Input/BudgetInput";
import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { IoCloseCircle } from "react-icons/io5";
import { trpc } from "../../../utils/trpc";

const StartupCosts = ({ id, fields }) => {
  const [costsData, setCostsData] = useState(fields);
  const toast = useToast();
  const updateSectionDataMutation =
    trpc.groupSection.updateSectionData.useMutation();
  const removeCost = (index) => {
    const updatedCosts = [...costsData];
    if (index >= 0 && index < costsData.length) {
      updatedCosts.splice(index, 1);
      setCostsData(updatedCosts);
    }
  };
  const addCost = () => {
    const updatedCosts = [...costsData];
    updatedCosts.push({
      title: "",
      frequency: null,
      budget: { currency: "$", amount: null },
    });
    setCostsData(updatedCosts);
  };
  const updateCost = (index, key, value) => {
    setCostsData((prevCosts) => {
      const updatedCosts = [...prevCosts];
      updatedCosts[index] = { ...updatedCosts[index], [key]: value };
      return updatedCosts;
    });
  };
  const saveData = () => {
    updateSectionDataMutation.mutate(
      { id: id, sectionData: costsData },
      {
        onSuccess() {
          toast({
            description: "Successfully saved.",
            status: "success",
            duration: 3000,
            position: "top-right",
            isClosable: true,
          });
        },
        onError() {
          toast({
            description: "Unknown Issue is occurred.",
            status: "success",
            duration: 3000,
            position: "top-right",
            isClosable: true,
          });
        },
      }
    );
  };
  return (
    <div>
      <div className="flex justify-between">
        <span
          color="#2E2C34"
          className="font-Manrope text-[28px] font-semibold"
        >
          Startup Costs
        </span>
        <Button
          colorScheme="main"
          color="white"
          leftIcon={<ShareIcon />}
          rightIcon={<ChevronDownIcon />}
          onClick={() => saveData()}
        >
          Share
        </Button>
      </div>
      <div className="mt-4 flex flex-col gap-y-4 rounded-md bg-white p-6 shadow-md">
        {costsData.map((item, index) => (
          <div className="flex items-start" key={index}>
            <div className="grid flex-1 grid-cols-4 items-center gap-x-4">
              <Input
                className="col-span-2"
                value={item.title}
                placeholder="Cost Name"
                onChange={(e) => {
                  updateCost(index, "title", e.target.value);
                }}
              />
              <SelectMenu
                data={[
                  { label: "one time" },
                  { label: "weekly" },
                  { label: "monthly" },
                  { label: "yearly" },
                ]}
                placeholder="Frequency"
                selected={item.frequency}
                setSelected={(e) => {
                  updateCost(index, "frequency", e);
                }}
              />
              <BudgetInput
                placeholder="Costs"
                value={item.budget}
                setValue={(e) => {
                  updateCost(index, "budget", e);
                }}
              />
            </div>
            <IconButton
              aria-label="Search database"
              icon={<IoCloseCircle size={25} color="#aaa" />}
              colorScheme="black"
              variant={"ghost"}
              onClick={() => {
                removeCost(index);
              }}
            />
          </div>
        ))}
        <Button
          colorScheme="main"
          leftIcon={<BsPlusLg />}
          onClick={() => {
            addCost();
          }}
        >
          Add New Cost
        </Button>
      </div>
    </div>
  );
};

export default StartupCosts;

import React, { ReactNode } from "react";

import { Box, Text, useRadio, useRadioGroup, VStack } from "@chakra-ui/react";

import { useAppStore } from "../../../../../lib/store";

interface PaymentMethod {
  icon: ReactNode;
  title: string;
  description: string;
  isBestRate: boolean;
}

export interface IPaymentRadioGroup {
  paymentMethods: Array<PaymentMethod>;
}

const RadioCard = (props) => {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label" className="mt-4 w-full">
      <input {...input} />
      <Box
        {...checkbox}
        _checked={{
          bg: "main.100",
          borderColor: "main.500",
        }}
        className="flex cursor-pointer rounded-md border-2 p-4"
      >
        {props.children.icon}
        <div>
          <Text
            fontSize="16"
            className={
              props.children.title === props.paymentMethod
                ? radioTitleStyles.selected
                : radioTitleStyles.notSelected
            }
          >
            {props.children.title}
          </Text>
          <Text fontSize="14" className="text-hyvv-description">
            {props.children.description}
          </Text>
        </div>
      </Box>
    </Box>
  );
};

const PaymentRadioGroup: React.FC<IPaymentRadioGroup> = ({
  paymentMethods,
}) => {
  const { freelancerProfileData, setPaymentMethod } = useAppStore();

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "paymentMethod",
    defaultValue: freelancerProfileData.availability.paymentType,
    onChange: (method) => setPaymentMethod(method),
  });

  const group = getRootProps();

  return (
    <VStack {...group}>
      {paymentMethods.map((paymentItem, index) => {
        const value = paymentItem.title;
        const radio = getRadioProps({ value });
        return (
          <RadioCard
            key={index}
            {...radio}
            paymentMethod={freelancerProfileData.availability.paymentType}
          >
            {paymentItem}
          </RadioCard>
        );
      })}
    </VStack>
  );
};

const radioTitleStyles = {
  notSelected: "font-semibold text-hyvv-title-2",
  selected: "font-semibold text-hyvv-main",
};

export default PaymentRadioGroup;

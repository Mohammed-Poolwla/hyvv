import React from "react";

import { Radio, RadioGroup, Text } from "@chakra-ui/react";
import CalendarIcon from "../icons/CalendarIcon";

export interface IType {
  title: string;
  description: string;
  paymentType?: string;
  amount?: number;
  nextPaymentDate?: string;
  visibleFooter: boolean;
}

export interface ITypeRadioGroup {
  types: Array<IType>;
  type: string;
  setType: Function;
}

const TypeRadioGroup: React.FC<ITypeRadioGroup> = ({
  types,
  type,
  setType,
}) => {
  return (
    <RadioGroup defaultValue={type} onChange={(type) => setType(type)}>
      {types.map((item, index) => (
        <div
          className={
            item.title === type
              ? groupItemStyles.selected
              : groupItemStyles.notSelected
          }
          key={index}
        >
          <div className="flow-root p-4">
            <div className="float-left">
              <div className="block">
                <Radio value={item.title} size="lg" colorScheme="main">
                  <Text
                    fontSize="16px"
                    className={
                      item.title === type
                        ? radioTitleStyles.selected
                        : radioTitleStyles.notSelected
                    }
                  >
                    {item.title}
                  </Text>
                </Radio>
              </div>
              <div className="block pl-7">
                <Text fontSize="14px" className="text-hyvv-description">
                  {item.description}
                </Text>
              </div>
            </div>
            <div className="float-right">
              <Text
                fontSize="13px"
                className="font-medium text-hyvv-description"
              >
                {item.paymentType}
              </Text>
              <Text fontSize="20px" className="text-right font-bold">
                {item.amount !== undefined ? "$" : ""} {item.amount}
              </Text>
            </div>
          </div>
          {item.visibleFooter === true ? (
            <div
              className={
                item.title === type
                  ? footerStyles.selected
                  : footerStyles.notSelected
              }
            >
              <CalendarIcon />
              <Text
                fontSize="12px"
                className="font-Manrope font-medium text-hyvv-description"
              >
                Next payment date:
              </Text>
              <Text
                fontSize="12px"
                className="font-Manrope font-bold text-hyvv-title-2"
              >
                {item.nextPaymentDate}
              </Text>
            </div>
          ) : (
            <></>
          )}
        </div>
      ))}
    </RadioGroup>
  );
};

const radioTitleStyles = {
  notSelected: "font-semibold text-hyvv-title-2",
  selected: "font-semibold text-hyvv-main",
};

const groupItemStyles = {
  notSelected: "mt-4 rounded-md border-2 hover:border-hyvv-main",
  selected: "mt-4 rounded-md border-2 border-hyvv-main bg-hyvv-main-light",
};

const footerStyles = {
  notSelected: "flex gap-2 rounded-b-[4px] bg-gray-100 p-2",
  selected: "flex gap-2 rounded-b-[4px] bg-[#BBD3D9] p-2",
};

export default TypeRadioGroup;

import { Box, useRadio, useRadioGroup, VStack } from "@chakra-ui/react";

import { useAppStore } from "../../../../lib/store";

export interface IRadioCard {
  options: Array<string>;
  radioName: string;
  defaultValue?: string;
}

const RadioItem = (props) => {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box
      as="label"
      className="w-full text-[17px] text-[#808494] transition-all"
    >
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        borderColor="#dedede"
        _checked={{
          bg: "#08657E",
          color: "white",
          borderColor: "#08657E",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        className="p-6"
      >
        <p>{props.children}</p>
      </Box>
    </Box>
  );
};

const RadioCard: React.FC<IRadioCard> = ({
  options,
  radioName,
  defaultValue,
}) => {
  const { setProblemStatement } = useAppStore();

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: radioName,
    defaultValue: defaultValue,
    onChange: (value) => setProblemStatement(value),
  });

  const group = getRootProps();

  return (
    <VStack {...group}>
      {options.map((value) => {
        const radio = getRadioProps({ value });

        return (
          <RadioItem key={value} {...radio}>
            {value}
          </RadioItem>
        );
      })}
    </VStack>
  );
};

export default RadioCard;

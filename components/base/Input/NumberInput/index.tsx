import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";

export interface INumberInput {
  value?: number;
  onChange?: (valueAsString: string, valueAsNumber: number) => void;
  placeholder?: string;
  hideStepper?: boolean;
  isBudget?: boolean;
  isDecimal?: boolean;
  isInvalid?: boolean;
}
const NumberInputBox: React.FC<INumberInput> = ({
  value,
  onChange,
  placeholder,
  hideStepper,
  isBudget,
  isDecimal,
  isInvalid,
}) => {
  return (
    <NumberInput
      sx={{ width: "100%" }}
      precision={isBudget ? 2 : isDecimal ? 0 : null}
      isInvalid={isInvalid}
      defaultValue={value}
      onChange={onChange}
    >
      <NumberInputField
        sx={{ borderLeftRadius: isBudget ? "0px" : "" }}
        placeholder={placeholder || ""}
      />
      {!hideStepper ? (
        <NumberInputStepper>
          <NumberIncrementStepper sx={{ border: "none", color: "#57606a" }} />
          <NumberDecrementStepper sx={{ border: "none", color: "#57606a" }} />
        </NumberInputStepper>
      ) : (
        ""
      )}
    </NumberInput>
  );
};

export default NumberInputBox;

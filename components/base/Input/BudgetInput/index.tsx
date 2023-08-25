import { InputGroup, InputLeftAddon } from "@chakra-ui/react";
import SelectMenu from "../../Select/SelectMenu";
import NumberInput from "../../Input/NumberInput";
import { Dispatch, SetStateAction } from "react";

export interface Budget {
  currency: string;
  amount: number;
}
export interface IBudgetInput {
  value?: Budget;
  setValue?: Dispatch<SetStateAction<Budget>>;
  placeholder?: string;
  hideStepper?: boolean;
  isInvalid?: boolean;
  [x: string]: any;
}
const BudgetInput: React.FC<IBudgetInput> = ({
  value,
  setValue,
  placeholder,
  hideStepper,
  isInvalid,
  ...restProps
}) => {
  return (
    <InputGroup sx={{ isolation: "auto" }} {...restProps}>
      <InputLeftAddon bgColor="white" sx={{ p: 0 }}>
        <SelectMenu
          data={[{ label: "$" }, { label: "€" }, { label: "£" }]}
          variant="ghost"
          selected={value?.currency || "$"}
          setSelected={(e) => {
            if (setValue) setValue({ ...value, currency: e.toString() });
          }}
          sx={{ color: "#808494" }}
        />
      </InputLeftAddon>
      <NumberInput
        value={value?.amount ?? 0}
        onChange={(e) => {
          if (setValue) {
            setValue({
              ...value,
              amount: parseFloat(e),
            });
          }
        }}
        placeholder={placeholder || ""}
        hideStepper={hideStepper}
        isBudget
        isInvalid={isInvalid}
      />
    </InputGroup>
  );
};

export default BudgetInput;

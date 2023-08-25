import { Input, Textarea } from "@chakra-ui/react";
import BudgetInput from "../../base/Input/BudgetInput";
import NumberInput from "../../base/Input/NumberInput";
import { DatePicker } from "../../base/Input/DatePicker";

const FiledInput = ({ type, placeholder }) => {
  switch (type) {
    case "input":
      return <Input placeholder={placeholder} />;
    case "decimal":
      return <NumberInput placeholder={placeholder} isDecimal />;
    case "float":
      return <NumberInput placeholder={placeholder} />;
    case "budget":
      return <BudgetInput placeholder={placeholder} />;
    case "textarea":
      return <Textarea placeholder={placeholder} />;
    case "date":
      return <DatePicker />;
  }
};

const TemplateContent = ({ title, fields }) => {
  return (
    <div>
      <div className="flex justify-between">
        <span
          color="#2E2C34"
          className="font-Manrope text-[28px] font-semibold"
        >
          {title}
        </span>
      </div>
      <div className="mt-6 flex flex-col gap-y-6">
        {fields?.map((item, i) => (
          <div
            className="flex flex-col gap-y-2 rounded-md bg-white p-4 shadow-md"
            key={i}
          >
            <span className="text-[16px] font-semibold text-[#0d1317]">
              {item.fieldName}
            </span>
            <FiledInput type={item.fieldType} placeholder={item.fieldName} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateContent;

import { Text } from "@chakra-ui/react";
import { useState } from "react";
import CurrencyInput from "../../../base/Input/BudgetInput";

const CoreProduct = () => {
  const [priceCoreProduct, setPriceCoreProduct] = useState({
    currency: "$",
    amount: 0,
  });
  return (
    <div className="p-4">
      <Text fontSize="16px" color="#0d1317" className="font-semibold">
        Core Products
      </Text>
      <Text fontSize="14px" color="#84818a" className="font-Manrope">
        Lorem Ipsum is simply dummy text of the printing
      </Text>
      <CurrencyInput
        value={priceCoreProduct}
        setValue={setPriceCoreProduct}
        className="mt-2"
        placeholder="Enter Price of core product"
      />
    </div>
  );
};

export default CoreProduct;

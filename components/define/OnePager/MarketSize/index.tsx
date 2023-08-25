import { Input, Text } from "@chakra-ui/react";

const inputGroup = ["TAM", "SAM", "SOM"];

const MarketSize = () => {
  return (
    <div className="p-4">
      <Text fontSize="16px" color="#0d1317" className="font-semibold">
        Market Size
      </Text>
      <Text fontSize="14px" color="#84818a" className="font-Manrope">
        Lorem Ipsum is simply dummy text of the printing
      </Text>
      <div className="grid-row-3 mt-2 grid gap-2">
        {inputGroup.map((placeholder, index) => {
          return <Input placeholder={placeholder} key={index} />;
        })}
      </div>
    </div>
  );
};

export default MarketSize;

import { Button } from "@chakra-ui/react";
import React from "react";
import { FaCheck } from "react-icons/fa";
interface PriceDataArray {
  id: number;
  due: string;
  price: number;
  service: string;
}

const PriceData: PriceDataArray[] = [
  { id: 0, due: "Monthly", price: 500, service: "included VAT" },
  { id: 1, due: "Weekly", price: 200, service: "included VAT" },
];
const PriceItem = () => {
  const [selectedItem, setSelectedItem] = React.useState(0);
  <div className="flex gap-x-2 rounded-xl border border-[#e5e5e5] bg-white p-3">
    <div className="mt-1 h-4 w-4 rounded-xl border-[1px] border-[#e5e5e5] bg-white" />
    <div className="flex flex-col">
      <p className="text-[15px] font-semibold text-[#84818A]">Weekly</p>
      <p className="text-[30px] font-semibold">$200</p>
      <p className="text-[14px] text-[#84818A80]">Included VAT</p>
    </div>
  </div>;
  return (
    <div className="flex flex-col gap-y-3">
      {PriceData.map((item, i) => (
        <div
          key={i}
          className={`flex cursor-pointer gap-x-2 rounded-xl ${
            i === selectedItem
              ? "border-2 border-[#08657e] bg-[#daeaee] p-[10px]"
              : "border border-[#e5e5e5] bg-white p-[11px]"
          }`}
          onClick={() => setSelectedItem(i)}
        >
          <div
            className={`mt-1 h-4 w-4 rounded-xl  ${
              i === selectedItem
                ? "border-[5px] border-[#08657e] bg-white"
                : "border-[1px] border-[#e5e5e5] bg-white"
            }`}
          />
          <div className="flex flex-col">
            <p className="text-[15px] font-semibold text-[#84818A]">
              {item.due}
            </p>
            <p className="text-[30px] font-semibold">${item.price}</p>
            <p className="text-[14px] text-[#84818A80]">{item.service}</p>
          </div>
        </div>
      ))}
    </div>
  );
  //
};

export default function Price() {
  return (
    <div className="flex flex-col gap-y-4 rounded-md bg-white p-4 shadow-md">
      <span className="text-xl font-bold">Price</span>
      <PriceItem />
      <p className="font-semibold text-[#84818A]">Task Included</p>
      <div className="flex flex-col gap-y-2">
        <div className="flex items-center gap-x-3">
          <div>
            <FaCheck color="#00BA00" />
          </div>
          <div className="flex-1 font-medium">
            <span className="font-semibold">20,000</span> Keywords/ Month
          </div>
        </div>
        <div className="flex items-center gap-x-3">
          <div>
            <FaCheck color="#00BA00" />
          </div>
          <div className="flex-1 font-medium">
            <span className="font-semibold">1,245,000</span> Backlink Monitoring
          </div>
        </div>
        <div className="flex items-center gap-x-3">
          <div>
            <FaCheck color="#00BA00" />
          </div>
          <div className="flex-1 font-medium">
            <span className="font-semibold">747,000</span> Site Audit Pages
          </div>
        </div>
        <div className="flex items-center gap-x-3">
          <div>
            <FaCheck color="#00BA00" />
          </div>
          <div className="flex-1 font-medium">
            <span className="font-semibold">250</span> Site Audit Pages
          </div>
        </div>
      </div>

      <Button
        sx={{
          bg: "white",
          border: "#e0e0e0 1px solid",
          color: "black",
        }}
        _hover={{
          bg: "#e5f2f5",
          border: "#08657e 1px solid",
        }}
      >
        Compare
      </Button>
      <Button
        sx={{
          bg: "#08657e",
          color: "white",
          border: "#08657e 1px solid",
        }}
        _hover={{
          bg: "#3089a1",
        }}
      >
        Order Now
      </Button>
    </div>
  );
}

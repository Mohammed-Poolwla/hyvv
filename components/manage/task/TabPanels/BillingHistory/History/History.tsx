import React from "react";

import { Text } from "@chakra-ui/react";

import InvoiceTable from "./InvoiceTable/InvoiceTable";
import Weekly from "./Weekly/Weekly";

export interface IHistory {}

const History: React.FC<IHistory> = () => {
  return (
    <div className="flex flex-col gap-4 rounded-md bg-white p-4 shadow-md">
      <div>
        <Text fontSize="24px" className="font-semibold text-hyvv-title-1">
          Billing History
        </Text>
        <Text fontSize="14px" className="text-hyvv-description">
          Contrary to popular belief, Lorem Ipsum is not simply random text.
        </Text>
      </div>
      <Weekly />
      <InvoiceTable />
    </div>
  );
};

export default History;

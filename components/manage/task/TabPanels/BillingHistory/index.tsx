import React from "react";

import DeliveryTime from "../components/DeliveryTime/DeliveryTime";
import OrderDetails from "../components/OrderDetails/OrderDetails";
import Tags from "../components/Tags/Tags";
import History from "./History/History";

export interface IBillingHistory {}

const BillingHistory: React.FC<IBillingHistory> = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div className="col-span-2 flex flex-col gap-6">
        <History />
      </div>
      <div className="flex w-full flex-col gap-6 md:col-span-2 lg:col-span-1">
        <DeliveryTime />
        <OrderDetails />
        <Tags />
      </div>
    </div>
  );
};

export default BillingHistory;

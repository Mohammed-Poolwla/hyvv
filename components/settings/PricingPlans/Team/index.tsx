import React from "react";
import TeamPlan from "./TeamPlan";
import PaymentMethod from "./PaymentMethod";
import DataTable from "../../component/DataTable";
import { useSession } from "next-auth/react";


const Team = () => {
   
  return (
    <>
      <div className="flex flex-col gap-y-6">
        <div className="flex gap-6">
          <TeamPlan />
          <PaymentMethod />
        </div>
        <div>
          <h3 className="text-[17px] font-semibold">Billing History</h3>
          <p className="text-[15px] text-[#84818A]">
            Your amount is the gateway to a personalized online experience.
          </p>
        </div>
        <DataTable
          columns={[
            { label: "invoice", type: "invoice", sortable: true },
            { label: "billed date", type: "date", sortable: true },
            { label: "plan name", type: "text", sortable: true },
            { label: "amount", type: "amount", sortable: true },
            { label: "actions", type: "actions", sortable: false },
          ]}
          data={[
            {
              invoice: "#1234",
              "billed date": "May 15, 2023",
              "plan name": "Team Plan",
              amount: 49.99,
              status: "Open",
            },
            {
              invoice: "#1344",
              "billed date": "May 15, 2023",
              "plan name": "Team Plan",
              amount: 49.99,
              status: "Closed",
            },
            {
              invoice: "#1234",
              "billed date": "May 15, 2023",
              "plan name": "Team Plan",
              amount: 49.99,
              status: "Open",
            },
            {
              invoice: "#1234",
              "billed date": "May 15, 2023",
              "plan name": "Team Plan",
              amount: 49.99,
              status: "Open",
            },
            {
              invoice: "#1344",
              "billed date": "May 15, 2023",
              "plan name": "Team Plan",
              amount: 49.99,
              status: "Closed",
            },
            {
              invoice: "#1234",
              "billed date": "May 15, 2023",
              "plan name": "Team Plan",
              amount: 49.99,
              status: "Open",
            },
            {
              invoice: "#1234",
              "billed date": "May 15, 2023",
              "plan name": "Team Plan",
              amount: 49.99,
              status: "Open",
            },
            {
              invoice: "#1344",
              "billed date": "May 15, 2023",
              "plan name": "Team Plan",
              amount: 49.99,
              status: "Closed",
            },
            {
              invoice: "#1234",
              "billed date": "May 15, 2023",
              "plan name": "Team Plan",
              amount: 49.99,
              status: "Open",
            },
            {
              invoice: "#1234",
              "billed date": "May 15, 2023",
              "plan name": "Team Plan",
              amount: 49.99,
              status: "Open",
            },
          ]}
        />
      </div>
    </>
  );
};

export default Team;

import React from "react";
import DataTable from "../../component/DataTable";

const Team = () => {
  return (
    <>
      <div className="flex flex-col gap-y-6">
        <div>
          <h3 className="text-[17px] font-semibold">Recurring Freelancers</h3>
          <p className="text-[15px] text-[#84818A]">
            Your account is the gateway to a personalized online experience.
          </p>
        </div>
        <DataTable
          columns={[
            { label: "freelancer name", type: "name", sortable: true },
            { label: "last invoice", type: "text", sortable: true },
            { label: "billed type", type: "text", sortable: true },
            { label: "amount", type: "amount", sortable: true },
            { label: "actions", type: "actions", sortable: false },
          ]}
          data={[
            {
              "freelancer name": "Kenneth Allen",
              "last invoice": "Invoice #007",
              "billed type": "Weekly",
              amount: 49.99,
            },
            {
              "freelancer name": "Rodger Struck",
              "last invoice": "Invoice #007",
              "billed type": "Weekly",
              amount: 49.99,
            },
            {
              "freelancer name": "Katie Sims",
              "last invoice": "Invoice #007",
              "billed type": "Weekly",
              amount: 49.99,
            },
            {
              "freelancer name": "Chris Glasser",
              "last invoice": "Invoice #007",
              "billed type": "Weekly",
              amount: 49.99,
            },
            {
              "freelancer name": "Kimberly Mastrangelo",
              "last invoice": "Invoice #007",
              "billed type": "Weekly",
              amount: 49.99,
            },
            {
              "freelancer name": "Joe Allen",
              "last invoice": "Invoice #007",
              "billed type": "Weekly",
              amount: 49.99,
            },
          ]}
        />
        <div>
          <h3 className="text-[17px] font-semibold">One Time Freelancer</h3>
          <p className="text-[15px] text-[#84818A]">
            Your account is the gateway to a personalized online experience.
          </p>
        </div>
        <DataTable
          columns={[
            { label: "freelancer name", type: "name", sortable: true },
            { label: "invoice", type: "text", sortable: true },
            { label: "billed date", type: "date", sortable: true },
            { label: "amount", type: "amount", sortable: true },
            { label: "actions", type: "actions", sortable: false },
          ]}
          data={[
            {
              "freelancer name": "Kenneth Allen",
              invoice: "Invoice #007",
              "billed date": "May 15, 2023",
              amount: 49.99,
            },
            {
              "freelancer name": "Rodger Struck",
              invoice: "Invoice #007",
              "billed date": "May 15, 2023",
              amount: 49.99,
            },
            {
              "freelancer name": "Katie Sims",
              invoice: "Invoice #007",
              "billed date": "May 15, 2023",
              amount: 49.99,
            },
            {
              "freelancer name": "Chris Glasser",
              invoice: "Invoice #007",
              "billed date": "May 15, 2023",
              amount: 49.99,
            },
            {
              "freelancer name": "Kimberly Mastrangelo",
              invoice: "Invoice #007",
              "billed date": "May 15, 2023",
              amount: 49.99,
            },
            {
              "freelancer name": "Joe Allen",
              invoice: "Invoice #007",
              "billed date": "May 15, 2023",
              amount: 49.99,
            },
          ]}
        />
      </div>
    </>
  );
};

export default Team;

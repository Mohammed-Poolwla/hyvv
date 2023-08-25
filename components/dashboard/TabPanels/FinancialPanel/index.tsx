import { Text } from "@chakra-ui/react";

import CollapseCard from "../../../base/Card/CollapseCard";
import SelectMenu from "../../../base/Select/SelectMenu";
import { useState } from "react";
import { CalendarIcon } from "@chakra-ui/icons";

const FinancialPanel = () => {
  const [selectedTerm, setSelectedTerm] = useState(7);
  return (
    <div className="flex flex-col gap-y-6">
      <div className="mt-6 flex justify-end">
        <div className="flex items-center gap-x-2 rounded-md bg-white pl-4 shadow-md">
          <CalendarIcon color="#84818a" />
          <Text color="#84818a">Show&nbsp;:&nbsp;</Text>
          <SelectMenu
            data={[
              { label: "Last 7 days", value: 7 },
              { label: "Last 8 days", value: 8 },
            ]}
            selected={selectedTerm}
            variant="ghost"
            setSelected={setSelectedTerm}
          />
        </div>
      </div>
      <CollapseCard title="Capital">Capital Content</CollapseCard>
      <CollapseCard title="Revenue">Revenue Content</CollapseCard>
      <CollapseCard title="Expenses">Expenses Content</CollapseCard>
      <CollapseCard title="Cashflow">Cashflow Content</CollapseCard>
    </div>
  );
};

export default FinancialPanel;

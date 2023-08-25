import { Text } from "@chakra-ui/react";
import SelectMenu from "../../../base/Select/SelectMenu";
import CurrencyInput from "../../../base/Input/BudgetInput";
import { useState } from "react";
import { DatePicker } from "../../../base/Input/DatePicker";
import type { Budget } from "../../../base/Input/BudgetInput";

const CoreInfo = () => {
  const [budgetLaunch, setBudgetLaunch] = useState<Budget>({
    currency: "$",
    amount: null,
  });
  const [currentCapital, setCurrentCapital] = useState<Budget>({
    currency: "$",
    amount: null,
  });
  const [monthlyBurn, setMonthlyBurn] = useState<Budget>({
    currency: "$",
    amount: null,
  });
  const [fundsNeeded, setFundsNeeded] = useState<Budget>({
    currency: "$",
    amount: null,
  });
  const [incomeNeeded, setIncomeNeeded] = useState<Budget>({
    currency: "$",
    amount: null,
  });
  const [incomeWanted, setIncomeWanted] = useState<Budget>({
    currency: "$",
    amount: null,
  });
  const [enterpriseValue, setEnterpriseValue] = useState<Budget>({
    currency: "$",
    amount: null,
  });
  const [breakEvenDate, setBreakEvenDate] = useState(new Date());
  const [selfFundedDate, setSelfFundedDate] = useState(new Date());
  const [successDate, setSuccessDate] = useState(new Date());

  return (
    <div className="p-4">
      <Text fontSize="16px" color="#0d1317" className="font-semibold">
        Core Info
      </Text>
      <Text fontSize="14px" color="#84818a" className="font-Manrope">
        Lorem Ipsum is simply dummy text of the printing
      </Text>
      <div className="mt-2 grid grid-cols-2 gap-2">
        <CurrencyInput
          value={budgetLaunch}
          setValue={setBudgetLaunch}
          placeholder="Budget to Launch"
          hideStepper
        />
        <SelectMenu placeholder="Months to launch" data={[]} />
        <CurrencyInput
          value={currentCapital}
          setValue={setCurrentCapital}
          placeholder="Current Capital"
          hideStepper
        />
        <CurrencyInput
          value={monthlyBurn}
          setValue={setMonthlyBurn}
          placeholder="Monthly Burn"
          hideStepper
        />
        <CurrencyInput
          value={fundsNeeded}
          setValue={setFundsNeeded}
          placeholder="Funds Needed"
          hideStepper
        />
        <SelectMenu placeholder="Time to Raise" data={[]} />
        <DatePicker date={breakEvenDate} onChange={setBreakEvenDate} />
        <CurrencyInput
          value={incomeNeeded}
          setValue={setIncomeNeeded}
          placeholder="Income Needed"
          hideStepper
        />
        <DatePicker date={selfFundedDate} onChange={setSelfFundedDate} />
        <CurrencyInput
          value={incomeWanted}
          setValue={setIncomeWanted}
          placeholder="Income Wanted"
          hideStepper
        />
        <DatePicker date={successDate} onChange={setSuccessDate} />
        <CurrencyInput
          value={enterpriseValue}
          setValue={setEnterpriseValue}
          placeholder="Enterprise Value"
          hideStepper
        />
      </div>
    </div>
  );
};

export default CoreInfo;

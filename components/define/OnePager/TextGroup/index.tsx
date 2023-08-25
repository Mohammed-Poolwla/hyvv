import { useState } from "react";
import { Text, Textarea } from "@chakra-ui/react";

const TextGroup = () => {
  const [problem, setProblem] = useState("");
  const [solution, setSolution] = useState("");
  const [businessModel, setBusinessModel] = useState("");
  const [competitiveAdvantage, setCompetitiveAdvantage] = useState("");

  return (
    <div className="flex flex-col gap-y-3 p-4">
      <div className="flex flex-col gap-y-1">
        <Text className="color-[#0d1317] text-[16px] font-semibold">
          Problem
        </Text>
        <Textarea
          value={problem}
          onChange={(e) => {
            setProblem(e.target.value);
          }}
          placeholder="Write here"
        />
      </div>
      <div className="flex flex-col gap-y-1">
        <Text className="color-[#0d1317] text-[16px] font-semibold">
          Solution
        </Text>
        <Textarea
          value={solution}
          onChange={(e) => {
            setSolution(e.target.value);
          }}
          placeholder="Write here"
        />
      </div>
      <div className="flex flex-col gap-y-1">
        <Text className="color-[#0d1317] text-[16px] font-semibold">
          Business Model
        </Text>
        <Textarea
          value={businessModel}
          onChange={(e) => {
            setBusinessModel(e.target.value);
          }}
          placeholder="Write here"
        />
      </div>
      <div className="flex flex-col gap-y-1">
        <Text className="color-[#0d1317] text-[16px] font-semibold">
          Competitive Advantage
        </Text>
        <Textarea
          value={competitiveAdvantage}
          onChange={(e) => {
            setCompetitiveAdvantage(e.target.value);
          }}
          placeholder="Write here"
        />
      </div>
    </div>
  );
};

export default TextGroup;

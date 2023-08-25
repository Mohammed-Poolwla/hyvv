import { useEffect } from "react";

import { useChat } from "ai/react";

import { Button, Input } from "@chakra-ui/react";

import { useAppStore } from "../lib/store";

import useCustomToast from "../utils/toast";

import Layout from "../components/layouts/AppLayout/Layout";

const Test = () => {
  const { startupData } = useAppStore();

  const showToast = useCustomToast();

  const prompts = {
    executiveSummary: `generate the very short executive summary about ${startupData.selectedStartup[1]} - ${startupData.newStartupData.companyIndustry} company focusing ${startupData.newStartupData.companySpecific}`,
    problemStatement: `Based on the following description of a startup focused on ${startupData.newStartupData.companyIndustry} specializing in ${startupData.newStartupData.companySpecific}, write a concise and compelling a problem statement for a pitch deck: ${startupData.newStartupData.companyDescription}`,
    solution: `Based on the following description of a startup focused on ${startupData.newStartupData.companyIndustry} specializing in ${startupData.newStartupData.companySpecific}, write a concise and compelling a solution for a pitch deck: ${startupData.newStartupData.companyDescription}`,
  };

  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    setInput,
    isLoading,
  } = useChat();

  useEffect(() => {
    if (messages.length && !isLoading) {
      showToast({
        title: "Success",
        description: messages[messages.length - 1].content,
        status: "success",
      });
    }
  }, [messages, isLoading]);

  const generate = async (e) => {
    switch (e.target.value) {
      case "executiveSummary":
        setInput(prompts.executiveSummary);
        break;

      case "problemStatement":
        setInput(prompts.problemStatement);
        break;

      case "solution":
        setInput(prompts.solution);
        break;

      case "businessModel":
        console.log("business model");
        break;

      default:
        break;
    }
  };

  const simulateSubmit = async () => {
    const submitEvent = new Event("submit", {
      bubbles: true,
      cancelable: true,
    });

    await await document.getElementById("gpt").dispatchEvent(submitEvent);
  };

  return (
    <div className="flex h-full flex-col gap-4 p-8">
      <div className="flex gap-4">
        <Button
          colorScheme="main"
          variant="solid"
          value="executiveSummary"
          onClick={generate}
        >
          Executive Summary
        </Button>
        <Button
          colorScheme="main"
          variant="solid"
          value="problemStatement"
          onClick={generate}
        >
          Problem Statement
        </Button>
        <Button
          colorScheme="main"
          variant="solid"
          value="solution"
          onClick={generate}
        >
          Solution
        </Button>
        <Button
          colorScheme="main"
          variant="solid"
          value="businessModel"
          onClick={generate}
        >
          Business Model
        </Button>
        <Button
          colorScheme="main"
          variant="solid"
          value="targetMarket"
          onClick={generate}
        >
          Target Market
        </Button>
        <Button
          colorScheme="main"
          variant="solid"
          value="financialS"
          onClick={generate}
        >
          Financial for Short Term Goals
        </Button>
        <Button
          colorScheme="main"
          variant="solid"
          value="productS"
          onClick={generate}
        >
          Product for Short Term Goals
        </Button>
      </div>
      <div className="flex gap-4">
        <Button
          colorScheme="main"
          variant="solid"
          value="marketingS"
          onClick={generate}
        >
          Marketing for Short Term Goals
        </Button>
        <Button
          colorScheme="main"
          variant="solid"
          value="staffingS"
          onClick={generate}
        >
          Staffing for Short Term Goals
        </Button>
        <Button
          colorScheme="main"
          variant="solid"
          value="financialL"
          onClick={generate}
        >
          Financial for Long Term Goals
        </Button>
        <Button
          colorScheme="main"
          variant="solid"
          value="productL"
          onClick={generate}
        >
          Product for Long Term Goals
        </Button>

        <Button
          colorScheme="main"
          variant="solid"
          value="marketingL"
          onClick={generate}
        >
          Marketing for Long Term Goals
        </Button>
      </div>
      <div className="flex gap-4">
        <Button
          colorScheme="main"
          variant="solid"
          value="staffingL"
          onClick={generate}
        >
          Staffing for Long Term Goals
        </Button>
        <Button
          colorScheme="main"
          variant="solid"
          value="mission"
          onClick={generate}
        >
          Mission
        </Button>
        <Button
          colorScheme="main"
          variant="solid"
          value="vision"
          onClick={generate}
        >
          Vision
        </Button>
        <Button
          colorScheme="main"
          variant="solid"
          value="values"
          onClick={generate}
        >
          Values
        </Button>
      </div>
      <Button variant="outline" onClick={simulateSubmit}>
        Submit
      </Button>
      <form id="gpt" onSubmit={handleSubmit}>
        <Input value={input} onChange={handleInputChange} />
      </form>
    </div>
  );
};

export default Test;

Test.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

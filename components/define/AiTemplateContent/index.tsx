import { useEffect, useState } from "react";

import { useChat } from "ai/react";

import { Button, Text, Textarea } from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";
import ShareIcon from "../../icons/ShareIcon";

import ProgressBar from "../../base/ProgressBar/ProgressBar";

import { useAppStore } from "../../../lib/store";

const AiTemplateContent = ({ title, data }) => {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    setInput,
    setMessages,
    isLoading,
  } = useChat();

  const [showSpinner, setShowSpinner] = useState(false);
  const [progressValue, setProgressValue] = useState(0);

  const {
    startupData,
    businessPlanData,
    setExecutiveSummary,
    setProblemStatement,
    setSolution,
    setMission,
    setVision,
    setValues,
    setBusinessModel,
    setFivecanalysus_Company,
    setFivecanalysus_Collaborators,
    setFivecanalysus_Customers,
    setFivecanalysus_Competitors,
    setFivecanalysus_Climate,
    setSWOTAnalysisStrengths,
    setSWOTAnalysisWeaknesses,
    setSWOTAnalysisOpportunities,
    setSWOTAnalysisThreats,
    setCoreCapabilitiesCapability1,
    setCoreCapabilitiesCapability2,
    setCoreCapabilitiesCapability3,
    setCoreCapabilitiesCapability4,
    setShortTermGoalsFinancial,
    setShortTermGoalsProduct,
    setShortTermGoalsMarketing,
    setShortTermGoalsStaffing,
    setLongTermGoalsFinancial,
    setLongTermGoalsProduct,
    setLongTermGoalsMarketing,
    setLongTermGoalsStaffing,
    setTargetMarket,
    setTargetMarketResearch,
    setTargetMarketPainPoints,
    setTargetMarketCurrentSolutions,
    setBuyerPersonas,
    setBuyerCycle,
    setUniqueSelling,
    setMarketingMixProduct,
    setMarketingMixPrice,
    setMarketingMixPlace,
    setMarketingMixPromotion,
  } = useAppStore();

  const prompts = {
    executiveSummary: `generate the very short executive summary about ${startupData.newStartupData.companyName} - ${startupData.newStartupData.companyIndustry} company focusing ${startupData.newStartupData.companySpecific}`,
    problemStatement: `Based on the following description of a startup focused on ${startupData.newStartupData.companyIndustry} specializing in ${startupData.newStartupData.companySpecific}, write a concise and compelling a problem statement for a pitch deck: ${startupData.newStartupData.companyDescription}`,
    solution: `Based on the following description of a startup focused on ${startupData.newStartupData.companyIndustry} specializing in ${startupData.newStartupData.companySpecific}, write a concise and compelling a solution for a pitch deck: ${startupData.newStartupData.companyDescription}`,
    misson: `Based on the following description of a startup focused on ${startupData.newStartupData.companyIndustry} specializing in ${startupData.newStartupData.companySpecific}, write a concise and compelling a misson for a pitch deck: ${startupData.newStartupData.companyDescription}`,
    vision: `Based on the following description of a startup focused on ${startupData.newStartupData.companyIndustry} specializing in ${startupData.newStartupData.companySpecific}, write a concise and compelling a vision for a pitch deck: ${startupData.newStartupData.companyDescription}`,
    values: `Based on the following description of a startup focused on ${startupData.newStartupData.companyIndustry} specializing in ${startupData.newStartupData.companySpecific}, write a concise and compelling values for a pitch deck: ${startupData.newStartupData.companyDescription}`,
    businessModel: `Based on the following description of a startup focused on ${startupData.newStartupData.companyIndustry} specializing in ${startupData.newStartupData.companySpecific}, write a concise and compelling business model and revenue generation strategy for a pitch deck: ${startupData.newStartupData.companyDescription}`,
    fivecanalysus_company: `Please provide information about ${startupData.newStartupData.companyName} - ${startupData.newStartupData.companyIndustry} company's internal analysis, such as its strengths, weaknesses, and overall capabilities.`,
    fivecanalysus_collaborators: `Please provide information about ${startupData.newStartupData.companyName} - ${startupData.newStartupData.companyIndustry} company's key collaborators or partners, including any strategic alliances or joint ventures.`,
    fivecanalysus_customers: `Please provide information about ${startupData.newStartupData.companyName} - ${startupData.newStartupData.companyIndustry} company's target customers or clients, including their demographics, needs, and preferences.`,
    fivecanalysus_competitors: `Please provide information about ${startupData.newStartupData.companyName} - ${startupData.newStartupData.companyIndustry} company's main competitors in the market, including their strengths, weaknesses, and market share.`,
    fivecanalysus_climate: `Please provide information about the external factors that may impact $${startupData.newStartupData.companyName} - ${startupData.newStartupData.companyIndustry} company's business, such as economic, political, or technological trends.`,
    swotStrengths: `Please provide 4 key strengths of ${startupData.newStartupData.companyName} - ${startupData.newStartupData.companyIndustry} startup.`,
    swotWeaknesses: `Please provide 4 key weaknesses of ${startupData.newStartupData.companyName} - ${startupData.newStartupData.companyIndustry} startup.`,
    swotOpportunities: `Please provide 4 key opportunities for ${startupData.newStartupData.companyName} - ${startupData.newStartupData.companyIndustry} startup.`,
    swotThreats: `Please provide 4 key threats to ${startupData.newStartupData.companyName} - ${startupData.newStartupData.companyIndustry} startup.`,
    core_capability1: `5 word punchy description of capability 1`,
    core_capability2: `5 word punchy description of capability 2`,
    core_capability3: `5 word punchy description of capability 3`,
    core_capability4: `5 word punchy description of capability 4`,
    short_goals_financial: `I have a startup and have to create my short term financial goals based on the information I provided. please assist me for these questions. What are your top 4 short term financial goals? Why are these goals important to your startup? How will you define success of these goals? How will you measure progress towards these goals?`,
    short_goals_product: `I have a startup and have to create my short term product goals based on the information I provided. please assist me for these questions. What are your top 4 short term product goals? Why are these goals important to your startup? How will you define success of these goals? How will you measure progress towards these goals?`,
    short_goals_marketing: `I have a startup and have to create my short term marketing goals based on the information I provided. please assist me for these questions. What are your top 4 short term marketing goals? Why are these goals important to your startup? How will you define success of these goals? How will you measure progress towards these goals?`,
    short_goals_staffing: `I have a startup and have to create my short term staffing goals based on the information I provided. please assist me for these questions. What are your top 4 short term team goals? Why are these goals important to your startup? How will you define success of these goals? How will you measure progress towards these goals?`,
    long_goals_financial: `I have a startup and have to create my long term financial goals based on the information I provided. please assist me for these questions. What are your top 4 long term financial goals? Why are these goals important to your startup? How will you define success of these goals? How will you measure progress towards these goals?`,
    long_goals_product: `I have a startup and have to create my long term product goals based on the information I provided. please assist me for these questions. What are your top 4 long term product goals? Why are these goals important to your startup? How will you define success of these goals? How will you measure progress towards these goals?`,
    long_goals_marketing: `I have a startup and have to create my long term marketing goals based on the information I provided. please assist me for these questions. What are your top 4 long term marketing goals? Why are these goals important to your startup? How will you define success of these goals? How will you measure progress towards these goals?`,
    long_goals_staffing: `I have a startup and have to create my long term staffing goals based on the information I provided. please assist me for these questions. What are your top 4 long term team goals? Why are these goals important to your startup? How will you define success of these goals? How will you measure progress towards these goals?`,
    targetMarket: `I have a startup and have to create my target maket based on the information I provided. please assist me for these questions. Who is your target market? What are the demographics of your target market? What are the psychographics of your target market? What are the geographic characteristics of your target market?`,
    targetMarketResearch: `I have a startup and have to create my target maket research based on the information I provided. please assist me for these questions. How are you validating your target market? Define a list of 4-7 tactics to be used to validate your target market. For each tactic, explain how it will be used to validate your target market.`,
    targetMarketPainPoints: `I have a startup and have to create my target maket paintpoints based on the information I provided. please assist me for these questions. What are the pain points of your target market? Create a list of 3-5 pain points of your target market. For each pain point, explain why it is a source of frustration for your target market.`,
    targetMarketCurrentSolutions: `I have a startup and have to create my target maket current solutions based on the information I provided. please assist me for these questions. What are the current solutions buyers are turning to to solve their pain points? Create a list of 3-5 current solutions buyers are turning to to solve their pain points. For each current solution, explain why it is not effective and how your product or service will solve it.`,
    targetMarketBuyerPersonas: `I have a startup and have to create my target maket buyer personas based on the information I provided. please assist me for these questions. What is the scenario in which the product or service will be used? What are the demographics of the buyer? What goals does the buyer have? What are the pain points and challenges of the buyer? what are the common objections of the buyer? What is the buyer's biggest fear? What solution is the buyer looking for?`,
    marketingStrategyBuyersBuyingCycle: `How is a target customer navigating the awareness stage How is a target customer navigating research for a solution How is a target customer navigating the purchase decision How is a target customer navigating the post-purchase experience and renewal`,
    marketingStrategyUniqueSellingProposition: `What is your value proposition? What are the key benefits of your product or service? What are the key features of your product or service? What is the unique selling proposition of your product or service?`,
    marketingMixProduct: `Describe the unique features and value proposition of the product. Specify the key features that differentiate the product from competitors. Explain the benefits and advantages customers can expect from using the product. Highlight the unique aspects of the product that set it apart in the market.`,
    marketingMixPrice: `Describe your target market who would benefit from your solution focusing Price. Discuss the use cases or scenarios in which your product or technology can be applied. Showcase the potential market size and growth opportunities.`,
    marketingMixPlace: `Describe your target market who would benefit from your solution focusing Place. Discuss the use cases or scenarios in which your product or technology can be applied. Showcase the potential market size and growth opportunities.`,
    marketingMixPromotion: `Describe your target market who would benefit from your solution focusing Promotion. Discuss the use cases or scenarios in which your product or technology can be applied. Showcase the potential market size and growth opportunities.`,
  };

  useEffect(() => {
    if (messages.length && !isLoading) {
      setProgressValue((100 / 78) * messages.length);
      switch (messages.length) {
        case 2:
          setExecutiveSummary(messages[1].content);
          getResponsefromGPT(prompts.problemStatement);
          break;

        case 4:
          setProblemStatement(messages[3].content);
          getResponsefromGPT(prompts.solution);
          break;

        case 6:
          setSolution(messages[5].content);
          getResponsefromGPT(prompts.misson);
          break;

        case 8:
          setMission(messages[7].content);
          getResponsefromGPT(prompts.vision);
          break;

        case 10:
          setVision(messages[9].content);
          getResponsefromGPT(prompts.values);
          break;

        case 12:
          setValues(messages[11].content);
          getResponsefromGPT(prompts.businessModel);
          break;

        case 14:
          setBusinessModel(messages[13].content);
          getResponsefromGPT(prompts.fivecanalysus_company);
          break;

        case 16:
          setFivecanalysus_Company(messages[15].content);
          getResponsefromGPT(prompts.fivecanalysus_collaborators);
          break;

        case 18:
          setFivecanalysus_Collaborators(messages[17].content);
          getResponsefromGPT(prompts.fivecanalysus_customers);
          break;

        case 20:
          setFivecanalysus_Customers(messages[19].content);
          getResponsefromGPT(prompts.fivecanalysus_competitors);
          break;

        case 22:
          setFivecanalysus_Competitors(messages[21].content);
          getResponsefromGPT(prompts.fivecanalysus_climate);
          break;

        case 24:
          setFivecanalysus_Climate(messages[23].content);
          getResponsefromGPT(prompts.swotStrengths);
          break;

        case 26:
          setSWOTAnalysisStrengths(messages[25].content);
          getResponsefromGPT(prompts.swotWeaknesses);
          break;

        case 28:
          setSWOTAnalysisWeaknesses(messages[27].content);
          getResponsefromGPT(prompts.swotOpportunities);
          break;

        case 30:
          setSWOTAnalysisOpportunities(messages[29].content);
          getResponsefromGPT(prompts.swotThreats);
          break;

        case 32:
          setSWOTAnalysisThreats(messages[31].content);
          getResponsefromGPT(prompts.core_capability1);
          break;

        case 34:
          setCoreCapabilitiesCapability1(messages[33].content);
          getResponsefromGPT(prompts.core_capability2);
          break;

        case 36:
          setCoreCapabilitiesCapability2(messages[35].content);
          getResponsefromGPT(prompts.core_capability3);
          break;

        case 38:
          setCoreCapabilitiesCapability3(messages[37].content);
          getResponsefromGPT(prompts.core_capability4);
          break;

        case 40:
          setCoreCapabilitiesCapability4(messages[39].content);
          getResponsefromGPT(prompts.short_goals_financial);
          break;

        case 42:
          setShortTermGoalsFinancial(messages[41].content);
          getResponsefromGPT(prompts.short_goals_product);
          break;

        case 44:
          setShortTermGoalsProduct(messages[43].content);
          getResponsefromGPT(prompts.short_goals_marketing);
          break;

        case 46:
          setShortTermGoalsMarketing(messages[45].content);
          getResponsefromGPT(prompts.short_goals_staffing);
          break;

        case 48:
          setShortTermGoalsStaffing(messages[47].content);
          getResponsefromGPT(prompts.long_goals_financial);
          break;

        case 50:
          setLongTermGoalsFinancial(messages[49].content);
          getResponsefromGPT(prompts.long_goals_product);
          break;

        case 52:
          setLongTermGoalsProduct(messages[51].content);
          getResponsefromGPT(prompts.long_goals_marketing);
          break;

        case 54:
          setLongTermGoalsMarketing(messages[53].content);
          getResponsefromGPT(prompts.long_goals_staffing);
          break;

        case 56:
          setLongTermGoalsStaffing(messages[55].content);
          getResponsefromGPT(prompts.targetMarket);
          break;

        case 58:
          setTargetMarket(messages[57].content);
          getResponsefromGPT(prompts.targetMarketResearch);
          break;

        case 60:
          setTargetMarketResearch(messages[59].content);
          getResponsefromGPT(prompts.targetMarketPainPoints);
          break;

        case 62:
          setTargetMarketPainPoints(messages[61].content);
          getResponsefromGPT(prompts.targetMarketCurrentSolutions);
          break;

        case 64:
          setTargetMarketCurrentSolutions(messages[63].content);
          getResponsefromGPT(prompts.targetMarketBuyerPersonas);
          break;

        case 66:
          setBuyerPersonas(messages[65].content);
          getResponsefromGPT(prompts.marketingStrategyBuyersBuyingCycle);
          break;

        case 68:
          setBuyerCycle(messages[67].content);
          getResponsefromGPT(prompts.marketingStrategyUniqueSellingProposition);
          break;

        case 70:
          setUniqueSelling(messages[69].content);
          getResponsefromGPT(prompts.marketingMixProduct);
          break;

        case 72:
          setMarketingMixProduct(messages[71].content);
          getResponsefromGPT(prompts.marketingMixPrice);
          break;

        case 74:
          setMarketingMixPrice(messages[73].content);
          getResponsefromGPT(prompts.marketingMixPlace);
          break;

        case 76:
          setMarketingMixPlace(messages[75].content);
          getResponsefromGPT(prompts.marketingMixPromotion);
          break;

        case 78:
          setMarketingMixPromotion(messages[77].content);
          setShowSpinner(false);
          break;
      }
    }
  }, [messages, isLoading]);

  const getResponsefromGPT = async (request: string) => {
    const submitEvent = new Event("submit", {
      bubbles: true,
      cancelable: true,
    });

    await setInput(request);
    setTimeout(() => {
      document.getElementById("gpt").dispatchEvent(submitEvent);
    }, 1);
  };

  const generateByAI = async () => {
    setMessages([]);

    setShowSpinner(true);

    getResponsefromGPT(prompts.executiveSummary);
  };

  return (
    <div>
      <form id="gpt" onSubmit={handleSubmit} className="hidden">
        <input value={input} onChange={handleInputChange} />
      </form>
      <div
        className={`absolute z-10 flex flex-col gap-2 ${
          !showSpinner ? "hidden" : ""
        } h-[calc(100vh-100px)] w-[calc(100vw-430px)] items-center justify-center bg-white`}
      >
        <div className="w-full px-12">
          <ProgressBar value={progressValue} />
        </div>
        <Text className="pt-4">
          Generating information about business plan using AI
        </Text>
        <Text>(This may take several minutes.)</Text>
      </div>
      <div className="flex justify-between">
        <span
          color="#2E2C34"
          className="font-Manrope text-[28px] font-semibold"
        >
          {title}
        </span>
        <div className="flex gap-4">
          <Button variant="outline" onClick={generateByAI}>
            Generate by AI
          </Button>
          <Button
            colorScheme="main"
            color="white"
            leftIcon={<ShareIcon />}
            rightIcon={<ChevronDownIcon />}
          >
            Share
          </Button>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-y-3 rounded-md bg-white p-5 shadow-md">
        {data.map((item, index) => {
          let value = "";

          switch (item.title) {
            case "Executive Summary":
              value = businessPlanData["Executive Summary"];
              break;

            case "Problem Statement":
              value = businessPlanData["Problem Statement"];
              break;

            case "Solution":
              value = businessPlanData["Solution"];
              break;

            case "Business Model":
              value = businessPlanData["Business Model"];
              break;

            case "Target Market":
              value = businessPlanData["Target Market"];
              break;
          }

          return (
            <div
              className=" rounded-md border border-[#d6d6d6] px-5 py-4"
              key={index}
            >
              <span className="text-[26px] font-semibold">{item.title}</span>
              <p className="text-[16px] text-[#84818A]">{item.description}</p>
              {item.data !== undefined ? (
                <Textarea
                  className="mt-2"
                  value={value}
                  placeholder="Tell us more!"
                />
              ) : null}
              {item.subData?.map((childItem, index) => {
                let childValue = "";

                switch (childItem.title) {
                  case "Mission":
                    childValue = businessPlanData["Mission"];
                    break;

                  case "Vision":
                    childValue = businessPlanData["Vision"];
                    break;

                  case "Values":
                    childValue = businessPlanData["Values"];
                    break;

                  case "Company":
                    childValue = businessPlanData["5C Analysis Company"];
                    break;

                  case "Collaborators":
                    childValue = businessPlanData["5C Analysis Collaborators"];
                    break;

                  case "Customers":
                    childValue = businessPlanData["5C Analysis Customers"];
                    break;

                  case "Competitors":
                    childValue = businessPlanData["5C Analysis Competitors"];
                    break;

                  case "Climate":
                    childValue = businessPlanData["5C Analysis Climate"];
                    break;

                  case "Strengths":
                    childValue = businessPlanData["SWOT Analysis Strengths"];
                    break;

                  case "Weaknesses":
                    childValue = businessPlanData["SWOT Analysis Weaknesses"];
                    break;

                  case "Opportunities":
                    childValue =
                      businessPlanData["SWOT Analysis Opportunities"];
                    break;

                  case "Threats":
                    childValue = businessPlanData["SWOT Analysis Threats"];
                    break;

                  case "Capability 1":
                    childValue =
                      businessPlanData["Core Capabilities Capability 1"];
                    break;

                  case "Capability 2":
                    childValue =
                      businessPlanData["Core Capabilities Capability 2"];
                    break;

                  case "Capability 3":
                    childValue =
                      businessPlanData["Core Capabilities Capability 3"];
                    break;

                  case "Capability 4":
                    childValue =
                      businessPlanData["Core Capabilities Capability 4"];
                    break;

                  case "Financial":
                    switch (item.title) {
                      case "Short Term Goals":
                        childValue =
                          businessPlanData["Short Term Goals Financial"];
                        break;

                      case "Long Term Goals":
                        childValue =
                          businessPlanData["Long Term Goals Financial"];
                        break;
                    }
                    break;

                  case "Product":
                    switch (item.title) {
                      case "Short Term Goals":
                        childValue =
                          businessPlanData["Short Term Goals Product"];
                        break;

                      case "Long Term Goals":
                        childValue =
                          businessPlanData["Long Term Goals Product"];
                        break;

                      case "Marketing Mix (4P’s)":
                        childValue =
                          businessPlanData["Marketing Mix (4P’s) Product"];
                        break;
                    }
                    break;

                  case "Marketing":
                    switch (item.title) {
                      case "Short Term Goals":
                        childValue =
                          businessPlanData["Short Term Goals Marketing"];
                        break;

                      case "Long Term Goals":
                        childValue =
                          businessPlanData["Long Term Goals Marketing"];
                        break;
                    }
                    break;

                  case "Staffing":
                    switch (item.title) {
                      case "Short Term Goals":
                        childValue =
                          businessPlanData["Short Term Goals Staffing"];
                        break;

                      case "Long Term Goals":
                        childValue =
                          businessPlanData["Long Term Goals Staffing"];
                        break;
                    }
                    break;

                  case "Target Market Research Tactics":
                    childValue =
                      businessPlanData["Target Market Research Tactics"];
                    break;

                  case "Target Market’s Pain Points":
                    childValue =
                      businessPlanData["Target Market’s Pain Points"];
                    break;

                  case "Target Market’s Current Solutions and Need":
                    childValue =
                      businessPlanData[
                        "Target Market’s Current Solutions and Need"
                      ];
                    break;

                  case "Buyer Persona":
                    childValue = businessPlanData["Buyer Persona"];
                    break;

                  case "Buyer’s Buying Cycle":
                    childValue = businessPlanData["Buyer’s Buying Cycle"];
                    break;

                  case "Unique Selling Proposition":
                    childValue = businessPlanData["Unique Selling Proposition"];
                    break;

                  case "Price":
                    childValue = businessPlanData["Marketing Mix (4P’s) Price"];
                    break;

                  case "Place":
                    childValue = businessPlanData["Marketing Mix (4P’s) Place"];
                    break;

                  case "Promotion":
                    childValue =
                      businessPlanData["Marketing Mix (4P’s) Promotion"];
                    break;
                }

                return (
                  <div key={index} className="mt-2">
                    <span className="text-[20px] font-semibold text-[#000929]">
                      {childItem.title}
                    </span>
                    <Textarea placeholder="Tell us more!" value={childValue} />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AiTemplateContent;

import { StateCreator } from "zustand";

interface BusinessPlanData {
  "Executive Summary": string;
  "Problem Statement": string;
  Solution: string;
  Mission: string;
  Vision: string;
  Values: string;
  "Business Model": string;
  "5C Analysis Company": string;
  "5C Analysis Collaborators": string;
  "5C Analysis Customers": string;
  "5C Analysis Competitors": string;
  "5C Analysis Climate": string;
  "SWOT Analysis Strengths": string;
  "SWOT Analysis Weaknesses": string;
  "SWOT Analysis Opportunities": string;
  "SWOT Analysis Threats": string;
  "Core Capabilities Capability 1": string;
  "Core Capabilities Capability 2": string;
  "Core Capabilities Capability 3": string;
  "Core Capabilities Capability 4": string;
  "Short Term Goals Financial": string;
  "Short Term Goals Product": string;
  "Short Term Goals Marketing": string;
  "Short Term Goals Staffing": string;
  "Long Term Goals Financial": string;
  "Long Term Goals Product": string;
  "Long Term Goals Marketing": string;
  "Long Term Goals Staffing": string;
  "Target Market": string;
  "Target Market Research Tactics": string;
  "Target Market’s Pain Points": string;
  "Target Market’s Current Solutions and Need": string;
  "Buyer Persona": string;
  "Buyer’s Buying Cycle": string;
  "Unique Selling Proposition": string;
  "Marketing Mix (4P’s) Product": string;
  "Marketing Mix (4P’s) Price": string;
  "Marketing Mix (4P’s) Place": string;
  "Marketing Mix (4P’s) Promotion": string;
}

export interface BusinessPlanSlice {
  businessPlanData: BusinessPlanData;
  setExecutiveSummary: (executiveSummary: string) => void;
  setProblemStatement: (problemStatement: string) => void;
  setSolution: (solution: string) => void;
  setMission: (misson: string) => void;
  setVision: (vision: string) => void;
  setValues: (values: string) => void;
  setBusinessModel: (businessModel: string) => void;
  setFivecanalysus_Company: (company: string) => void;
  setFivecanalysus_Collaborators: (collaborators: string) => void;
  setFivecanalysus_Customers: (customers: string) => void;
  setFivecanalysus_Competitors: (competitors: string) => void;
  setFivecanalysus_Climate: (climate: string) => void;
  setSWOTAnalysisStrengths: (strengths: string) => void;
  setSWOTAnalysisWeaknesses: (weaknesses: string) => void;
  setSWOTAnalysisOpportunities: (opportunities: string) => void;
  setSWOTAnalysisThreats: (threats: string) => void;
  setCoreCapabilitiesCapability1: (capability1: string) => void;
  setCoreCapabilitiesCapability2: (capability2: string) => void;
  setCoreCapabilitiesCapability3: (capability3: string) => void;
  setCoreCapabilitiesCapability4: (capability4: string) => void;
  setShortTermGoalsFinancial: (financial: string) => void;
  setShortTermGoalsProduct: (product: string) => void;
  setShortTermGoalsMarketing: (marketing: string) => void;
  setShortTermGoalsStaffing: (staffing: string) => void;
  setLongTermGoalsFinancial: (financial: string) => void;
  setLongTermGoalsProduct: (product: string) => void;
  setLongTermGoalsMarketing: (marketing: string) => void;
  setLongTermGoalsStaffing: (staffing: string) => void;
  setTargetMarket: (targetMarket: string) => void;
  setTargetMarketResearch: (targetMarketResearch: string) => void;
  setTargetMarketPainPoints: (targetMarketPainPoints: string) => void;
  setTargetMarketCurrentSolutions: (
    targetMarketCurrentSolutions: string
  ) => void;
  setBuyerPersonas: (buyerPersonas: string) => void;
  setBuyerCycle: (buyerCycle: string) => void;
  setUniqueSelling: (uniqueSelling: string) => void;
  setMarketingMixProduct: (product: string) => void;
  setMarketingMixPrice: (price: string) => void;
  setMarketingMixPlace: (place: string) => void;
  setMarketingMixPromotion: (promotion: string) => void;
}

export const createBusinessPlanSlice: StateCreator<BusinessPlanSlice> = (
  set,
  get
) => ({
  businessPlanData: {
    "Executive Summary": "",
    "Problem Statement": "",
    Solution: "",
    Mission: "",
    Vision: "",
    Values: "",
    "Business Model": "",
    "5C Analysis Company": "",
    "5C Analysis Collaborators": "",
    "5C Analysis Customers": "",
    "5C Analysis Competitors": "",
    "5C Analysis Climate": "",
    "SWOT Analysis Strengths": "",
    "SWOT Analysis Weaknesses": "",
    "SWOT Analysis Opportunities": "",
    "SWOT Analysis Threats": "",
    "Core Capabilities Capability 1": "",
    "Core Capabilities Capability 2": "",
    "Core Capabilities Capability 3": "",
    "Core Capabilities Capability 4": "",
    "Short Term Goals Financial": "",
    "Short Term Goals Product": "",
    "Short Term Goals Marketing": "",
    "Short Term Goals Staffing": "",
    "Long Term Goals Financial": "",
    "Long Term Goals Product": "",
    "Long Term Goals Marketing": "",
    "Long Term Goals Staffing": "",
    "Target Market": "",
    "Target Market Research Tactics": "",
    "Target Market’s Pain Points": "",
    "Target Market’s Current Solutions and Need": "",
    "Buyer Persona": "",
    "Buyer’s Buying Cycle": "",
    "Unique Selling Proposition": "",
    "Marketing Mix (4P’s) Product": "",
    "Marketing Mix (4P’s) Price": "",
    "Marketing Mix (4P’s) Place": "",
    "Marketing Mix (4P’s) Promotion": "",
  },
  setExecutiveSummary: (executiveSummary: string) => {
    const businessPlanData = get().businessPlanData;
    businessPlanData["Executive Summary"] = executiveSummary;

    set({ businessPlanData });
  },
  setProblemStatement: (problemStatement: string) => {
    const businessPlanData = get().businessPlanData;
    businessPlanData["Problem Statement"] = problemStatement;

    set({ businessPlanData });
  },
  setSolution: (solution: string) => {
    const businessPlanData = get().businessPlanData;
    businessPlanData["Solution"] = solution;

    set({ businessPlanData });
  },
  setMission: (mission: string) => {
    const businessPlanData = get().businessPlanData;
    businessPlanData["Mission"] = mission;

    set({ businessPlanData });
  },
  setVision: (vision: string) => {
    const businessPlanData = get().businessPlanData;
    businessPlanData["Vision"] = vision;

    set({ businessPlanData });
  },
  setValues: (values: string) => {
    const businessPlanData = get().businessPlanData;
    businessPlanData["Values"] = values;

    set({ businessPlanData });
  },
  setBusinessModel: (businessModel: string) => {
    const businessPlanData = get().businessPlanData;
    businessPlanData["Business Model"] = businessModel;

    set({ businessPlanData });
  },
  setFivecanalysus_Company: (company: string) => {
    const businessPlanData = get().businessPlanData;
    businessPlanData["5C Analysis Company"] = company;

    set({ businessPlanData });
  },
  setFivecanalysus_Collaborators: (collaborators: string) => {
    const businessPlanData = get().businessPlanData;
    businessPlanData["5C Analysis Collaborators"] = collaborators;

    set({ businessPlanData });
  },
  setFivecanalysus_Customers: (customers: string) => {
    const businessPlanData = get().businessPlanData;
    businessPlanData["5C Analysis Customers"] = customers;

    set({ businessPlanData });
  },
  setFivecanalysus_Competitors: (competitors: string) => {
    const businessPlanData = get().businessPlanData;
    businessPlanData["5C Analysis Competitors"] = competitors;

    set({ businessPlanData });
  },
  setFivecanalysus_Climate: (climate: string) => {
    const businessPlanData = get().businessPlanData;
    businessPlanData["5C Analysis Climate"] = climate;

    set({ businessPlanData });
  },
  setSWOTAnalysisStrengths: (strengths: string) => {
    const businessPlanData = get().businessPlanData;
    businessPlanData["SWOT Analysis Strengths"] = strengths;

    set({ businessPlanData });
  },
  setSWOTAnalysisWeaknesses: (weaknesses: string) => {
    const businessPlanData = get().businessPlanData;
    businessPlanData["SWOT Analysis Weaknesses"] = weaknesses;

    set({ businessPlanData });
  },
  setSWOTAnalysisOpportunities: (opportunities: string) => {
    const businessPlanData = get().businessPlanData;
    businessPlanData["SWOT Analysis Opportunities"] = opportunities;

    set({ businessPlanData });
  },
  setSWOTAnalysisThreats: (threats: string) => {
    const businessPlanData = get().businessPlanData;
    businessPlanData["SWOT Analysis Threats"] = threats;

    set({ businessPlanData });
  },
  setCoreCapabilitiesCapability1: (capability1: string) => {
    const businessPlanData = get().businessPlanData;
    businessPlanData["Core Capabilities Capability 1"] = capability1;

    set({ businessPlanData });
  },
  setCoreCapabilitiesCapability2: (capability2: string) => {
    const businessPlanData = get().businessPlanData;
    businessPlanData["Core Capabilities Capability 2"] = capability2;

    set({ businessPlanData });
  },
  setCoreCapabilitiesCapability3: (capability3: string) => {
    const businessPlanData = get().businessPlanData;
    businessPlanData["Core Capabilities Capability 3"] = capability3;

    set({ businessPlanData });
  },
  setCoreCapabilitiesCapability4: (capability4: string) => {
    const businessPlanData = get().businessPlanData;
    businessPlanData["Core Capabilities Capability 4"] = capability4;

    set({ businessPlanData });
  },
  setShortTermGoalsFinancial: (financial: string) => {
    const businessPlanData = get().businessPlanData;
    businessPlanData["Short Term Goals Financial"] = financial;

    set({ businessPlanData });
  },
  setShortTermGoalsProduct: (product: string) => {
    const businessPlanData = get().businessPlanData;
    businessPlanData["Short Term Goals Product"] = product;

    set({ businessPlanData });
  },
  setShortTermGoalsMarketing: (marketing: string) => {
    const businessPlanData = get().businessPlanData;
    businessPlanData["Short Term Goals Marketing"] = marketing;

    set({ businessPlanData });
  },
  setShortTermGoalsStaffing: (staffing: string) => {
    const businessPlanData = get().businessPlanData;
    businessPlanData["Short Term Goals Staffing"] = staffing;

    set({ businessPlanData });
  },
  setLongTermGoalsFinancial: (financial: string) => {
    const businessPlanData = get().businessPlanData;
    businessPlanData["Long Term Goals Financial"] = financial;

    set({ businessPlanData });
  },
  setLongTermGoalsProduct: (product: string) => {
    const businessPlanData = get().businessPlanData;
    businessPlanData["Long Term Goals Product"] = product;

    set({ businessPlanData });
  },
  setLongTermGoalsMarketing: (marketing: string) => {
    const businessPlanData = get().businessPlanData;
    businessPlanData["Long Term Goals Marketing"] = marketing;

    set({ businessPlanData });
  },
  setLongTermGoalsStaffing: (staffing: string) => {
    const businessPlanData = get().businessPlanData;
    businessPlanData["Long Term Goals Staffing"] = staffing;

    set({ businessPlanData });
  },
  setTargetMarket: (targetMarket: string) => {
    const businessPlanData = get().businessPlanData;
    businessPlanData["Target Market"] = targetMarket;

    set({ businessPlanData });
  },
  setTargetMarketResearch: (targetMarketResearch: string) => {
    const businessPlanData = get().businessPlanData;
    businessPlanData["Target Market Research Tactics"] = targetMarketResearch;

    set({ businessPlanData });
  },
  setTargetMarketPainPoints: (targetMarketPainPoints: string) => {
    const businessPlanData = get().businessPlanData;
    businessPlanData["Target Market’s Pain Points"] = targetMarketPainPoints;

    set({ businessPlanData });
  },
  setTargetMarketCurrentSolutions: (targetMarketCurrentSolutions: string) => {
    const businessPlanData = get().businessPlanData;
    businessPlanData["Target Market’s Current Solutions and Need"] =
      targetMarketCurrentSolutions;

    set({ businessPlanData });
  },
  setBuyerPersonas: (buyerPersonas: string) => {
    const businessPlanData = get().businessPlanData;
    businessPlanData["Buyer Persona"] = buyerPersonas;

    set({ businessPlanData });
  },
  setBuyerCycle: (buyerCycle: string) => {
    const businessPlanData = get().businessPlanData;
    businessPlanData["Buyer’s Buying Cycle"] = buyerCycle;

    set({ businessPlanData });
  },
  setUniqueSelling: (uniqueSelling: string) => {
    const businessPlanData = get().businessPlanData;
    businessPlanData["Unique Selling Proposition"] = uniqueSelling;

    set({ businessPlanData });
  },
  setMarketingMixProduct: (product: string) => {
    const businessPlanData = get().businessPlanData;
    businessPlanData["Marketing Mix (4P’s) Product"] = product;

    set({ businessPlanData });
  },
  setMarketingMixPrice: (price: string) => {
    const businessPlanData = get().businessPlanData;
    businessPlanData["Marketing Mix (4P’s) Price"] = price;

    set({ businessPlanData });
  },
  setMarketingMixPlace: (place: string) => {
    const businessPlanData = get().businessPlanData;
    businessPlanData["Marketing Mix (4P’s) Place"] = place;

    set({ businessPlanData });
  },
  setMarketingMixPromotion: (promotion: string) => {
    const businessPlanData = get().businessPlanData;
    businessPlanData["Marketing Mix (4P’s) Promotion"] = promotion;

    set({ businessPlanData });
  },
});

import { StateCreator } from "zustand";

interface StartUp {
  id: string;
  isActive: boolean;
  isFounder: boolean;
  jobTitle: string;
  startupId: string;
  startupName: string;
  startupType: string;
}

interface NewStartupData {
  companyName: string;
  companyType: string;
  companyIndustry: string;
  companySpecific: string;
  companyDescription: string;
}

export interface StartupSlice {
  startupData: {
    startupList: Array<StartUp>;
    newStartupData: NewStartupData;
    selectedStartup: Array<string>;
  };
  setNewCompanyName: (newCompanyName: string) => void;
  setSelectedStartup: (startUpId: string, startUpName: string) => void;
  emptyStartupList: () => void;
  setStartUpList: (startuplist: Array<StartUp>) => void;
  removeStartUp: (id: string) => void;
  resetStartUps: () => void;
  setCompanyIndustry: (industry: string) => void;
  setCompanySpecific: (specific: string) => void;
  setCompanyDescription: (description: string) => void;
}

export const createStartupSlice: StateCreator<StartupSlice> = (set, get) => ({
  startupData: {
    startupList: [],
    newStartupData: {
      companyName: "",
      companyType: "StartUp",
      companyIndustry: "",
      companySpecific: "",
      companyDescription: "",
    },
    selectedStartup: ["", ""],
    problemStatement: "",
  },
  setNewCompanyName: (newCompanyName: string) => {
    const startupData = get().startupData;
    startupData.newStartupData.companyName = newCompanyName;

    set({ startupData });
  },
  setSelectedStartup: (startUpId: string, startUpName: string) => {
    const startupData = get().startupData;

    startupData.selectedStartup[0] = startUpId;
    startupData.selectedStartup[1] = startUpName;

    set({ startupData });
  },
  emptyStartupList: () => {
    const startupData = get().startupData;
    startupData.startupList = [];

    set({ startupData });
  },
  setStartUpList: (startuplist: Array<StartUp>) => {
    const startupData = get().startupData;
    startupData.startupList = startuplist;
    set({ startupData });
  },
  removeStartUp: (id: string) => {
    const startupData = get().startupData;
    const temp = startupData.startupList.filter((item) => item.id !== id);
    startupData.startupList = temp;
    set({ startupData });
  },
  resetStartUps: () => {
    const startupData = get().startupData;
    startupData.startupList = [];
    startupData.selectedStartup = ["", ""];

    set({ startupData });
  },
  setCompanyIndustry: (industry: string) => {
    const startupData = get().startupData;
    startupData.newStartupData.companyIndustry = industry;

    set({ startupData });
  },
  setCompanySpecific: (specific: string) => {
    const startupData = get().startupData;
    startupData.newStartupData.companySpecific = specific;

    set({ startupData });
  },
  setCompanyDescription: (description: string) => {
    const startupData = get().startupData;
    startupData.newStartupData.companyDescription = description;

    set({ startupData });
  },
});

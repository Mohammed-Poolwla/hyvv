import { create } from "zustand";

import {
  BusinessPlanSlice,
  createBusinessPlanSlice,
} from "./slices/businessPlanSlice";
import { createEmployeesSlice, EmployeesSlice } from "./slices/employeesSlice";
import {
  createFreelancerProfileSlice,
  FreelancerProfileSlice,
} from "./slices/freelancerProfileSlice";
import { createManageSlice, ManageSlice } from "./slices/manageSlice";
import { createStartupSlice, StartupSlice } from "./slices/startupSlice";
import { createUserTypeSlice, UserTypeSlice } from "./slices/userTypeSlice";

import { devtools, persist } from "zustand/middleware";

type StoreState = ManageSlice &
  FreelancerProfileSlice &
  UserTypeSlice &
  StartupSlice &
  EmployeesSlice &
  BusinessPlanSlice;

export const useAppStore = create<StoreState>()(
  persist(
    devtools((...props) => ({
      ...createManageSlice(...props),
      ...createFreelancerProfileSlice(...props),
      ...createUserTypeSlice(...props),
      ...createStartupSlice(...props),
      ...createEmployeesSlice(...props),
      ...createBusinessPlanSlice(...props),
    })),
    { name: "HYVV" }
  )
);

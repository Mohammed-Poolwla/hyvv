import { StateCreator } from "zustand";

export type UserType = "Founder" | "Freelancer" | null;

export interface UserTypeSlice {
  userType: UserType;
  setUserType: (type: UserType) => void;
}

export const createUserTypeSlice: StateCreator<UserTypeSlice> = (set) => ({
  userType: null,
  setUserType: (type: UserType) => {
    set({ userType: type });
  },
});

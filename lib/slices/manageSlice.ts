import { StateCreator } from "zustand";
export interface ManageSubTaskItemChild {
  title: string;
  checked: boolean;
}

export interface ManageSubTaskItem {
  title: string;
  children: Array<ManageSubTaskItemChild>;
}

export interface ManageCommentItem {
  author: string;
  date: Date;
  read: boolean;
  content: string;
  file?: string[];
}

export interface ManageItem {
  id?: string;
  title: string;
  icon?: string;
  subTask?: Array<ManageItem>;
  parentId?: string;
  topParentId?: string;
  freelancer?: Array<string>;
  comment?: Array<ManageCommentItem>;
  endDate?: Date;
  createDate?: Date;
  modifiedDate?: Date;
  budget?: number;
  collapse?: boolean;
}

export interface ManageData {
  staged: { items: Array<ManageItem> };
  plan: { items: Array<ManageItem> };
  offer: { items: Array<ManageItem> };
  starting: { items: Array<ManageItem> };
  in_progress: { items: Array<ManageItem> };
  for_review: { items: Array<ManageItem> };
  complete: { items: Array<ManageItem> };
}

type ManageType =
  | "staged"
  | "plan"
  | "offer"
  | "starting"
  | "for_review"
  | "complete";

export interface ManageSlice {
  manageData: ManageData;
  moveToPlan: (id: string, title: string, subTask) => void;
  moveToBuild: (id: string) => void;
  setCollapseByType: (title: string, type: ManageType) => void;
  setManageDataByKey: (data: object, key: string) => void;
  setManageData: (data: object) => void;
  setManageDataByKeys: (data: Array<object>, keys: Array<string>) => void;
  moveItemFromTo: (id: string, from: string, to: string, type?: string) => void;
}

export const createManageSlice: StateCreator<ManageSlice> = (set, get) => ({
  manageData: {
    staged: { items: [] },
    plan: { items: [] },
    offer: { items: [] },
    starting: { items: [] },
    in_progress: { items: [] },
    for_review: { items: [] },
    complete: { items: [] },
  },
  moveToPlan: (id: string, title: string, subTask) => {
    const manageData = get().manageData;

    const itemData = {
      title: title,
      subTask: subTask,
      id: id,
    };
    const planData = manageData.plan.items;
    planData.push(itemData);

    manageData.plan.items = planData;

    set({ manageData });
  },
  moveToBuild: (id: string) => {
    const manageData = get().manageData;

    const planData = manageData.plan.items.filter((item) => item.id !== id);
    manageData.plan.items = planData;

    set({ manageData });
  },
  setCollapseByType: (title: string, type: ManageType) => {
    const manageData = get().manageData;

    const tempItemsData = manageData[type].items.map((item) => {
      if (item.title === title) {
        return { ...item, collapse: !item.collapse };
      } else {
        return { ...item, collapse: false };
      }
    });
    manageData[type].items = tempItemsData;

    set({ manageData });
  },
  setManageDataByKey: (data: object, key: string) => {
    const manageData = get().manageData;

    manageData[key].items = data;

    set({ manageData });
  },
  setManageData: (data: object) => {
    const manageData = get().manageData;

    Object.keys(data).map((item: string) => {
      manageData[item].items = data[item];
    });

    set({ manageData });
  },
  setManageDataByKeys: (data: Array<object>, keys: Array<string>) => {
    const manageData = get().manageData;

    for (let i = 0; i < data.length; i++) {
      manageData[keys[i]] = data[i];
    }

    set({ manageData });
  },
  moveItemFromTo: (id: string, from: string, to: string, type?: string) => {
    const manageData = get().manageData;

    const itemData = manageData[from].items.find((item) => item.id == id);

    if (type !== "clone") {
      const fromData = manageData[from].items.filter((item) => item.id !== id);
      manageData[from].items = fromData;
    }

    const toData = manageData[to].items;
    toData.push(itemData);

    manageData[to].items = toData;

    set({ manageData });
  },
});

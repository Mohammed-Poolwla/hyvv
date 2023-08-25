import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

import BreadcrumbHeader from "../../base/Breadcrumb";

import { trpc } from "../../../utils/trpc";
import AvailableFreelancer from "../task/AvailableFreelancer/AvailableFreelancer";
import TaskDetails from "../task/TaskDetails/TaskDetails";
import TaskList from "../task/TaskList/TaskList";

import { IAvailableFreelancerCard } from "../../cards/AvailableFreelancerCard/AvailableFreelancerCard";

export interface IOfferContent {
  description: string;
  setDescription: Dispatch<SetStateAction<string>>;
  availableFreelancers: Array<IAvailableFreelancerCard>;
}

const OfferContent: React.FC<IOfferContent> = ({
  description,
  setDescription,
  availableFreelancers,
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const id = Array.isArray(router.query.id)
    ? router.query.id[0]
    : router.query.id;

  const [data, setData] = useState([]);
  const updateBuildMutation = trpc.build.update.useMutation();
  const { data: mData } = trpc.build.listByTopParentId.useQuery(id);
  useEffect(() => {
    if (mData) setData(mData.data);
  }, [mData]);
  const parentData = data.find((item) => item.parentId === "");
  const childData = data
    .filter((item) => item.parentId !== "")
    .map((item) => {
      if (item.parentId == item.topParentId) return { ...item, parentId: "0" };
      else return item;
    });

  const moveHandle = () => {
    setLoading(true);
    updateBuildMutation.mutate(
      {
        id: data.find((item) => item.parentId === "").id,
        status: "STAGED",
      },
      {
        onSuccess: () => {
          setLoading(false);
          router.push("/manage");
        },
      }
    );
  };

  return (
    <div className="scroll-display-none flex flex-col gap-4 overflow-y-auto bg-[#fafafa] p-6">
      <BreadcrumbHeader
        parentName="Manage"
        headerName="offer"
        id={parentData?.id}
        showIcon={false}
        showRightButton={true}
        rightButton={
          <Button
            isLoading={loading}
            variant="outline"
            onClick={moveHandle}
            spinnerPlacement="start"
            loadingText="Move to Staged"
          >
            Move to Staged
          </Button>
        }
      />
      <div className="grid h-full grid-cols-2 gap-6">
        <div className="flex h-full flex-col gap-6">
          <TaskDetails
            description={description}
            setDescription={setDescription}
          />
          <TaskList title={parentData?.title} treeData={childData} />
        </div>
        <div className="h-full rounded-md bg-white shadow-md">
          <AvailableFreelancer
            availableFreelancers={availableFreelancers}
            treeData={childData}
          />
        </div>
      </div>
    </div>
  );
};

export default OfferContent;

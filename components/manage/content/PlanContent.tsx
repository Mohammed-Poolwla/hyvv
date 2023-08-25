import { useEffect, useState } from "react";

import { useRouter } from "next/router";

import { Button } from "@chakra-ui/react";

import BreadcrumbHeader from "../../base/Breadcrumb";
import BuildTask from "../plan/BuildTask/BuildTask";
import Comments from "../plan/Comments/Comments";
import ManageDetails from "../plan/ManageDetails/ManageDetails";
import TeamDetails from "../plan/TeamDetails/TeamDetails";

import useCustomToast from "../../../utils/toast";
import { trpc } from "../../../utils/trpc";
import { CommentItem } from "../plan/Comments/Comments";

const PlanContent = () => {
  const router = useRouter();
  const id = Array.isArray(router.query.id)
    ? router.query.id[0]
    : router.query.id;

  const showToast = useCustomToast();

  const [freelancer, setFreelancer] = useState<any[]>([]);

  const updateBuildMutation = trpc.build.update.useMutation();
  const addDetailMutation = trpc.taskDetail.create.useMutation();
  const [data, setData] = useState([]);

  const [comments, setComments] = useState<Array<CommentItem>>([
    {
      avatar: "/avatar1.png",
      name: "Jasson Hodd",
      date: "May 7, 2023 at 2:00 PM",
      comment: "Great idea man! Thanks",
    },
    {
      avatar: "/avatar1.png",
      name: "Sumail",
      date: "May 7, 2023 at 1:30 PM",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
  ]);

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

  const validateData = () => {
    const error: string[] = [];
    if (freelancer.length === 0) {
      error.push("Choose a freelancer to assign assignments to");
    }
    if (error.length === 0) return false;
    else {
      showToast({
        status: "error",
        description: error.toString(),
      });
      return true;
    }
  };

  const publishHandle = () => {
    const validation: boolean = validateData();

    if (!validation) {
      updateBuildMutation.mutate(
        {
          id: parentData.id,
          status: "OFFER",
        },
        {
          onSuccess: () => {
            addDetailMutation.mutate(
              {
                taskId: parentData.id,
                createDate: new Date(),
                endDate: new Date(),
                description: parentData.title,
                budget: Math.floor(Math.random() * 10000),
                comment: [
                  {
                    author: "Davide John",
                    date: new Date().toString(),
                    read: true,
                    content: "Good Job",
                  },
                ],
                freelancer: freelancer.map((item) => item.name),
              },
              {
                onSuccess: () => {
                  router.push("/manage");
                },
              }
            );
          },
        }
      );
    }
  };
  return (
    <div className={`min-w-[332px] flex-1 overflow-y-auto bg-[#fafafa] p-6`}>
      <BreadcrumbHeader
        parentName="Manage"
        headerName="plan"
        id={parentData?.id}
        showIcon={true}
        rightButton={
          <Button colorScheme="main" onClick={publishHandle}>
            Publish to Marketplace
          </Button>
        }
        showRightButton={true}
      />
      <div className="mt-4 grid grid-cols-3 rounded-md bg-white shadow-md">
        <div className="col-span-2 border-r border-[#d8d8d8] p-4">
          <ManageDetails />
        </div>
        <TeamDetails
          assignedFreelancers={freelancer}
          setAssignedFreelancers={setFreelancer}
        />
      </div>
      <div className="mt-4 rounded-md bg-white p-4 shadow-md">
        <BuildTask id={parentData?.id} data={childData} />
      </div>
      <div className="mt-4 rounded-md bg-white p-4 shadow-md">
        <Comments comments={comments} setComments={setComments} />
      </div>
    </div>
  );
};

export default PlanContent;

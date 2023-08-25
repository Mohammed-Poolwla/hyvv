import { ManageItem } from "../../../../lib/slices/manageSlice";
import { useAppStore } from "../../../../lib/store";
import { trpc } from "../../../../utils/trpc";

import { Button, Text } from "@chakra-ui/react";
import Link from "next/link";
import StaticTreeView from "../../../base/TreeView/StaticTreeView";
import EditIcon from "../../../icons/EditIcon";

export interface IBuildTaskItem {
  id?: string;
  data?: Array<ManageItem>;
}

// temp data
const BuildTask: React.FC<IBuildTaskItem> = ({ id, data }) => {
  const { moveToBuild } = useAppStore();
  const updateBuildMutation = trpc.build.update.useMutation();
  const toBuildhandle = () => {
    console.log(id);
    updateBuildMutation.mutate({
      id: id,
      status: "BUILD",
    });
    moveToBuild(id);
  };

  return (
    <div>
      <div className="mb-3 flex justify-between">
        <div>
          <Text fontSize={"20px"} color={"#000"}>
            Build Task
          </Text>
          <Text fontSize={"15px"} color={"#84818A"}>
            Lorem Ipsum is simply dummy text of the printing{" "}
          </Text>
        </div>
        <Button
          size={"sm"}
          leftIcon={<EditIcon />}
          background={"#fff"}
          _hover={{ background: "#f0f0f0" }}
          className="border border-[#e4e4e4] shadow-md"
          onClick={toBuildhandle}
        >
          <Link href={"/build"}>Back to build</Link>
        </Button>
      </div>
      <StaticTreeView data={data} />
    </div>
  );
};

export default BuildTask;

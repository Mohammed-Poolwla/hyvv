import { useAppStore } from "../../../../lib/store";
import { list_to_tree } from "../../../../utils/functions/convert";
import { trpc } from "../../../../utils/trpc";

import { Badge, Collapse, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import useCustomToast from "../../../../utils/toast";
import SelectMenu from "../../../base/Select/SelectMenu";
import CirclePlusIcon from "../../../icons/CirclePlusIcon";
import RightArrowIcon from "../../../icons/RightArrowIcon";
import CustomItem from "./components/CustomItem";

const ManageLeftSidebar = () => {
  const {
    startupData,
    manageData,
    moveToBuild,
    setCollapseByType,
    setManageData,
  } = useAppStore();
  const showToast = useCustomToast();

  const startUpId = startupData.selectedStartup[0];

  const [show, setShow] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [buildStateDataArray, setBuildStateDataArray] = useState([]);
  const { data: mData, isSuccess } = trpc.build.list.useQuery({
    startUpId: startUpId,
  });

  useEffect(() => {
    if (isSuccess) {
      if (mData.error !== null) {
        setError(true);
      } else {
        let manageDataTemp: any = {
          staged: [],
          plan: [],
          offer: [],
        };

        const temp = [...list_to_tree(JSON.parse(JSON.stringify(mData.data)))];
        temp.map((item) => {
          if (!item.icon) {
            item.icon = "/startupicon.png";
          }
          item.subTask = [...item.children];
          const status = item.status;

          delete item.children;

          if (manageDataTemp[status.toLowerCase()] !== undefined) {
            if (item.tasks.length) {
              const tasks: any = { ...item.tasks[0] };
              delete item.tasks;
              delete tasks.id;
              item = { ...item, ...tasks };
            }
            manageDataTemp[status.toLowerCase()].push({ ...item });
          }
        });
        setManageData(manageDataTemp);
        setError(false);
      }
    }
  }, [mData]);

  useEffect(() => {
    if (error) {
      showToast({
        status: "error",
        description: "Please check server connection!",
      });
    }
  }, [error]);

  useEffect(() => {
    setBuildStateDataArray(
      ["staged", "offer", "plan"].map((key) => {
        return {
          ...manageData[key],
          title: key,
          itemIcon:
            key === "staged" ? (
              <RightArrowIcon />
            ) : key === "plan" ? (
              <CirclePlusIcon />
            ) : (
              ""
            ),
        };
      })
    );
  }, [
    manageData["staged"].items,
    manageData["offer"].items,
    manageData["plan"].items,
  ]);

  return (
    <div className="w-[300px] overflow-auto border-r">
      <div className="grid grid-cols-2 gap-2 p-4">
        <SelectMenu
          data={[{ label: "week" }]}
          selected="week"
          label="View By"
        />

        <SelectMenu
          data={[{ label: "one-time" }]}
          selected="one-time"
          label="Type"
        />
      </div>
      <div>
        {buildStateDataArray.map((buildItem) => {
          return (
            <div key={buildItem.title}>
              <hr />
              <div className="flex flex-col gap-y-2 p-4">
                <div className="flex justify-between">
                  <Text
                    fontSize="14px"
                    color="#a7a7a7"
                    className="font-Manrope uppercase"
                  >
                    {buildItem.title}
                  </Text>
                  <BsThreeDots color="#a7a7a7" />
                </div>
                {buildItem.title === "plan" ? (
                  <>
                    {buildItem.items.slice(0, 2).map((item) => {
                      return (
                        <CustomItem
                          key={item.title}
                          icon={item.icon}
                          subIcon={buildItem.itemIcon}
                          collapse={item.collapse}
                          setCollapse={setCollapseByType}
                          checkable={false}
                          type={buildItem.title}
                          title={item.title}
                          moveToBuild={moveToBuild}
                          id={item.id}
                          subTask={item.subTask}
                        />
                      );
                    })}
                    <Collapse in={show}>
                      <div className="flex flex-col gap-y-2">
                        {buildItem.items.slice(2).map((item) => {
                          return (
                            <CustomItem
                              key={item.title}
                              icon={item.icon}
                              subIcon={buildItem.itemIcon}
                              collapse={item.collapse}
                              setCollapse={setCollapseByType}
                              checkable={false}
                              type={buildItem.title}
                              title={item.title}
                              moveToBuild={moveToBuild}
                              id={item.id}
                              subTask={item.subTask}
                            />
                          );
                        })}
                      </div>
                    </Collapse>
                    {buildItem.items.length > 2 ? (
                      <div
                        className="cursor-pointer"
                        onClick={() => setShow(!show)}
                      >
                        <Text fontSize="16px" color="#08657e">
                          View {show ? "Less" : "More"} &gt;
                        </Text>
                      </div>
                    ) : (
                      ""
                    )}
                  </>
                ) : (
                  buildItem.items.map((item) => {
                    return (
                      <CustomItem
                        key={item.title}
                        icon={item.icon}
                        subIcon={
                          buildItem.title !== "offer" ? (
                            buildItem.itemIcon
                          ) : (
                            <Badge
                              variant="solid"
                              colorScheme="red"
                              width="24px"
                              height="24px"
                              borderRadius="3xl"
                            >
                              <p className="ml-[5px] mt-[2px]">3</p>
                            </Badge>
                          )
                        }
                        id={item.id}
                        collapse={item.collapse}
                        setCollapse={setCollapseByType}
                        checkable={false}
                        type={buildItem.title}
                        title={item.title}
                        subTask={item.subTask}
                      />
                    );
                  })
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ManageLeftSidebar;

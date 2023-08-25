import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import TreeView, { flattenTree } from "react-accessible-treeview";
import { FiXCircle } from "react-icons/fi";
import { list_to_tree } from "../../../../utils/functions/convert";
interface IStaticTreeView {
  data: any;
  topParent?: ReactNode;
  className?: string;
}
interface BuildBar {
  id: string;
  title: string;
  name: string;
  parentId: string;
  children: BuildBar[];
}

const StaticTreeView: React.FC<IStaticTreeView> = ({
  data,
  topParent,
  className,
}) => {
  const removeIdKey = (arrayData) => {
    return arrayData?.map((item) => {
      const { name, children } = item;
      const childrenItem = removeIdKey(children || []);
      return {
        name,
        children: childrenItem,
      };
    });
  };
  const removedIdArray = removeIdKey(
    list_to_tree(
      data.map((item: BuildBar) => {
        item.name = item.title;
        return item;
      })
    )
  );
  const treeViewData = flattenTree({
    name: "",
    children: topParent
      ? [{ name: "", children: removedIdArray }]
      : removedIdArray,
  });

  const expandId = treeViewData.map((item) => item.id);
  return (
    <div className={className}>
      {expandId.length > 2 ? (
        <TreeView
          data={treeViewData}
          aria-label="Checkbox tree"
          defaultExpandedIds={expandId}
          nodeRenderer={({ element, getNodeProps, level }) => {
            return (
              <>
                <Box
                  {...getNodeProps()}
                  onClick={() => {}}
                  css={{
                    "&~ul>li": {
                      position: "relative",
                    },
                    "&~ul>li::before": {
                      content: `""`,
                      position: "absolute",
                      backgroundColor: "#dbdbdb",
                      width: "2px",
                      left: 15 * ((level - 1) * 2) + 15,
                      top: "-10px",
                      height: "calc(100%)",
                    },
                    "&~ul>li:last-child::before": {
                      height: "calc(50% + 5px)",
                    },
                    "&~ul>li:last-child:has(ul):has(li)::before": {
                      height: "30px",
                    },
                  }}
                >
                  {topParent && level === 1 ? (
                    <Box
                      className="pb-[10px]"
                      style={{ paddingLeft: 15 * ((level - 1) * 2 - 1) }}
                    >
                      {topParent}
                    </Box>
                  ) : (
                    <Box
                      className="flex items-center pb-[10px]"
                      style={{ paddingLeft: 15 * ((level - 1) * 2 - 1) }}
                    >
                      {!(level == 1) ? (
                        <div className="h-[2px] w-[15px] bg-[#dbdbdb]" />
                      ) : (
                        ""
                      )}
                      <div className="flex w-full rounded-lg border border-[#E0E0E0] bg-[#FBFBFB] p-2 pl-6 text-[#000]">
                        <div>{element.name}</div>
                      </div>
                    </Box>
                  )}
                </Box>
              </>
            );
          }}
        />
      ) : (
        <div className="flex flex-col items-center justify-center gap-2 text-[#aaa]">
          <FiXCircle size="30px" />
          No Data
        </div>
      )}
    </div>
  );
};

export default StaticTreeView;

import { Box } from "@chakra-ui/react";
import { Dispatch, ReactNode } from "react";
import TreeView, { flattenTree } from "react-accessible-treeview";
import {
  BsCircle,
  BsDashCircleFill,
  BsFillCheckCircleFill,
} from "react-icons/bs";
import { FiXCircle } from "react-icons/fi";
import { list_to_tree } from "../../../../utils/functions/convert";
interface ISelectableTree {
  data: any;
  topParent?: ReactNode;
  className?: string;
  selectedIds?: string[];
  setSelectedIds?: Dispatch<string[]>;
}
interface BuildBar {
  id: string;
  tempId: string;
  title: string;
  name: string;
  parentId: string;
  children: BuildBar[];
}

const CheckBoxIcon = ({ variant, ...rest }) => {
  switch (variant) {
    case "all":
      return <BsFillCheckCircleFill color="#08657e" {...rest} />;
    case "none":
      return <BsCircle color="#e0e2e8" {...rest} />;
    case "some":
      return <BsDashCircleFill color="#08657e" {...rest} />;
    default:
      return null;
  }
};
const SelectableTree: React.FC<ISelectableTree> = ({
  data,
  topParent,
  className,
  selectedIds,
  setSelectedIds,
}) => {
  const updatedData: any[] = list_to_tree(
    data.map((item: BuildBar) => {
      item.name = item.title;
      return item;
    })
  );
  const treeViewData = flattenTree({
    name: "",
    id: "parent",
    children: topParent
      ? [
          {
            name: "",
            id: "subParent",
            children: updatedData,
          },
        ]
      : updatedData,
  });

  const expandId = treeViewData.map((item) => item.id);
  const handleSelectItem = (selectedItem) => {
    const tempSelectedItem: string[] = treeViewData
      .filter((item) => item.children && item.children.length === 0)
      .filter((item) =>
        Array.from(selectedItem.treeState.selectedIds).includes(item.id)
      )
      .map((item) => String(item.id));
    setSelectedIds(tempSelectedItem);
  };
  return (
    <div className={className}>
      {expandId.length > 2 ? (
        <TreeView
          data={treeViewData}
          aria-label="Checkbox tree"
          multiSelect
          propagateSelectUpwards
          propagateSelect
          togglableSelect
          onSelect={handleSelectItem}
          selectedIds={selectedIds}
          defaultExpandedIds={expandId}
          nodeRenderer={({
            element,
            getNodeProps,
            isSelected,
            isHalfSelected,
            handleSelect,
            level,
          }) => {
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
                      <div className="flex w-full items-center gap-x-2 rounded-lg border border-[#E0E0E0] bg-[#FBFBFB] p-2 text-[#000]">
                        <CheckBoxIcon
                          onClick={(e) => {
                            handleSelect(e);
                            e.stopPropagation();
                          }}
                          className="shrink-0 cursor-pointer"
                          variant={
                            isHalfSelected
                              ? "some"
                              : isSelected
                              ? "all"
                              : "none"
                          }
                        />
                        <span>{element.name}</span>
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

export default SelectableTree;

import React, { Dispatch } from "react";
import CheckboxTree from "react-checkbox-tree";
import {
  getCheckedListLoop,
  onCheckCellLoop,
} from "../../../../utils/loops/onSelect";
export interface ICheckableTreeView {
  treeData: Array<any>;
  setTreeData?: Dispatch<string[]>;
  checkable: boolean;
  icon: object;
}

const CheckableTreeView: React.FC<ICheckableTreeView> = ({
  treeData,
  setTreeData,
  checkable,
  icon,
}) => {
  const initNodes = (data) => {
    let nodes = [];
    data?.forEach(({ id, title, children }) => {
      nodes.push({
        label: title,
        value: id,
        children: initNodes(children),
      });
    });
    return nodes;
  };

  const nodes = initNodes(treeData);
  const checked = getCheckedListLoop(treeData);

  const setChecked = (checkedData: string[]) => {
    setTreeData(onCheckCellLoop(treeData, checkedData));
  };
  const getNodeIds = (nodes) => {
    let ids = [];
    nodes?.forEach(({ value, children }) => {
      ids = [...ids, value, ...getNodeIds(children)];
    });
    return ids;
  };

  return (
    <CheckboxTree
      nodes={nodes}
      checked={checked}
      onCheck={(checkedData) => {
        if (checkable) setChecked(checkedData);
      }}
      expanded={getNodeIds(nodes)}
      showNodeIcon={false}
      icons={icon}
    />
  );
};

export default CheckableTreeView;

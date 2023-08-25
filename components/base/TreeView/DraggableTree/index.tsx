import SortableTree from "@nosferatu500/react-sortable-tree";

import React from "react";

const DraggableTree = ({ treeData, onChange, canDrag, generateNodeProps }) => {
  return (
    <SortableTree
      treeData={treeData}
      onChange={onChange}
      canDrag={canDrag}
      generateNodeProps={generateNodeProps}
    />
  );
};

export default DraggableTree;

export default function onSelectToggleLoop(
  dataList: Array<any>,
  id: number,
  checked: boolean
) {
  const temp = dataList.map((data) => {
    return {
      ...data,
      checked: data.id === id ? checked : data.checked,
    };
  });
  let temp1 = temp.concat();
  for (let data of temp1) {
    if (data.parent == id) temp1 = onSelectToggleLoop(temp1, data.id, checked);
  }
  return temp1;
}
export function countCheckedItemsWithoutChildren(items) {
  let count = 0;
  for (let item of items) {
    if (item.checked && item.children.length === 0) {
      count++;
    }
    if (item.children.length > 0) {
      count += countCheckedItemsWithoutChildren(item.children);
    }
  }
  return count;
}
export function countItemsWithoutChildren(items) {
  let count = 0;
  for (let item of items) {
    if (item.children.length === 0) {
      count++;
    }
    if (item.children.length > 0) {
      count += countItemsWithoutChildren(item.children);
    }
  }
  return count;
}

export function onCheckCellLoop(data: Array<any>, idList: string[]) {
  const updatedArray = data.map((item) => {
    if (idList.includes(item.id)) {
      return {
        ...item,
        checked: true,
        children: onCheckCellLoop(item.children, idList),
      };
    } else {
      return {
        ...item,
        checked: false,
        children: onCheckCellLoop(item.children, idList),
      };
    }
  });
  return updatedArray;
}

export function getCheckedListLoop(data: Array<any>) {
  function getCheckedIds(obj) {
    const checkedIds = obj.checked ? [obj.id] : [];
    const childrenCheckedIds = obj.children.reduce((ids, child) => {
      const childCheckedIds = getCheckedIds(child);
      return [...ids, ...childCheckedIds];
    }, []);
    return [...checkedIds, ...childrenCheckedIds];
  }
  return data.flatMap((obj) => getCheckedIds(obj));
}

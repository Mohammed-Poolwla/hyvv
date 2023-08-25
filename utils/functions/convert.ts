export type NodeModel = {
  id: string;
  title: string;
  icon?: string;
  parentId: string;
  checked?: boolean;
  children?: Array<object>;
  subTask?: Array<object>;
  status?: string;
  tasks: Array<object>;
};

export function list_to_tree(list: NodeModel[]) {
  if (list === undefined) return [];
  const map: Record<string, number> = {};
  let node: NodeModel,
    roots: NodeModel[] = [];

  for (let i = 0; i < list.length; i += 1) {
    map[list[i].id.toString()] = i; // initialize the map
    list[i].children = []; // initialize the children
  }

  for (let i = 0; i < list.length; i += 1) {
    node = list[i];
    if (node.parentId && map[node.parentId.toString()] !== undefined) {
      // if you have dangling branches check that map[node.parentIdId] exists
      list[map[node.parentId.toString()]].children.push(node);
    } else {
      roots.push(node);
    }
  }

  return roots;
}

export function list_to_menu(list: any) {
  const temp: object = {};
  if (list === undefined) return undefined;
  list.map((group) => {
    const { id: groupId, groupTitle, sections } = group;
    temp[groupTitle] = {
      id: groupId,
      name: groupTitle,
      items: [],
    };
    sections.map((item) => {
      const { id: sectionId, sectionTitle } = item;
      temp[groupTitle]["items"].push({
        title: sectionTitle,
        id: sectionId,
      });
    });
  });

  return temp;
}

export function formatNumber(num: number) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export function roundFloatToWholeNum(floatNum) {
  const roundedNum = Math.round(floatNum);
  const sign = Math.sign(floatNum);
  return roundedNum + sign;
}

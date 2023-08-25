import TeamTreeView from "../../base/TreeView/TeamTreeView";

const Teams = () => {
  return (
    <div className="flex h-full flex-col">
      <span color="#2E2C34" className="font-Manrope text-[28px] font-semibold">
        Org Chart
      </span>
      <div className="mt-4 h-full flex-1 overflow-auto rounded-md bg-[#fff] p-4 shadow-[0_2px_5px_0px_rgba(0,0,0,0.1)]">
        <TeamTreeView />
      </div>
    </div>
  );
};

export default Teams;

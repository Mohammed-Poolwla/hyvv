import dynamic from "next/dynamic";

import Employment from "./Employment";
import Portfolio from "./Portfolio";

const Brief = dynamic(import("./Brief"), { ssr: false });
const Summary = dynamic(import("./Summary"), { ssr: false });
const Skills = dynamic(import("./Skills"), { ssr: false });

export interface IOverVview {}

const Overview: React.FC<IOverVview> = () => {
  return (
    <div className="grid w-full grid-cols-3 gap-6">
      <div className="col-span-3 flex flex-col gap-y-6 xl:col-span-2">
        <div>
          <Brief />
        </div>

        <div>
          <Summary />
        </div>

        <div>
          <Skills />
        </div>
      </div>
      <div className="col-span-3 flex flex-col gap-y-6 xl:col-span-1">
        <div>
          <Portfolio />
        </div>
        <div>
          <Employment />
        </div>
      </div>
    </div>
  );
};

export default Overview;

import MarketingNav from "./MarketingNav";

export interface IMarkteingLayout {
  tag?: string;
  title?: string;
  body?: string;
  author?: string;
  time?: string;
}

const MarkteingLayout: React.FC<IMarkteingLayout> = ({ children }) => {
  return (
    <div className="grid min-h-screen grid-cols-marketingLayout grid-rows-marketingLayout">
      <div className="fixed z-10 col-span-2 w-full bg-[white] shadow-lg backdrop-blur-sm">
        <MarketingNav />
      </div>
      <div className=" col-span-2 row-span-1 min-h-full">{children}</div>
    </div>
  );
};

export default MarkteingLayout;

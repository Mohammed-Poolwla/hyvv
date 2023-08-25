export interface INewLayout {
  tag?: string;
  title?: string;
  body?: string;
  author?: string;
  time?: string;
}

const NewLayout: React.FC<INewLayout> = ({ children }) => {
  return (
    <div className="grid min-h-screen grid-cols-appLayout grid-rows-appLayout">
      <div className="col-span-3 bg-slate-600 text-white opacity-50">
        Header
      </div>
      <div className="bg-red-600 text-white opacity-50">vertical nav</div>
      <div className="col-span-2 row-span-1 min-h-full bg-orange-600">
        {children}
      </div>
    </div>
  );
};

export default NewLayout;

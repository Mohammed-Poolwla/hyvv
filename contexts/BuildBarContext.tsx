import { createContext, useState } from "react";

interface BuildBar {
  title: string;
  icon: string;
  subBar: string[];
}

interface IGlobalBuildBarContextProps {
  buildBar: BuildBar;
  setBuildBar: (_buildBar: any) => void;
}

export const GlobalBuildBarContext = createContext<IGlobalBuildBarContextProps>(
  {
    buildBar: {
      title: "",
      icon: "",
      subBar: [],
    },
    setBuildBar: () => {},
  }
);

export const GlobalBuildBarContextProvider = ({ children }) => {
  const [buildBar, setBuildBar] = useState<BuildBar>({
    title: "",
    icon: "",
    subBar: [],
  });

  return (
    <GlobalBuildBarContext.Provider
      value={{
        buildBar: buildBar,
        setBuildBar: setBuildBar,
      }}
    ></GlobalBuildBarContext.Provider>
  );
};

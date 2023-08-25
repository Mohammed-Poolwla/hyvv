import { useSession } from "next-auth/react";
import { createContext, useState } from "react";
import AXIOS from "../services";

interface IGlobalUserContextProps {
  user: any;
  companies: any;
  loading: boolean;
  setUser: (_user: any) => void;
  setCompanies: (_companies: any) => void;
  setLoading: (_loading: boolean) => void;
}

export const GlobalUserContext = createContext<IGlobalUserContextProps>({
  user: {},
  loading: true,
  companies: [],
  setUser: () => {},
  setCompanies: () => [],
  setLoading: () => {},
});

export const GlobalUserContextProvider = ({ children }) => {
  const { status, data } = useSession();

  const [currentUser, setCurrentUser] = useState({ name: "" });
  const [currentCompanies, setCurrentCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  if (status === "authenticated") {
    if (data !== null) {
      AXIOS.defaults.headers.common["authorization"] = `Bearer ${data.user.token}`;
    }

  }

  return (
    <GlobalUserContext.Provider
      value={{
        user: currentUser,
        setUser: setCurrentUser,
        companies: currentCompanies,
        setCompanies: setCurrentCompanies,
        loading: isLoading,
        setLoading: setIsLoading,
      }}
    >
      {children}
    </GlobalUserContext.Provider>
  );
};

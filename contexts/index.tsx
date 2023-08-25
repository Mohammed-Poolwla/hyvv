import { useContext } from "react";

import { GlobalUserContext } from "./UserContext";
import { GlobalBuildBarContext } from "./BuildBarContext";

export const useGlobalUserContext = () => useContext(GlobalUserContext);
export const useGlobalBuildBarContext = () => useContext(GlobalBuildBarContext);
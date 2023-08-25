import dynamic from "next/dynamic";

import Availability from "./Availability";
import Education from "./Education/";
import Finish from "./Finish";
import NewService from "./ServiceDetails/NewService";
import ServiceDetails from "./ServiceDetails";
import WorkExperience from "./WorkExperience";

const PersonalInfo = dynamic(() => import("./PersonalInfo"), { ssr: false });

export {
  Availability,
  Education,
  PersonalInfo,
  ServiceDetails,
  WorkExperience,
  Finish,
  NewService,
};

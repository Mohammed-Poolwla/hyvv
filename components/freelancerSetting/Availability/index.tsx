import { useAppStore } from "../../../lib/store";

import TypeRadioGroup from "../../TypeRadioGroup/TypeRadioGroup";
import PaymentReceive from "./PaymentReceive";

import { IType } from "../../TypeRadioGroup/TypeRadioGroup";

const types: Array<IType> = [
  {
    title: "Full Time",
    description:
      "Contrary to poluar belief, Lorem Ipsum is not simplu random text",
    visibleFooter: false,
  },
  {
    title: "Freelance",
    description:
      "Contrary to poluar belief, Lorem Ipsum is not simplu random text",
    visibleFooter: false,
  },
];

const Availability = () => {
  const { freelancerProfileData, setWorkType } = useAppStore();

  return (
    <>
      <TypeRadioGroup
        types={types}
        type={freelancerProfileData.availability.workType}
        setType={setWorkType}
      />
      <PaymentReceive />
    </>
  );
};

export default Availability;

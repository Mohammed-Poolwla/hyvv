import React, { useState } from "react";

import SetFreelancer from "./SetFreelancer/SetFreelancer";
import SetPayment from "./SetPayment/SetPayment";

import { IAvailableFreelancerCard } from "../../../cards/AvailableFreelancerCard/AvailableFreelancerCard";

export interface IAvailableFreelancer {
  availableFreelancers: Array<IAvailableFreelancerCard>;
  treeData: Array<any>;
}

const AvailableFreelancer: React.FC<IAvailableFreelancer> = ({
  availableFreelancers,
  treeData,
}) => {
  const [isAccepted, setAccepted] = useState(false);

  const [selectedUser, setSelectedUser] = useState(0);

  return (
    <>
      {!isAccepted ? (
        <SetFreelancer
          availableFreelancers={availableFreelancers}
          setAccepted={setAccepted}
          setSelectedUser={setSelectedUser}
          treeData={treeData}
        />
      ) : (
        <SetPayment
          availableFreelancers={availableFreelancers}
          selectedUser={selectedUser}
        />
      )}
    </>
  );
};

export default AvailableFreelancer;

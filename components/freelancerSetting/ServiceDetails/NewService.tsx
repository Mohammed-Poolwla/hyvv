import { useEffect, useState } from "react";

import { useAppStore } from "../../../lib/store";

import ServiceItem from "./ServiceItem";
import TaskDetail from "./TaskDetail";

const NewService = () => {
  const { createNewService, freelancerProfileData } = useAppStore();

  const [serviceTitle, setServiceTitle] = useState(
    freelancerProfileData.serviceDetails.newService.serviceTitle
  );
  const [servicePrice, setServicePrice] = useState(
    freelancerProfileData.serviceDetails.newService.servicePrice
  );

  useEffect(() => {
    createNewService(serviceTitle, servicePrice, 0, [""]);
  }, [serviceTitle, servicePrice]);

  return (
    <>
      <div className="border-b pb-8">
        <ServiceItem
          serviceTitle={serviceTitle}
          setServiceTitle={setServiceTitle}
          servicePrice={servicePrice}
          setServicePrice={setServicePrice}
        />
      </div>
      <TaskDetail />
    </>
  );
};

export default NewService;

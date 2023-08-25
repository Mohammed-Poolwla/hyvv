import { Dispatch, SetStateAction, useState } from "react";

import { Button, FormControl, FormLabel, Text } from "@chakra-ui/react";

import SelectMenu from "../../../base/Select/SelectMenu";
import FreelancerCard, {
  IFreelancerCard,
} from "../../../cards/FreelancerCard/FreelancerCard";

type ITeamDetails = {
  assignedFreelancers: any[];
  setAssignedFreelancers: Dispatch<SetStateAction<any[]>>;
};

const TeamDetails: React.FC<ITeamDetails> = ({
  assignedFreelancers,
  setAssignedFreelancers,
}) => {
  const [assignedType, setAssignedType] = useState("freelancers");
  const [dargActive, setDragActive] = useState(false);

  const onFreelancerDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.type === "dragenter" || event.type === "dragover") {
      setDragActive(true);
    } else if (event.type === "dragleave") {
      setDragActive(false);
    }
  };

  const onFreelancerDrop = (event) => {
    event.preventDefault();
    setDragActive(false);
    let overlap = false;

    const data: IFreelancerCard = {
      avatar: event.dataTransfer.getData("avatar"),
      name: event.dataTransfer.getData("name"),
      rating: event.dataTransfer.getData("rating"),
      rank: event.dataTransfer.getData("rank"),
      hourlyRate: event.dataTransfer.getData("hourlyRate"),
      successRate: event.dataTransfer.getData("successRate"),
      job: event.dataTransfer.getData("job"),
    };

    for (let i = 0; i < assignedFreelancers.length; i++) {
      if (assignedFreelancers[i].rank === data.rank) overlap = true;
    }

    if (!overlap) {
      assignedFreelancers.push(data);
      setAssignedFreelancers([...assignedFreelancers]);
    }
  };

  return (
    <div className="p-4">
      <Text fontSize="18px" className="font-semibold text-hyvv-title-1">
        Team Details
      </Text>
      <Text fontSize="14px" className="mb-2 text-hyvv-description">
        There are many variations of passages of Lorem Ipsum available
      </Text>
      <FormControl className="mb-4">
        <FormLabel>Assign to</FormLabel>
        <SelectMenu
          data={[
            {
              label: "freelancers",
            },
            {
              label: "team",
            },
          ]}
          selected={assignedType}
          setSelected={setAssignedType}
        />
      </FormControl>
      <div className="flex flex-col gap-y-4">
        {assignedFreelancers.map((assignedFreelancer, index) => {
          return (
            <FreelancerCard
              avatar={assignedFreelancer.avatar}
              name={assignedFreelancer.name}
              rating={assignedFreelancer.rating}
              rank={assignedFreelancer.rank}
              hourlyRate={assignedFreelancer.hourlyRate}
              successRate={assignedFreelancer.successRate}
              job={assignedFreelancer.job}
              key={index}
            />
          );
        })}
        <div
          className={`${assignedFreelancers.length >= 3 ? "hidden" : ""} ${
            dargActive
              ? "border-[#08657e] bg-[#fafbfc]"
              : "border-[#c9c9cc] bg-[#fff]"
          } flex h-48 items-center justify-center rounded-md border border-dashed transition-all`}
          onDragEnter={onFreelancerDragOver}
          onDragLeave={onFreelancerDragOver}
          onDragOver={onFreelancerDragOver}
          onDrop={onFreelancerDrop}
        >
          <div>
            <Text fontSize="14px" className="font-Manrope text-hyvv-title-1">
              Drag freelancers from the list
            </Text>
            <div className="flex gap-1 pl-8">
              <Text
                fontSize="12px"
                className="ml-4 font-Manrope text-hyvv-description"
              >
                or
              </Text>
              <Button variant="link" colorScheme="main" size="sm">
                Search
              </Button>
              <Text
                fontSize="12px"
                className="font-Manrope text-hyvv-description"
              >
                here
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDetails;

import React from "react";

import { useRouter } from "next/router";

import { Text } from "@chakra-ui/react";

import { useAppStore } from "../../../lib/store";

import PurpleUserIcon from "../../icons/PurpleUserIcon";

export interface IUserTypeCard {
  description: string;
  name: string;
  comingsoon?: boolean;
}

const UserTypeCard: React.FC<IUserTypeCard> = ({
  description,
  name,
  comingsoon,
}) => {
  const router = useRouter();

  const { setUserType } = useAppStore();

  const handleOnboarding = () => {
    switch (name) {
      case "Founder":
        setUserType("Founder");
        router.push("/define?phase=new");
        break;

      case "Freelancer":
        setUserType("Freelancer");
        router.push("/freelancer/settings");
        break;

      default:
        break;
    }
  };

  return (
    <div
      className="flex cursor-pointer flex-col gap-2 rounded-lg bg-white p-4 shadow-md"
      onClick={handleOnboarding}
    >
      <div className="flex gap-2">
        <PurpleUserIcon className="mb-auto mt-auto" />
        <Text fontSize="18px" className="font-semibold text-hyvv-orange">
          {description}
        </Text>
      </div>
      <div className="m-4 flex flex-col items-center justify-center gap-4">
        <Text fontSize="40px" className="font-bold">
          {name}
        </Text>
        {comingsoon && (
          <Text fontSize="18px" className="font-semibold text-hyvv-red-2">
            Coming Soon
          </Text>
        )}
      </div>
    </div>
  );
};

export default UserTypeCard;

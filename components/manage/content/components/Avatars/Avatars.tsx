import React from "react";

import { Avatar, AvatarGroup } from "@chakra-ui/react";

export interface IAvatars {
  names: Array<string>;
}

const Avatars: React.FC<IAvatars> = ({ names }) => {
  return (
    <AvatarGroup size="xs" max={5}>
      {names.map((name, index) => {
        return <Avatar name={name} key={index} />;
      })}
    </AvatarGroup>
  );
};

export default Avatars;

import {
  Avatar,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

import { useRouter } from "next/router";
import { BsFillCaretDownFill } from "react-icons/bs";
import { signOut, useSession } from "next-auth/react";

const UserCard: React.FC = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "unauthenticated") {
    return (
      <Menu>
        <div>
          <p>error loding user</p>
        </div>
      </Menu>
    );
  }

  if (status === "loading") {
    return (
      <Menu>
        <div>
          <p>Loading...</p>
        </div>
      </Menu>
    );
  }

  const user = session.user;
  return (
    <>
      <Menu>
        <MenuButton>
          <div className="mb-auto mt-auto flex">
            <Avatar
              size="sm"
              name={user ? user.name ?? user.email : "user"}
              src={user ? user.image ?? "" : ""}
              className="m-auto"
            />
            <div className="ml-[10px]">
              <p className="text-left font-Montserrat text-sm font-medium">
                {user ? user.name ?? user.email : "user"}
              </p>
              <p className="text-left font-Montserrat text-sm font-medium text-hyvv-main">
                Pro Member
              </p>
            </div>
            <BsFillCaretDownFill className="mb-auto mt-auto pl-[5px]" />
          </div>
        </MenuButton>
        <MenuList>
          <Link href="/profile" passHref>
            <MenuItem>Profile</MenuItem>
          </Link>
          <Link href="/settings" passHref>
            <MenuItem>Settings</MenuItem>
          </Link>
          <MenuItem>Billing</MenuItem>
          <MenuDivider />
          <MenuItem onClick={()=>signOut()}>
            Sign out
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default UserCard;

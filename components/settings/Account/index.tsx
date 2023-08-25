import { useEffect, useState } from "react";

import Image from "next/image";
import { useRouter } from "next/router";

import { useUser } from "@auth0/nextjs-auth0";

import {
  Button,
  Divider,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  useDisclosure,
} from "@chakra-ui/react";

import { FcGoogle } from "react-icons/fc";

import TeamMemberItem from "../component/TeamMemberItem";

import { trpc } from "../../../utils/trpc";

import useCustomToast from "../../../utils/toast";

import { validateEmail } from "../../../utils/functions/validate";
import { signOut, useSession } from "next-auth/react";
import AXIOS from "../../../services";

const Account = () => {
  const updateUserMutation = trpc.user.updateUserByEmail.useMutation();
  const deleteUserMutation = trpc.user.deleteUserByEmail.useMutation();

  const { data, update  } = useSession();
  const user = data?.user;
  const router = useRouter();

  const showToast = useCustomToast();

  const [avatar, setAvatar] = useState("/avatar.png");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [personalWebsite, setPersonalWebsite] = useState("");
  const [secondaryEmail, setSecondaryEmail] = useState("");
  const [email, setEmail] = useState("");
  const [showInvalidMsg, setShowInvalidMsg] = useState(false);
  const [isGoogleAccount, setIsGoogleAccount] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (user) {
      setAvatar(user?.image ?? "/avatar.png");

      setFirstName(user?.first_name);
      setMiddleName(user?.middle_name);
      setLastName(user?.last_name);

      setEmail(user?.email ?? "");

      // if (user?.sub.includes("google-oauth")) setIsGoogleAccount(true);
    }
  }, [user]);

  const teamMemberList = [
    {
      name: "Adekunle Fisayo",
      email: "binhan628@gmail.com",
      avatar: "/avatar1.png",
    },
    {
      name: "Matthew Olaoluwa",
      email: "thuhang.nute@gmail.com",
      avatar: "/avatar2.png",
    },
    {
      name: "Afolabi David",
      email: "nvt.isst.nute@gmail.com",
      avatar: "/avatar3.png",
    },
    {
      name: "Adekunle Fisayo",
      email: "binhan628@gmail.com",
      avatar: "/avatar1.png",
    },
    {
      name: "Adekunle Fisayo",
      email: "binhan628@gmail.com",
      avatar: "/avatar1.png",
    },
    {
      name: "Adekunle Fisayo",
      email: "binhan628@gmail.com",
      avatar: "/avatar1.png",
    },
  ];

  const changeProfile = () => {
    const originMail = user?.email ?? "info@hyvv.io";

    if (originMail && firstName !== "" && lastName !== "" && email !== "") {
      const payload = {
        first_name: firstName,
          last_name: lastName,
        secondary_email: secondaryEmail,
        middle_name: middleName,
        personal_website:personalWebsite
      }
      AXIOS.put(`/api/users/${user.id}`, payload).then((res) => {
        update({...user, ...payload});
        showToast({
          title: "User info has been successfully changed",
          status: "success",
        });
      }).catch((err) => {
        showToast({
          title: "Some errors have occurred",
          description: err.message,
          status: "error",
        });
      })
      
    } else {
      showToast({
        title: "Some required fields have not been entered",
        status: "warning",
      });
    }
  };

  const deleteAccount = () => {
    AXIOS.delete(`/api/users/${user.id}`).then((res) => {
      showToast({
        title: "Your account has been successfully deleted",
        status: "success",
      });
      signOut()
    }).catch((err) => {
      showToast({
        title: "Some errors have occurred",
        description: err.message,
        status: "error",
      });
    })
    onClose();
  };

  return (
    <>
      <div className="flex items-center gap-x-6 px-6">
        <Image
          src={avatar}
          width={80}
          height={80}
          alt="user avatar"
          className="w-auto rounded-full"
        />
        <div className="flex-1">
          <h3 className="text-lg font-semibold">Profile Picture</h3>
          <p className="text-[15px] text-[#84818A]">
            We recommend an image of at least 400x400.
          </p>
          <div className="mt-3 flex gap-x-3">
            <Button colorScheme="main" isDisabled>
              Upload Image
            </Button>
            <Button colorScheme="red" variant={"outline"} isDisabled>
              Remove
            </Button>
          </div>
        </div>
      </div>
      <div className="px-6">
        <SimpleGrid columns={3} spacing={3}>
          <div>
            <p className="text-[15px] font-semibold text-black">First Name</p>
            <Input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              isDisabled={isGoogleAccount}
            />
          </div>
          <div>
            <p className="text-[15px] font-semibold text-black">Middle Name</p>
            <Input
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}
              
            />
          </div>
          <div>
            <p className="text-[15px] font-semibold text-black">Last Name</p>
            <Input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              isDisabled={isGoogleAccount}
            />
          </div>
          <div>
            <p className="text-[15px] font-semibold text-black">Email</p>
            <Input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (!validateEmail(e.target.value)) setShowInvalidMsg(true);
                else setShowInvalidMsg(false);
              }}
              disabled
            />
            {showInvalidMsg ? (
              <p className="text-hyvv-red">invalid email address</p>
            ) : null}
          </div>
          <div>
            <p className="text-[15px] font-semibold text-black">
              Secondary Email
            </p>
            <Input type="email" 
            onChange={(e) => {
              setSecondaryEmail(e.target.value);
            }}
            />
          </div>
          <div>
            <p className="text-[15px] font-semibold text-black">
              Personal Website
            </p>
            <Input placeholder="www.example.com" onChange={(e) => {
              setPersonalWebsite(e.target.value);
            }} />
          </div>
        </SimpleGrid>
      </div>
      <Divider />
      <div className="px-6">
        <h3 className="text-lg font-semibold">Linked Accounts</h3>
        <p className="text-[15px] text-[#84818A]">
          We use this to let you sign in easily.
        </p>
        {isGoogleAccount ? (
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-x-3">
              <FcGoogle size={"30px"} />
              <div className="">
                <h6 className="text-sm font-semibold">Sign in with Google</h6>
                <p className="text-[12px] font-semibold text-[#7065F0]">
                  {email}
                </p>
              </div>
            </div>
            <Button colorScheme="red" variant={"outline"} isDisabled>
              Remove Account
            </Button>
          </div>
        ) : null}
      </div>
      <Divider />
      <div className="px-6">
        <h3 className="text-lg font-semibold">My Teams</h3>
        <p className="text-[15px] text-[#84818A]">
          You can set preferred display name, create your business details
          <span className="ml-1 cursor-pointer font-semibold text-hyvv-main underline">
            View Team Details
          </span>
        </p>
        <div className="mt-6 flex items-center gap-x-3 overflow-auto">
          {teamMemberList.map((item, i) => {
            return (
              <TeamMemberItem
                key={i}
                name={item.name}
                email={item.email}
                avatar={item.avatar}
              />
            );
          })}
        </div>
      </div>
      <Divider />
      <div className="flex justify-between px-6">
        <Button colorScheme="red" variant={"outline"} onClick={onOpen}>
          Delete Account
        </Button>
        <div className="flex gap-x-3">
          <Button colorScheme="black" variant={"outline"}>
            Discard
          </Button>
          <Button colorScheme="main" onClick={changeProfile}>
            Save Changes
          </Button>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete User</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Are you sure you want to delete the user? This operation is
            irreversible and the data is permanently deleted.
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="red" onClick={deleteAccount}>
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Account;

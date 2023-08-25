import {
  Divider,
  Button,
  Switch,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Collapse,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import PasswordCheckIcon from "../../icons/PasswordCheckIcon";
import ScanningIcon from "../../icons/ScanningIcon";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import ValidateCheck from "../component/ValidateCheck";
import PinInput from "../../base/Input/PinInput";
import Image from "next/image";
import PasswordInput from "../../base/Input/PasswordInput";

const Security = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalState, setModalState] = useState("Change Password");
  const [twoStepEnable, setTwoStepEnable] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [eightCharactersValidate, setEightCharactersValidate] = useState(false);
  const [numberValidate, setOneNumberValidate] = useState(false);
  const [specialValidate, setSpecialValidate] = useState(false);
  useEffect(() => {
    if (newPassword.length >= 8) {
      setEightCharactersValidate(true);
    } else {
      setEightCharactersValidate(false);
    }
    if (/\d/.test(newPassword)) {
      setOneNumberValidate(true);
    } else {
      setOneNumberValidate(false);
    }
    if (/[^a-zA-Z0-9]/.test(newPassword)) {
      setSpecialValidate(true);
    } else {
      setSpecialValidate(false);
    }
  }, [newPassword]);
  return (
    <>
      <div className="flex items-center justify-between px-6">
        <div>
          <h3 className="text-lg font-semibold">Password</h3>
          <p className="text-[15px] text-[#84818A]">
            You password was last changed on{" "}
            <span className="font-semibold text-black">3rd May 2023</span>
          </p>
        </div>
        <Button
          colorScheme="black"
          onClick={() => {
            onOpen();
            setModalState("Change Password");
          }}
          variant={"outline"}
        >
          Change Password
        </Button>
      </div>
      <Divider />
      <div className="flex items-center justify-between px-6">
        <div>
          <h3 className="text-lg font-semibold">Phone Number</h3>
          <p className="flex items-center gap-x-2 text-[15px] text-[#84818A]">
            You’ve added one phone number
            <span className="font-semibold text-black"> (814) 413-9191</span>
            <span className="ml-1 flex items-center font-semibold text-[#27AE60]">
              <BsCheckCircleFill className="mr-1" />
              VERIFIED
            </span>
          </p>
        </div>
        <Button colorScheme="black" variant={"outline"}>
          Add Another Phone
        </Button>
      </div>
      <Divider />
      <div className=" px-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">2-Step Verification</h3>
            <p className="flex items-center text-[15px] text-[#84818A]">
              Your authentication is not activated. Use this for more security
            </p>
          </div>
          <Switch
            size="lg"
            colorScheme="main"
            isChecked={twoStepEnable}
            onChange={(e) => {
              setTwoStepEnable(e.target.checked);
            }}
          />
        </div>
        <Collapse in={twoStepEnable}>
          <p
            className="mt-4 flex cursor-pointer items-center gap-x-2 font-semibold text-hyvv-main"
            onClick={() => {
              onOpen();
              setModalState("2-Step Verification");
            }}
          >
            Set up 2-Step Verification
            <MdOutlineArrowForwardIos />
          </p>
        </Collapse>
      </div>
      <Divider />
      <div className="flex items-center justify-between px-6">
        <div>
          <h3 className="text-lg font-semibold">Active Settions</h3>
          <p className="flex items-center text-[15px] text-[#84818A]">
            You’re active in 2 device and 32 previous activity
          </p>
        </div>
        <MdOutlineArrowForwardIos />
      </div>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent borderRadius={"xl"}>
          <ModalHeader
            p={4}
            className="rounded-t-full border-b border-[#e8e8e8] text-[13px] font-semibold"
          >
            {modalState}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="flex flex-col items-center justify-center gap-y-6">
              <div className="mt-3 flex items-center justify-center rounded-full bg-hyvv-main-light p-5">
                {modalState == "Change Password" ? (
                  <PasswordCheckIcon />
                ) : (
                  <ScanningIcon />
                )}
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold"> {modalState}</h3>
                <p className="max-w-xs items-center text-[12px] text-[#84818A]">
                  {modalState == "Change Password" ? (
                    <>
                      {" "}
                      Content of a page when looking at its layout. Your
                      password was last changed on{" "}
                      <span className="font-semibold text-hyvv-main">
                        3rd May 2023
                      </span>
                    </>
                  ) : (
                    <> Content of a page when looking at its layout. </>
                  )}
                </p>
              </div>
              {modalState == "Change Password" ? (
                <>
                  <div className="w-full">
                    <p>Current Password</p>
                    <PasswordInput
                      placeholder="Enter current password"
                      value={currentPassword}
                      setValue={setCurrentPassword}
                    />
                  </div>
                  <div className="w-full">
                    <p>New Password</p>
                    <PasswordInput
                      placeholder="Enter current password"
                      value={newPassword}
                      setValue={setNewPassword}
                    />
                  </div>
                  <div className="flex w-full flex-col gap-y-2">
                    <ValidateCheck
                      check={eightCharactersValidate}
                      title={"Be minimum eight characters"}
                    />
                    <ValidateCheck
                      check={numberValidate}
                      title={"Have at least one number"}
                    />
                    <ValidateCheck
                      check={specialValidate}
                      title={"Have at least one special character"}
                    />
                  </div>
                  <div className="w-full">
                    <p>Confirm New Password</p>

                    <PasswordInput
                      placeholder="Enter current password"
                      value={confirmPassword}
                      setValue={setConfirmPassword}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="flex w-full items-center justify-center">
                    <Image alt="asd" src="/QR.png" width={250} height={250} />
                  </div>
                  <div className="flex">
                    <p className="max-w-xs text-center text-[12px] text-[#84818A]">
                      If you want to turn on 2FA, use{" "}
                      <span className="font-semibold text-hyvv-main">
                        Google Authenticator app
                      </span>{" "}
                      to scan code, then enter six-digit code provided by the
                      app to the form below.
                    </p>
                  </div>
                  <div className="w-full">
                    <PinInput />
                  </div>
                </>
              )}
            </div>
          </ModalBody>
          {modalState == "Change Password" ? (
            <>
              <ModalFooter className="gap-x-4 p-6">
                <Button
                  colorScheme="black"
                  className="w-full"
                  variant={"outline"}
                  onClick={onClose}
                >
                  Close
                </Button>
                <Button colorScheme="main" className="w-full">
                  Change Password
                </Button>
              </ModalFooter>
            </>
          ) : (
            <>
              <ModalFooter className="flex-col gap-y-4 p-6">
                <Button colorScheme="main" className="w-full">
                  Enable 2-Step Verification
                </Button>
                <Button
                  colorScheme="black"
                  className="w-full"
                  variant={"outline"}
                  onClick={onClose}
                >
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default Security;

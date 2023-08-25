import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Checkbox,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import CreditCardIcon from "../../../icons/CreditCardIcon";
import ShieldLockIcon from "../../../icons/ShieldLockIcon";
import PayPalIcon from "../../../icons/Paypal2Icon";
import { FiArrowUpRight } from "react-icons/fi";
import { BsArrowLeft } from "react-icons/bs";
import AXIOS from "../../../../services";
import useCustomToast from "../../../../utils/toast";
import { useSession } from "next-auth/react";
const termItems = [
  {
    due: "month",
    price: 79,
  },
  {
    due: "year",
    price: 65,
    reduce: -20,
  },
];

const paymentItems = [
  {
    id: "**** **** 8941",
    card: "Robyn Gilbert",
    icon: <CreditCardIcon />,
  },
  {
    id: "********gilbert@rankwatch.com",
    card: "Paypal",
    icon: <PayPalIcon />,
  },
];
const PaymentMethod = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isRemoveStripeOpen,
    onOpen: onRemoveStripeOpen,
    onClose: onRemoveStripeClose,
  } = useDisclosure();
  const cancelRef = React.useRef();
  const { data, update } = useSession();
  const user = data?.user;

  const [selectedTerm, setSelectedTerm] = React.useState(0);
  const [selectedPayment, setSelectedPayment] = React.useState(0);
  const showToast = useCustomToast();

  const handleRemoveStripe = () => {
    AXIOS.delete(`/api/payments/remove-stripe-details`)
      .then((res) => {
        showToast({
          title: "Your card has been successfully removed",
          status: "success",
        });
        update((prev) => ({ ...prev, stripe_customer_id: null }));
        onRemoveStripeClose();
      })
      .catch((err) => {
        showToast({
          title: "Some errors have occurred",
          description: err.message,
          status: "error",
        });
      });
  };

  return (
    <>
      <div className="flex flex-1 flex-col items-stretch justify-between rounded-lg border border-[#e4e4e4]">
        <div className="flex flex-1 items-center justify-between rounded-t-lg px-4 py-3">
          <div className="flex flex-col">
            <h3 className="text-[17px] font-bold">Payment Method</h3>
            <p className="text-[12px] text-[#84818A]">
              Change how you want to pay for your plan.
            </p>
          </div>
          <Button
            colorScheme="red"
            variant={"outline"}
            onClick={onRemoveStripeOpen}
          >
            Remove Card
          </Button>
          <Button colorScheme="red" variant={"outline"} onClick={onOpen}>
            payment
          </Button>
        </div>
        <div className="flex items-center gap-x-2 rounded-b-lg bg-[#f6f6f6] p-4">
          <CreditCardIcon />
          <div className="ml-1 flex flex-col">
            <div className="flex items-start gap-x-2">
              <p className="text-[#333C48]">Stripe</p>
              {/* <p className="rounded-full bg-[#d6f5e3] px-2 py-1 text-[13px] font-semibold text-[#27ae60]">
                Primary
              </p> */}
            </div>
            {/* <p className="text-[15px] text-[#66676B]">Debit Card</p> */}
          </div>
        </div>
      </div>
      <AlertDialog
        isOpen={isRemoveStripeOpen}
        leastDestructiveRef={cancelRef}
        onClose={onRemoveStripeClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Remove Stripe
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You cant undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onRemoveStripeClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handleRemoveStripe} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

      <Modal isOpen={isOpen} onClose={onClose} isCentered size={"xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody p={8} className="flex flex-col gap-y-6">
            <div className="flex items-center gap-x-3 text-[#808494]">
              <BsArrowLeft />
              Back to Pricing & Plan
            </div>
            <div className="flex flex-1 flex-col items-stretch justify-between rounded-lg border border-[#e4e4e4]">
              <div className="flex items-center justify-between rounded-t-lg p-4">
                <div className="flex flex-col gap-y-1">
                  <div className="flex gap-x-3">
                    <h3 className="text-[20px] font-bold">Organization</h3>
                  </div>

                  <p className="flex text-[12px] text-[#34C759]">
                    <ShieldLockIcon />
                    Safe and Secure Payment
                  </p>
                </div>
                <div className="flex items-center">
                  <span className="self-start text-[14px] font-semibold">
                    $
                  </span>
                  <span className="hei text-[35px] font-bold leading-[35px]">
                    49
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between rounded-b-lg bg-[#f6f6f6] p-4 text-[15px]">
                <p className="flex cursor-pointer items-center font-semibold text-[#1C1B1B]">
                  Change plan
                  <FiArrowUpRight />
                </p>
                <div className="flex items-center gap-x-2">
                  <p className="cursor-pointer font-semibold" onClick={onOpen}>
                    Total Bill Now
                  </p>
                  <p
                    className="cursor-pointer rounded-md bg-[#08657e] px-2 py-1 font-semibold text-[#fff]"
                    onClick={onOpen}
                  >
                    USD
                  </p>{" "}
                  <p className="cursor-pointer font-semibold" onClick={onOpen}>
                    79.00
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-x-4">
              {termItems.map((item, i) => {
                return (
                  <div
                    key={i}
                    className={`flex flex-1 cursor-pointer gap-x-2 rounded-xl border p-4 ${
                      i === selectedTerm
                        ? "border-[#08657e] bg-[#daeaee]"
                        : "border-[#d6ddeb] bg-[white]"
                    }`}
                    onClick={() => setSelectedTerm(i)}
                  >
                    {" "}
                    <div
                      className={`mt-1 h-4 w-4 rounded-xl ${
                        i === selectedTerm
                          ? "border-[5px] border-[#08657e] bg-white"
                          : "border-[1px] border-[#e5e5e5] bg-white"
                      }`}
                    />
                    <div className="flex flex-col gap-y-1">
                      <p
                        className={`font-semibold capitalize ${
                          i === selectedTerm ? "text-[#08657e]" : " text-[#000]"
                        }`}
                      >
                        bill {item.due}ly
                      </p>
                      <p className={`text-[13px] text-[#7B7B7B]`}>
                        $ {item.price} per month
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex items-center justify-between">
              <p className="font-semibold text-[#000]">Payment Details</p>
              <p className="cursor-pointer font-semibold text-hyvv-main">
                + Add Payment Method
              </p>
            </div>
            <div className="flex flex-col gap-y-4">
              {paymentItems.map((item, i) => {
                return (
                  <div
                    key={i}
                    className={`flex flex-1 cursor-pointer items-center gap-x-2 rounded-xl border p-4 ${
                      i === selectedPayment
                        ? "border-[#eaecf0] bg-[#f3f4f6]"
                        : "border-[#d6ddeb] bg-[white]"
                    }`}
                    onClick={() => setSelectedPayment(i)}
                  >
                    {" "}
                    <div
                      className={`mt-1 h-4 w-4 rounded-xl ${
                        i === selectedPayment
                          ? "border-[5px] border-[#08657e] bg-white"
                          : "border-[1px] border-[#e5e5e5] bg-white"
                      }`}
                    />
                    <div className="flex flex-1 justify-between">
                      <div className="flex items-center gap-x-2">
                        {item.icon}
                        <div>
                          <p className={`font-semibold text-[#344054]`}>
                            {item.id}
                          </p>
                          <p className={`text-[13px] text-[#667085]`}>
                            {item.card}
                          </p>
                        </div>
                      </div>

                      {i === selectedPayment ? (
                        <Button colorScheme="black" variant={"outline"}>
                          Edit
                        </Button>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            <Checkbox defaultChecked colorScheme="main">
              <p className="text-[15px] text-[#84818A]">
                By clicking Confirm, I agree that I have read and accepted the
                <span className="font-semibold text-hyvv-main">
                  Terms of Use and Privacy Policy
                </span>
                .
              </p>
            </Checkbox>
            <div className="flex flex-col gap-y-4">
              <Button colorScheme="main" className="w-full">
                Confirm & Checkout
              </Button>
              <Button
                colorScheme="black"
                className="w-full"
                variant={"outline"}
                onClick={onClose}
              >
                Close
              </Button>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PaymentMethod;

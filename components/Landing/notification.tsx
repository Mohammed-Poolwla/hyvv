import { Button, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

export const HNotification: React.FC<{}> = () => {
  const [state, setState] = useState<Boolean>(true);

  const handleState = () => {
    setState((a) => !a);
  };

  return (
    <>
      {state === true ? (
        <div className="relative flex w-full items-center justify-center gap-x-2 bg-gray-200 py-1 text-center">
          {`🎉 Save up to 20% with our annual plans.`}
          <Link href="#">
            <Text className="font-semibold underline underline-offset-4">
              Click Here.
            </Text>
          </Link>
          <AiOutlineClose
            className="absolute right-40 cursor-pointer font-bold hover:font-semibold"
            onClick={handleState}
          />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export const VNotification: React.FC<{}> = () => {
  const [state, setState] = useState<Boolean>(true);

  const handleState = () => {
    setState((a) => !a);
  };

  return (
    <>
      {state ? (
        <div className="fixed right-5 top-32 z-10 flex max-w-[300px] flex-col rounded-xl border-2 border-[#36A635] bg-white p-4 transition-all hover:shadow-2xl">
          <div className="text-left font-normal">
            {
              "We use tools to track, analyze, and personalize your experience and ads, and share data with affiliates. See"
            }
            &nbsp;
            <Link href="#">
              <Text className="inline font-semibold underline ">
                cookie notice
              </Text>
            </Link>
            {"."}
          </div>
          <Stack spacing={4} direction="row" align="center" className="mt-4">
            <Button
              colorScheme="whatsapp"
              style={{ width: 100, borderRadius: 100, height: "35px" }}
              onClick={handleState}
            >
              Accept
            </Button>
            <Button
              colorScheme="black"
              variant="outline"
              style={{ width: 100, borderRadius: 100, height: "35px" }}
              className="transition-all hover:bg-slate-100"
            >
              Manage
            </Button>
          </Stack>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

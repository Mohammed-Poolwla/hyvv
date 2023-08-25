import {
  Button,
  Checkbox,
  Divider,
  Grid,
  GridItem,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { NextPageWithLayout } from "../page";

const Signup_freelancer: NextPageWithLayout = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex h-[100vh] w-full rounded border bg-white font-Plus_Jakarta_Sans">
      <div className=" hidden h-full flex-1 p-6 xs:hidden sm:hidden md:flex">
        <div className="h-full w-full rounded-xl bg-[url('/singup_bg.png')] bg-cover bg-center"></div>
      </div>
      <div className="flex h-full flex-1 items-center justify-center p-4">
        <div className="items-left flex max-w-xs flex-col justify-center gap-y-8 xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-md xl:max-w-lg">
          <Image
            src="/hyvv-small.png"
            alt="Startup Icon"
            width="100"
            height="100"
          />
          <div className="flex flex-col gap-y-2">
            <Heading sx={{ fontFamily: "Plus Jakarta Sans" }}>
              Sign up to find work you love
            </Heading>
            <Text className="font-medium text-[#84818A]">
              Already have an account?
              <Link color="primary.main" href="#">
                {" "}
                Sign in
              </Link>
            </Text>
          </div>
          <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            <GridItem className="font-medium">
              First Name
              <Input placeholder="eg.John" />
            </GridItem>
            <GridItem className="font-medium">
              Last Name
              <Input placeholder="eg.Neaman" />
            </GridItem>
            <GridItem colSpan={2} className="font-medium">
              Email
              <Input placeholder="hi@example.com" />
            </GridItem>
            <GridItem colSpan={2} className="font-medium">
              Password
              <InputGroup>
                <Input
                  type={!showPassword ? "password" : "text"}
                  placeholder="Enter Password"
                />
                <InputRightElement>
                  {!showPassword ? (
                    <RiEyeLine
                      className="cursor-pointer"
                      onClick={() => setShowPassword(true)}
                    />
                  ) : (
                    <RiEyeOffLine
                      className="cursor-pointer"
                      onClick={() => setShowPassword(false)}
                    />
                  )}
                </InputRightElement>
              </InputGroup>
            </GridItem>{" "}
            <GridItem colSpan={2}>
              <Checkbox colorScheme="main" defaultChecked>
                <Text className="text-[14px] font-medium text-[#84818A]">
                  By clicking Sign up, I agree that I have read and accepted the{" "}
                  <Link color="main.500" href="#" className="font-semibold">
                    Terms of Use
                  </Link>{" "}
                  and{" "}
                  <Link color="main.500" href="#" className="font-semibold">
                    Privacy Policy
                  </Link>
                </Text>
              </Checkbox>
            </GridItem>
            <GridItem colSpan={2} className="flex flex-col items-stretch">
              <Button colorScheme="main">Sign Up</Button>
            </GridItem>
            <GridItem colSpan={2} className="flex items-center gap-x-6">
              <Divider />
              or
              <Divider />
            </GridItem>
            <GridItem className="flex flex-col items-stretch" colSpan={2}>
              <Button
                leftIcon={<FcGoogle />}
                variant="outline"
                colorScheme="gray"
              >
                Continue with Google
              </Button>
            </GridItem>
            <GridItem colSpan={2}>
              <Text className="text-[14px] font-medium text-[#84818A]">
                Protected by reCAPTCHA and subject to the Google{" "}
                <Link color="main.500" href="#" className="font-semibold">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link color="main.500" href="#" className="font-semibold">
                  Terms of Service
                </Link>
              </Text>
            </GridItem>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Signup_freelancer;

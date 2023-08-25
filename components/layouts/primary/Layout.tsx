import { useUser } from "@auth0/nextjs-auth0";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  HStack,
  Link,
  Select,
  Square,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { ReactNode } from "react";
import useStartups from "../../../hooks/useStartups";
import AddStartupModal from "./AddStartUpModal";
import UserNavCard from "./UserNavCard";

export default function Layout({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useUser();
  const { startups, reQuery } = useStartups();
  const onStartupSelect = (event: any) => {
    alert("id of this startup: " + event.target.value);
  };

  const gotoHTVV = () => {
    const a = document.createElement("a");
    a.href = "https://launchpass.com/hyvvminds/launch";
    a.target = "_SEJ";
    a.rel = "noreferrer";
    a.click();
  };

  return (
    <Box minH="100vh" bg="white" w="100%">
      <Flex
        height="63px"
        bg={"#fafafa"}
        boxShadow={"0px 3px lightgray"}
        position={"relative"}
        borderBottomColor={useColorModeValue("gray.200", "gray.700")}
        alignItems={"center"}
        zIndex="1"
      >
        <Square>
          <Image src="/hyvv-small.png" alt="Hyvv logo" height={60} width={60} />
        </Square>
        <HStack w="500px" paddingLeft="30px">
          {user && (
            <>
              <Select
                placeholder="Select Startup"
                size="sm"
                onChange={onStartupSelect}
              >
                {startups.map(
                  (
                    startup: { id: string; companyName: string },
                    inx: number
                  ) => (
                    <option value={startup.id} key={inx + 1}>
                      {startup.companyName}
                    </option>
                  )
                )}
              </Select>
              <Button rounded={"50%"} onClick={onOpen} marginLeft="20px">
                +
              </Button>
            </>
          )}
        </HStack>

        <Flex justify={"space-evenly"} width="100%">
          {!user ? (
            <>
              <Link as={NextLink} href="/" color="red.900">
                Home
              </Link>

              <Link as={NextLink} href="/about">
                About
              </Link>
              <Link as={NextLink} href="/pricing">
                Pricing
              </Link>
            </>
          ) : (
            <Link as={NextLink} href="/addEmployee">
              Add Employee
            </Link>
          )}
        </Flex>
        <Flex mr={4} alignItems={"center"}>
          {user ? (
            <>
              <Button
                onClick={gotoHTVV}
                width="125px"
                borderRadius="6px"
                color="black"
                background="#c6ff53"
                height="32px"
                fontSize="13px"
                border="1px solid black"
              >
                <ExternalLinkIcon color={"blue"} marginRight={"10px"} />
                HYVV MINDS
              </Button>
              <UserNavCard
                ml={{ base: 0, md: 40 }}
                user={user}
                bg={"#fafafa"}
              />
            </>
          ) : (
            <>
              <Link ml={{ base: 0, md: 160 }} href="/api/auth/signup">
                <Button mx={2}>Sign Up</Button>
              </Link>
              <Link href="/auth/login">
                <Button mx={2}>Login</Button>
              </Link>
            </>
          )}
        </Flex>
      </Flex>
      <Flex height="calc(100vh - 63px)">{children}</Flex>
      <AddStartupModal reQuery={reQuery} isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}

export async function getServerSideProps({ _req, _res }) {
  // const session = getSession(req, res);

  // if (!data) {
  //   return {
  //     notFound: true,
  //   }
  // }

  return {
    props: {}, // will be passed to the page component as props
  };
}

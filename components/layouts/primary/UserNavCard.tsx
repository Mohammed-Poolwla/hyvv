import { UserProfile } from "@auth0/nextjs-auth0";
import {
  Avatar,
  Box,
  Flex,
  FlexProps,
  HStack,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FiBell, FiChevronDown } from "react-icons/fi";

interface UserNavCardProps extends FlexProps {
  user: UserProfile;
}

const UserNavCard = ({ user, ...rest }: UserNavCardProps) => {
  return (
    <Flex
      px={{ base: 4, md: 4 }}
      height="63px"
      alignItems="center"
      minWidth={"max-content"}
      bg={useColorModeValue("white", "gray.900")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <HStack spacing={{ base: "0", md: "6" }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar
                  size={"sm"}
                  src={user.name || user.nickname || user.email}
                />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">
                    {user.name || user.nickname || user.email}
                  </Text>
                  <Text fontSize="xs" color="gray.600">
                    {user.email}
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <Link as={NextLink} href={"/profile"}>
                <MenuItem>Profile</MenuItem>
              </Link>

              <Link as={NextLink} href={"/settings"}>
                <MenuItem>Settings</MenuItem>
              </Link>

              <Link as={NextLink} href={"/billing"}>
                <MenuItem>Billing</MenuItem>
              </Link>
              <MenuDivider />
              <Link as={NextLink} href={"/api/auth/logout"}>
                <MenuItem>Sign out</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

export default UserNavCard;

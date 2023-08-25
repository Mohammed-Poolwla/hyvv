import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import HyvvIcon from "../../icons/HyvvIcon";
import MarketingNavButtonGroup from "./MarketingNavButtonGroup";
import MarketingNavLinkGroup from "./MarketingNavLinkGroup";

const MarketingNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div className="relative grid grid-cols-[6fr_1fr] md:grid-cols-[1fr_5fr_2fr]">
        <Link href="/" passHref>
          <HyvvIcon className="mx-8 h-[72px] w-[82px]" />
        </Link>
        <div className="mx-auto hidden content-center gap-4 font-Montserrat font-extrabold text-gray-800 md:grid md:grid-cols-4">
          <MarketingNavLinkGroup />
        </div>
        <div className="hidden content-center md:grid ">
          <MarketingNavButtonGroup />
        </div>
        <div className="mx-2 grid content-center justify-end md:hidden">
          <IconButton
            className="max-w-[48px]"
            bg={"darkslategray"}
            aria-label="menu-button"
            onClick={onOpen}
            icon={<HamburgerIcon className="hover:stroke-hyvv-yello" />}
          />
          <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader className="text-white" borderBottomWidth="1px">
                <MarketingNavButtonGroup />
              </DrawerHeader>
              <DrawerBody>
                <div className="grid grid-cols-1 justify-center"></div>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </>
  );
};

export default MarketingNav;

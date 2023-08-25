import { Text } from "@chakra-ui/react";

import EmailCircleIcon from "../../../icons/EmailCircleIcon";
import FacebookMsgCircleIcon from "../../../icons/FacebookMsgCircleIcon";
import PhoneCircleIcon from "../../../icons/PhoneCircleIcon";
import SkypeCircleIcon from "../../../icons/SkypeCircleIcon";
import TelegramCircleIcon from "../../../icons/TelegramCircleIcon";
import ViberCallCircleIcon from "../../../icons/ViberCallCircleIcon";
import WhatsappMsgCircleIcon from "../../../icons/WhatsappMsgCircleIcon";
import ItemComponent from "./ItemComponent";

const contactItemList = [
  {
    icon: <PhoneCircleIcon />,
    text: "+1 255-492-9382",
  },
  {
    icon: <EmailCircleIcon />,
    text: "thompson_raina@harris.ca",
  },
  {
    icon: <FacebookMsgCircleIcon />,
    text: "Facebook Messenger",
  },
  {
    icon: <WhatsappMsgCircleIcon />,
    text: "Whatsapp Messages",
  },
  {
    icon: <SkypeCircleIcon />,
    text: "Skype Calls and Messages",
  },
  {
    icon: <ViberCallCircleIcon />,
    text: "Viber Calls and Messages",
  },
  {
    icon: <TelegramCircleIcon />,
    text: "Telegram Messages",
  },
];

const ContactInfo = () => {
  return (
    <div>
      <div className="p-4">
        <Text fontSize="2xl" as="b" color="gray.400" className="w-full">
          Contact
        </Text>
        {contactItemList.map((item, index) => {
          return (
            <ItemComponent icon={item.icon} text={item.text} key={index} />
          );
        })}
      </div>
    </div>
  );
};

export default ContactInfo;

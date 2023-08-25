import { Select, Text } from "@chakra-ui/react";
import Image from "next/image";
import styles from "./logo.module.css";

const bg_icon_list = ["gmail", "zapier", "outlook", "quickbooks"];
const icon_list = ["paypal", "stripe", "wordpress", "google-calendar"];

const ThirdParty: React.FC<{}> = () => {
  return (
    <div className="flex max-w-[1400px] flex-col gap-y-2">
      <div className="grid grid-cols-1 gap-x-20 overflow-hidden md:grid-cols-2">
        <div className="flex flex-1 flex-col justify-center gap-y-2 px-10 py-5 text-left">
          <Text className="text-2xl font-bold">
            {
              "Integrate thousands of tools and apps to trigger automations in Hyvv"
            }
          </Text>
          <Text>
            {
              "Connect to over 4,000 apps with HYVV's Zapier integration. Your third-party apps can be integrated to trigger automations and micro-consistency that interfaces with your team, a freelancers and outside software tools."
            }
          </Text>
        </div>
        <div className="grid justify-center py-5 sm:px-10">
          <div className={styles.circle_main}>
            <div className={styles.big_circle}>
              {bg_icon_list.map((item, index) => (
                <div className={styles.icon_block} key={index}>
                  <Image
                    width={80}
                    height={80}
                    src={`logos/${item}.svg`}
                    alt="web design icon"
                  />
                </div>
              ))}
            </div>
            <div className={styles.circle}>
              {icon_list.map((item, index) => (
                <div className={styles.icon_block} key={index}>
                  <Image
                    width={80}
                    height={80}
                    src={`logos/${item}.svg`}
                    alt="web design icon"
                  />
                </div>
              ))}
            </div>
            <div className={styles.center_logo}>
              <Image
                width={200}
                height={200}
                data-init-position="random"
                data-init-direction="random"
                alt="center_logo icon"
                src={"/hyvv-small.png"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-center rounded-lg bg-[#006CEB] py-10 text-white">
        <Text className="text-4xl font-bold text-white">
          Start a business in:
        </Text>
        <div className="px-5">
          <Select
            placeholder="Select your busniess type"
            size="lg"
            bg="white"
            color="black"
            maxW="400px"
            height={"55px"}
            style={{ fontWeight: "bold", cursor: "pointer" }}
          ></Select>
        </div>
      </div>
    </div>
  );
};

export default ThirdParty;

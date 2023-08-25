import { Box, Button, Flex } from "@chakra-ui/react";

import PollfishIcon from "../icons/PollfishIcon";
import StatistaIcon from "../icons/StatistaIcon";

import styles from "./market.module.css";

export interface IHelpBox {}

const HelpBox: React.FC<IHelpBox> = () => {
  return (
    <Box className={styles.market_help_box}>
      <Flex
        flexDirection={"column"}
        justifyContent="space-between"
        height={"90%"}
      >
        <div>
          <div className={styles.market_help_content_h1}>Need Help?</div>
          <div className={styles.market_help_card_box}>
            <StatistaIcon />
            <div className={styles.market_help_content_h2}>
              An all-in-one, indispensable resource for searching a vast array
              of research from across the web.A must-have for researching
              markets
            </div>
            <Button colorScheme="#f26858" className={styles.market_button}>
              Click Here To Sign Up
            </Button>
          </div>
          <div className={styles.market_help_card_box}>
            <div style={{ color: "red" }}>
              <PollfishIcon />
            </div>
            <div className={styles.market_help_content_h2}>
              An all-in-one, indispensable resource for searching a vast array
              of research from across the web.A must-have for researching
              markets
            </div>
            <Button colorScheme="#f26858" className={styles.market_button}>
              Click Here To Sign Up
            </Button>
          </div>
        </div>
        <div>
          <div className={styles.market_help_content_h1}>
            Want to do it later?
          </div>
          <Button
            style={{ background: "black", color: "white", marginTop: "1rem" }}
          >
            Click Here To Sign Up
          </Button>
        </div>
      </Flex>
    </Box>
  );
};

export default HelpBox;

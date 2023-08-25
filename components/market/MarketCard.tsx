import { Box, Input } from "@chakra-ui/react";

import styles from "./market.module.css";

export interface IMarketCard {
  title: String;
  content: String;
  placeholder: String;
}

const MarketCard: React.FC<IMarketCard> = (props: any) => {
  return (
    <Box className={styles.market_card_box}>
      <div className={styles.market_content_h3}>{props.title}</div>
      <div className={styles.market_content_h4}>{props.content}</div>
      <Input
        placeholder={"Input " + props.placeholder}
        className={styles.market_input_box}
      ></Input>
    </Box>
  );
};

export default MarketCard;

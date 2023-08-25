import { Box, Flex } from "@chakra-ui/react";

import ChevronUpIcon from "../icons/ChevronUpIcon";

import styles from "./market.module.css";

import MarketCard from "./MarketCard";

export interface IValidationBox {}

const ValidationBox: React.FC<IValidationBox> = () => {
  return (
    <Box className={styles.market_validation_box}>
      <ChevronUpIcon />
      <div className={styles.market_content_h1}>Market Validation</div>
      <div className={styles.market_content_h2}>
        People and investors get excited by large, untapped markets.This is
        where TAM, SAM, SOM are vital in proving that you are entering a market
        with a solution primed for growth
      </div>
      <Flex
        gap={"1rem"}
        width={"100%"}
        justifyContent={"center"}
        flexWrap={"wrap"}
      >
        <MarketCard
          title="Total Addressable Market"
          content="TAM is ther widest possible net and the total market size (in USD) for ther solution you're bringing to market"
          placeholder="TAM"
        />
        <MarketCard
          title="Serviceable Addressable Market"
          content="SAM is ther portion of TAM (in USD) that your company can realistically speak to or reach in a perfect world"
          placeholder="SAM"
        />
        <MarketCard
          title="Serviceable Obtainabel Market"
          content="SOM is the portion of SAM (in USD) that your company can realistically capture and convert to customers"
          placeholder="SOM"
        />
      </Flex>
      <div style={{ rotate: "180deg", justifyItems: "flex-end" }}>
        <ChevronUpIcon />
      </div>
    </Box>
  );
};

export default ValidationBox;

import PriceQuoteContainer from "./priceQuoteContainer";
import PriceQuoteScreen from "./priceQuoteScreen";

import { View, Text } from "react-native";
import React from "react";

const PriceQuote = () => {
  return (
    <PriceQuoteContainer>
      <PriceQuoteScreen />
    </PriceQuoteContainer>
  );
};

export { PriceQuoteContainer, PriceQuoteScreen };
export default PriceQuote;

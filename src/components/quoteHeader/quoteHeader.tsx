import React, { useContext } from "react";
import { HStack, Icon, IconButton, Text } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { QuoteContext } from "../../screens/priceQuote/priceQuoteScreen";

export const QuoteHeader = () => {
  const { priceQuote } = useContext(QuoteContext);
  // console.log(priceQuote.clientName);

  return (
    <HStack space="3" alignItems="center" bg={"coolGray.100"} px={3} py={1}>
      <Text fontSize="lg" bold color={"text.900"} flex={1}>
        {/* {priceQuote.clientName} */}
      </Text>
      <IconButton
        variant="ghost"
        icon={
          <Icon size="md" as={MaterialIcons} name="create" color="text.900" />
        }
        onPress={() => {
          console.log("hello");
        }}
      />
    </HStack>
  );
};

export default QuoteHeader;

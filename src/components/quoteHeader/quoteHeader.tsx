import React from "react";
import { HStack, Icon, IconButton, Text } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

export const QuoteHeader = () => {
  return (
    <HStack space="3" alignItems="center" bg={"coolGray.100"} px={3} py={1}>
      <Text fontSize="lg" bold color={"text.900"} flex={1}>
        Client Name
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

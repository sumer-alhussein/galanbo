import React from "react";
import { Box, Button, HStack, Icon, IconButton, Text } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

export const QuoteFooter = () => {
  return (
    <HStack
      alignItems="center"
      position={"absolute"}
      bottom={0}
      left={0}
      right={0}
      bg={"amber.300"}
      height={79}
      p={3}
    >
      <Box flex={2} flexDir={"row"}>
        <Text color={"text.900"} fontSize={"lg"}>
          Total
        </Text>
        <Text color={"text.900"} fontSize={"lg"} bold pl={2}>
          JOD1075.00
        </Text>
      </Box>

      <Button
        flex={1}
        colorScheme="light"
        onPress={() => {
          console.log("hello");
        }}
        endIcon={
          <Icon
            size="md"
            as={MaterialIcons}
            name="print"
            color="text.100"
            ml={1}
          />
        }
        _text={{
          fontSize: "lg",
          fontWeight: "bold",
        }}
      >
        Print
      </Button>
    </HStack>
  );
};

export default QuoteFooter;

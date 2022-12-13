import { Center, HStack, Icon, Pressable } from "native-base";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
export const QuoteAddButton = () => {
  return (
    <Pressable>
      {({ isHovered, isFocused, isPressed }) => {
        return (
          <Center
            bg={
              isPressed
                ? "coolGray.200"
                : isHovered
                ? "coolGray.200"
                : "coolGray.200"
            }
            style={{
              transform: [
                {
                  scale: isPressed ? 0.96 : 1,
                },
              ],
            }}
            flexDir={"row"}
            rounded={16}
            borderWidth="1"
            borderColor="coolGray.300"
            mb={2}
            py={5}
          >
            <Icon as={MaterialIcons} name="add" size={7} color={"text.500"} />
          </Center>
        );
      }}
    </Pressable>
  );
};

export default QuoteAddButton;

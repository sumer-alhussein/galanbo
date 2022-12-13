import React from "react";
import {
  Badge,
  Box,
  Center,
  HStack,
  Pressable,
  Text,
  VStack,
} from "native-base";

export const QoutListView = () => {
  return (
    <Pressable>
      {({ isHovered, isFocused, isPressed }) => {
        return (
          <HStack
            bg={
              isPressed
                ? "coolGray.200"
                : isHovered
                ? "coolGray.200"
                : "coolGray.100"
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
          >
            <VStack space="2" p={3}>
              <Text fontSize="md" bold>
                ROMAN Fireplace
              </Text>
              <Text fontSize="xs" color={"text.700"} py={"13px"}>
                Firebox with frame and panel and bottom part
              </Text>
              <Text fontSize="xs" bold>
                JOD625.000
              </Text>
            </VStack>

            <VStack
              alignItems={"flex-end"}
              justifyContent={"space-between"}
              p={3}
              flex={1}
            >
              <Badge
                variant={"solid"}
                rounded={"full"}
                bg="amber.300"
                _text={{
                  fontWeight: "bold",
                  fontSize: 10,
                }}
              >
                Native Base
              </Badge>
              <Badge
                variant={"outline"}
                borderWidth={1}
                rounded={"md"}
                w={"auto"}
                _text={{
                  fontSize: "xs",
                  fontWeight: "bold",
                }}
              >
                1
              </Badge>
            </VStack>
          </HStack>
        );
      }}
    </Pressable>
  );
};

export default QoutListView;

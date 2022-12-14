import {
  Actionsheet,
  Box,
  Button,
  Center,
  CheckIcon,
  FormControl,
  HStack,
  Icon,
  Pressable,
  Select,
  Text,
  useDisclose,
} from "native-base";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import _ from "lodash";

// Hooks
import { Dimensions } from "react-native";

export const QuoteAddButton = () => {
  // State
  const { onOpen, onClose, isOpen } = useDisclose();
  const [addForm, setAddFrom] = useState(false);
  const [category, setCategory] = React.useState("");
  const [itemType, setItemType] = React.useState("");
  const [product, setProduct] = React.useState("");

  // UI Method

  const width = Dimensions.get("window").width;

  return (
    <>
      <Pressable
        onPress={() => {
          onOpen();
        }}
      >
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
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Actionsheet.Item>
            <FormControl>
              <Select
                minWidth={"100%"}
                selectedValue={category}
                accessibilityLabel="Choose Category"
                placeholder="Category"
                _selectedItem={{
                  bg: "amber.300",
                  endIcon: <CheckIcon size="5" />,
                  borderRadius: 16,
                }}
                onValueChange={(itemValue) => setCategory(itemValue)}
              >
                <Select.Item label="UX Research" value="ux" />
              </Select>
            </FormControl>
          </Actionsheet.Item>
          <Actionsheet.Item>
            <FormControl>
              <Select
                minWidth={"100%"}
                selectedValue={itemType}
                accessibilityLabel="Choose Type"
                placeholder="Type"
                _selectedItem={{
                  bg: "amber.300",
                  endIcon: <CheckIcon size="5" />,
                  borderRadius: 16,
                }}
                onValueChange={(itemValue) => setItemType(itemValue)}
              >
                <Select.Item label="UX Research" value="ux" />
              </Select>
            </FormControl>
          </Actionsheet.Item>
          <Actionsheet.Item>
            <FormControl>
              <Select
                minWidth={"100%"}
                selectedValue={product}
                accessibilityLabel="Choose Product"
                placeholder="Product"
                _selectedItem={{
                  bg: "amber.300",
                  endIcon: <CheckIcon size="5" />,
                  borderRadius: 16,
                }}
                onValueChange={(itemValue) => setProduct(itemValue)}
              >
                <Select.Item label="UX Research" value="ux" />
              </Select>
            </FormControl>
          </Actionsheet.Item>

          <Box minWidth={"100%"} px={4} mt={5}>
            <Button
              rounded={8}
              borderColor={"amber.300"}
              variant={"outline"}
              _text={{
                fontSize: "lg",
                fontWeight: "bold",
                color: "amber.300",
              }}
              colorScheme="amber"
              onPress={() => {
                console.log("Add Item");
              }}
            >
              Add Item
            </Button>
          </Box>

          <Box minWidth={"100%"} px={4} m={4}>
            <Button
              rounded={8}
              colorScheme="danger"
              _text={{
                fontSize: "lg",
                fontWeight: "bold",
              }}
              onPress={() => {
                console.log("Cancel");
              }}
            >
              Cancel
            </Button>
          </Box>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
};

export default QuoteAddButton;

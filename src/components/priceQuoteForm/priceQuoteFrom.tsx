import React from "react";

// Components
import {
  Actionsheet,
  Box,
  CheckIcon,
  FormControl,
  Select,
  Text,
} from "native-base";

// UI Methods
import { useDisclose } from "native-base";

const PriceQuoteFrom = ({ isOpen, categories, types, products }) => {
  // State
  const { onOpen, onClose } = useDisclose();
  const [service, setService] = React.useState("");

  return (
    <Actionsheet isOpen={isOpen} onClose={onClose}>
      <Actionsheet.Content borderTopRadius="0">
        <Box w="100%" h={60} px={4} justifyContent="center">
          <Text
            fontSize="16"
            color="gray.500"
            _dark={{
              color: "gray.300",
            }}
          >
            Albums
          </Text>
        </Box>

        <Actionsheet.Item w={"100%"} bg={"amber.700"}>
          <FormControl w={"full"} bg={"amber.300"} isRequired>
            <Select
              selectedValue={service}
              minW={"full"}
              accessibilityLabel="Choose Service"
              placeholder="Choose Service"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              onValueChange={(itemValue) => setService(itemValue)}
            >
              <Select.Item label="UX Research" value="ux" />
              <Select.Item label="Web Development" value="web" />
              <Select.Item label="Cross Platform Development" value="cross" />
              <Select.Item label="UI Designing" value="ui" />
              <Select.Item label="Backend Development" value="backend" />
            </Select>
          </FormControl>
        </Actionsheet.Item>
        <Actionsheet.Item>Delete</Actionsheet.Item>
        <Actionsheet.Item>Share</Actionsheet.Item>
        <Actionsheet.Item>Play</Actionsheet.Item>
        <Actionsheet.Item>Favourite</Actionsheet.Item>
        <Actionsheet.Item>Cancel</Actionsheet.Item>
      </Actionsheet.Content>
    </Actionsheet>
  );
};

export default PriceQuoteFrom;

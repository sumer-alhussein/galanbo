import React, { useContext, useState } from "react";
import {
  CheckIcon,
  FormControl,
  HStack,
  Icon,
  IconButton,
  Input,
  Text,
  VStack,
  View,
  WarningOutlineIcon,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { QuoteContext } from "../../screens/priceQuote/priceQuoteScreen";

export const QuoteHeader = () => {
  // State
  const [isEditName, setIsEditName] = useState(false);
  const [clientName, setClientName] = React.useState<string>("Client Name");

  // UI Methods
  const handleHeaderIcon = () => (isEditName ? CreateButton : CheckButton);
  const handleEditName = () => (isEditName ? NameValue : NameInput);
  const handleConfirmName = () => {
    setIsEditName(!isEditName);
  };
  const { priceQuote } = useContext(QuoteContext);
  // console.log(priceQuote.clientName);
  const CreateButton = (
    <IconButton
      colorScheme={"coolGray"}
      variant="ghost"
      icon={
        <Icon size="md" as={MaterialIcons} name="create" color="text.900" />
      }
      onPress={() => {
        setIsEditName(!isEditName);
      }}
    />
  );
  const CheckButton = (
    <IconButton
      colorScheme={"white"}
      variant="ghost"
      icon={<Icon size="md" as={MaterialIcons} name="done" color="green.400" />}
      onPress={handleConfirmName}
    />
  );
  const NameInput = (
    <View flex={1}>
      <VStack width="90%" mx="3" maxW="300px">
        <FormControl isRequired isInvalid>
          <Input
            variant={"underlined"}
            placeholder="Cleint Name"
            onChangeText={(value) => setClientName(value)}
          />

          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Try different from previous passwords.
          </FormControl.ErrorMessage>
        </FormControl>
      </VStack>
    </View>
  );
  const NameValue = (
    <Text fontSize="lg" bold color={"text.900"} flex={1}>
      {/* {priceQuote.clientName} */}
      {clientName}
    </Text>
  );

  return (
    <HStack space="3" alignItems="center" bg={"coolGray.100"} px={3} py={1}>
      {handleEditName()}
      {handleHeaderIcon()}
    </HStack>
  );
};

export default QuoteHeader;

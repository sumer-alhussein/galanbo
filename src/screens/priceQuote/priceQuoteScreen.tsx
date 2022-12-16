import { Box, Button, Center, ScrollView, Text, View } from "native-base";
import React, { createContext, useReducer, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  QuoteAddButton,
  QuoteFooter,
  QuoteHeader,
  QuoteList,
} from "../../components";
import { data } from "../../providers/internal/data";
import { db } from "../../providers/internal/internal";

const initialForm = {
  clientName: "Client Name",
  priceQuote: [],
};
const formReducer = (state, action) => {
  switch (action.type) {
    case "setName":
      return { ...state, clientName: action.payload };
    default:
      return state;
  }
};

export const QuoteContext = createContext(initialForm);

export const priceQuoteScreen = ({}) => {
  // const fetchData = new db(data);
  // console.log(fetchData.categories);

  // State

  const [priceQuote, dispatch] = useReducer(formReducer, initialForm);
  console.log(priceQuote.clientName);

  return (
    // <QuoteContext.Provider value={{ priceQuote, dispatch }}>
    <Box safeArea px={3}>
      <ScrollView mb={79}>
        <Text fontSize="xs">{priceQuote.clientName}</Text>
        <Button
          colorScheme="primary"
          onPress={() => {
            dispatch({ type: "setName", payload: "TEST Payload" });
          }}
        >
          set name
        </Button>

        <QuoteHeader />
        <QuoteList />
        <QuoteList />
        <QuoteList />
        <QuoteList />
        <QuoteList />
        <QuoteList />
        <QuoteList />
        <QuoteList />
        <QuoteList />
        <QuoteList />
        <QuoteAddButton />
      </ScrollView>
      <QuoteFooter />
    </Box>
    // </QuoteContext.Provider>
  );
};

export default priceQuoteScreen;

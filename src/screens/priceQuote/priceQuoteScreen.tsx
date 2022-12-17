import { Box, Button, Center, ScrollView, Text, View } from "native-base";
import React, { createContext, useEffect, useReducer, useState } from "react";
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
  const [apiData, setApiData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const api = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ age: 100, count: 3 });
      }, 3000);
    });
  };

  console.log("before");

  async function getData() {
    const result = await api();
    return result;
  }

  const _data = () => getData().then((data) => setApiData(data));

  useEffect(() => {
    _data();
  }, []);

  const _isLoading = () => {
    return apiData == null ? true : false;
  };

  const [priceQuote, dispatch] = useReducer(formReducer, initialForm);
  console.log(priceQuote.clientName);

  console.log("after");

  return (
    // <QuoteContext.Provider value={{ priceQuote, dispatch }}>
    <Box safeArea px={3}>
      <ScrollView mb={79}>
        <Text fontSize="xs">{priceQuote.clientName}</Text>
        <Button
          isLoading={_isLoading()}
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

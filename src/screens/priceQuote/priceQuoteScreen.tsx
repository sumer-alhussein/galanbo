import { Box, Center, ScrollView, Text, View } from "native-base";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  QuoteAddButton,
  QuoteFooter,
  QuoteHeader,
  QuoteList,
} from "../../components";
import { data } from "../../providers/internal/data";
import { db } from "../../providers/internal/internal";

export const priceQuoteScreen = ({}) => {
  const fetchData = new db(data);
  console.log(fetchData.categories);

  // State

  return (
    <Box safeArea px={3}>
      <ScrollView mb={79}>
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
  );
};

export default priceQuoteScreen;

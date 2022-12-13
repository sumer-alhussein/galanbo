import { Box, Center, ScrollView, Text, View } from "native-base";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  QuoteAddButton,
  QuoteFooter,
  QuoteHeader,
  QuoteList,
} from "../../components";
import { db } from "../../providers/internal/internal";

import { data } from "../../providers/internal/internal";

export const AppScreen = () => {
  const fetchData = new db(data);
  console.log(fetchData.categories);

  return (
    <Box safeArea px={3}>
      <ScrollView>
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

export default AppScreen;

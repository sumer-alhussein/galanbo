import React from "react";
import { AppContainer } from "./appContainer";
import { AppScreen } from "./appScreen";

import { View, Text } from "react-native";

const Application = () => {
  return (
    <AppContainer>
      <AppScreen />
    </AppContainer>
  );
};

// export { AppContainer, AppScreen };
export default Application;

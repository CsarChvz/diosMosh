import React from "react";

import Navigation from "./Navigation";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice";
export default function App() {
  return (
    <>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
}

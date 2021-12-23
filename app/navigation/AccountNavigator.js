import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import navigationTheme from "../navigation/navigationTheme";

// Screens
import AccountScreen from "../screens/AccountScreen";
import MessagesScreen from "../screens/MessagesScreen";
const AccountStack = createNativeStackNavigator();

const MyAccountStack = () => {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen
        name="Account"
        component={AccountScreen}
        options={{ headerShown: false }}
      />
      <AccountStack.Screen
        name="Messages"
        component={MessagesScreen}
        options={{ headerShown: false }}
      />
    </AccountStack.Navigator>
  );
};

export default MyAccountStack;

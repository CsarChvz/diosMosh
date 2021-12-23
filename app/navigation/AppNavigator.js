import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// SCreens
import ListingEditScreen from "../screens/ListingEditScreen";
import ListingsScreen from "../screens/ListingsScreen";
import AccountScreen from "../screens/AccountScreen";

//navigationTheme
import navigationTheme from "../navigation/navigationTheme";

// Stack
import FeedNavigation from "./FeedNavigator";
const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Feed"
        component={FeedNavigation}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="ListingEditScreen"
        component={ListingEditScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};
export default MyTabs;
const AppNavigator = () => {
  return (
    <NavigationContainer theme={navigationTheme}>
      <MyTabs />
    </NavigationContainer>
  );
};

// export default AppNavigator;

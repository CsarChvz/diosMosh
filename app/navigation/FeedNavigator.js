import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import navigationTheme from "../navigation/navigationTheme";

// Screens
import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
const FeedStack = createNativeStackNavigator();

const MyFeedStack = () => {
  return (
    <FeedStack.Navigator>
      <FeedStack.Screen name="Listings" component={ListingsScreen} />
      <FeedStack.Screen
        name="ListingDetails"
        component={ListingDetailsScreen}
      />
    </FeedStack.Navigator>
  );
};

export default MyFeedStack;
const FeedNavigation = () => {
  return (
    <NavigationContainer theme={navigationTheme}>
      <MyFeedStack />
    </NavigationContainer>
  );
};

// export default FeedNavigation;

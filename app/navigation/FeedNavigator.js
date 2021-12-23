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
    <FeedStack.Navigator mode="modal">
      <FeedStack.Screen name="Listings" component={ListingsScreen} options={{ headerShown: false }}/>
      <FeedStack.Screen
        name="ListingDetails"
        component={ListingDetailsScreen}
        options={{ headerShown: false }}
      />
    </FeedStack.Navigator>
  );
};

export default MyFeedStack;
// const FeedNavigation = () => {
//   return (
//     <NavigationContainer theme={navigationTheme}>
//       <MyFeedStack />
//     </NavigationContainer>
//   );
// };

// // export default FeedNavigation;

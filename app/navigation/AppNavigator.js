import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {MaterialCommunityIcons} from '@expo/vector-icons'
// SCreens
import ListingEditScreen from "../screens/ListingEditScreen";
import ListingsScreen from "../screens/ListingsScreen";


//navigationTheme
import navigationTheme from "../navigation/navigationTheme";

// Stack
import FeedNavigation from "./FeedNavigator";
import AccountStack from './AccountNavigator'
import NewListingButton from "./NewListingButton";
const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Feed"
        component={FeedNavigation}
        options={{ headerShown: false, 
          tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="home" color={color} size={size}/>) }}
      />
      <Tab.Screen
        name="ListingEditScreen"
        component={ListingEditScreen}
        options={({navigation})=>({ headerShown: false,tabBarButton: ()=> <NewListingButton onPress={()=> navigation.navigate("ListingEditScreen")}/>} )}
        />
      <Tab.Screen
        name="AccountStack"
        component={AccountStack}
        options={{ headerShown: false, tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="account" color={color} size={size}/>) }}
      />
    </Tab.Navigator>
  );
};
export default MyTabs;
// const AppNavigator = () => {
//   return (
//     <NavigationContainer theme={navigationTheme}>
//       <MyTabs />
//     </NavigationContainer>
//   );
// };

// // export default AppNavigator;

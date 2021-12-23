import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

// Screens
import LoginScreen from "../screens/LoginScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import RegisterScreen from "../screens/RegisterScreen";

//navigationTheme
import navigationTheme from '../navigation/navigationTheme'
const AuthStack = createNativeStackNavigator();

const MyAuthStack = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
};

// Esta parte segun mosh
export default MyAuthStack;

// Esta parte esta igual a la de Navigation  - Video de BetoMoedano | React Native Navigation
const AuthNavigation = () => {
  return (
    <NavigationContainer theme={navigationTheme}>
      <MyAuthStack />
    </NavigationContainer>
  );
};
//export default AuthNavigation;

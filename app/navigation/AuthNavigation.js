import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

// Screens
import LoginScreen from "../screens/LoginScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import RegisterScreen from "../screens/RegisterScreen";
const AuthStack = createNativeStackNavigator();

const MyAuthStack = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Welcome" component={WelcomeScreen} />
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Register" component={RegisterScreen} />
    </AuthStack.Navigator>
  );
};

// Esta parte segun mosh
// export default MyAuthStack;

// Esta parte esta igual a la de Navigation  - Video de BetoMoedano | React Native Navigation
const AuthNavigation = () => {
  return (
    <NavigationContainer>
      <MyAuthStack />
    </NavigationContainer>
  );
};
export default AuthNavigation;

import React from "react";

import AnimatedLottieView from "lottie-react-native";
export default function ActivityIndicator({ visible = false }) {
  if (!visible) {
    return null;
  }
  return (
    <AnimatedLottieView
      source={require("../assets/animations/loader.json")}
      autoPlay
      loop
    />
  );
}

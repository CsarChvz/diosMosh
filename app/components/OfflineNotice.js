import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";
import { Constants } from "expo-constants";
// Componentes
import Text from "./Text";
export default function OfflineNotice() {
  return (
    <View style={styles.container}>
      <Text>No internet Connection</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 50,
    width: "100%",
    position: "absolute",
    zIndex: 1,
  },
});

import React from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import * as Progress from "react-native-progress";
import colors from "../config/colors";
import AnimatedLottieView from "lottie-react-native";
export default function UploadScreen({
  onDone,
  progress = 0,
  visible = false,
}) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            progress={progress}
            color={colors.primary}
            style={{ width: "80%" }}
          ></Progress.Bar>
        ) : (
          <AnimatedLottieView
            autoPlay
            loop={false}
            style={styles.animation}
            onAnimationFinish={onDone}
            source={require("../assets/animations/done.json")}
          />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  animation: {
    width: 150,
  },
});

import React from "react";
import { StyleSheet, View, Text } from "react-native";

const SignupScreen = () => {
  return (
    <View>
      <Text style={styles.text}>SignupScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
    textAlign: "center",
  },
});

export default SignupScreen;

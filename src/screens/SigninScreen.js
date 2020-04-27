import React from "react";
import { StyleSheet, View, Text } from "react-native";

const SigninScreen = () => {
  return (
    <View>
      <Text style={styles.text}>SigninScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
    textAlign: "center",
  },
});

export default SigninScreen;

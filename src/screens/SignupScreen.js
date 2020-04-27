import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const SignupScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>SignupScreen</Text>
      <Button
        title="Go to Signin"
        onPress={() => {
          navigation.navigate("Signin");
        }}
      />
      <Button
        title="Go to Main Flow"
        onPress={() => {
          navigation.navigate("mainFlow");
        }}
      />
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

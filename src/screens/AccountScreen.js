import React from "react";
import { StyleSheet, View, Text } from "react-native";

const AccountScreen = () => {
  return (
    <View>
      <Text style={styles.text}>AccountScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
    textAlign: "center",
  },
});

export default AccountScreen;

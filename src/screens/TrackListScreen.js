import React from "react";
import { StyleSheet, View, Text } from "react-native";

const TrackListScreen = () => {
  return (
    <View>
      <Text style={styles.text}>TrackListScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
    textAlign: "center",
  },
});

export default TrackListScreen;

import React from "react";
import { StyleSheet, View, Text } from "react-native";

const TrackDetailScreen = () => {
  return (
    <View>
      <Text style={styles.text}>TrackDetailScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
    textAlign: "center",
  },
});

export default TrackDetailScreen;

import React, { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Context as TrackContext } from "../context/TrackContext";

const TrackDetailScreen = ({ navigation }) => {
  const { state } = useContext(TrackContext);

  const _id = navigation.getParam("_id");

  const track = state.find((item) => item._id === _id);

  return (
    <View>
      <Text style={styles.text}>{track.name}</Text>
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

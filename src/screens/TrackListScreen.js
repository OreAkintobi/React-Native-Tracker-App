import React, { useEffect, useContext } from "react";
import { StyleSheet, Text, FlatList, TouchableOpacity } from "react-native";
import { ListItem } from "react-native-elements";
import { Context as TrackContext } from "../context/TrackContext";

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);

  console.log(state);

  useEffect(() => {
    fetchTracks();

    const listener = navigation.addListener("willFocus", () => {
      fetchTracks();
    });

    return () => {
      listener.remove();
    };
  }, []);

  return (
    <>
      <Text style={styles.text}>TrackListScreen</Text>
      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("TrackDetail", { _id: item._id });
            }}
          >
            <ListItem chevron title={item.name} />
          </TouchableOpacity>
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
    textAlign: "center",
  },
});

export default TrackListScreen;

import React from "react";
import { StyleSheet, Text } from "react-native";
import MapView, { Polyline } from "react-native-maps";

const Map = () => {
  let points = [];
  for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
      points.push({
        latitude: 6.446787 + i * 0.001,
        longitude: 3.574914 + i * 0.001,
      });
    } else {
      points.push({
        latitude: 6.446787 - i * 0.0000001,
        longitude: 3.574914 + i * 0.001,
      });
    }
  }

  return (
    <MapView
      style={styles.map}
      provider="google"
      region={{
        latitude: 6.446787,
        longitude: 3.574914,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Polyline coordinates={points} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;

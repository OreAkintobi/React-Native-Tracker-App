import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/LocationContext";

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);

  // console.log(locations.length);
  return (
    <>
      <Spacer>
        <Input
          placeholder="Enter Track Name"
          onChangeText={changeName}
          value={name}
        />
      </Spacer>
      {recording ? (
        <Button
          title="Stop Recording"
          onPress={stopRecording}
          buttonStyle={{ backgroundColor: "red" }}
        />
      ) : (
        <Button title="Start Recording" onPress={startRecording} />
      )}
    </>
  );
};

export default TrackForm;

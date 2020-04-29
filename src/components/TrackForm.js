import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "./Spacer";

const TrackForm = () => {
  return (
    <>
      <Spacer>
        <Input placeholder="Enter Track Name" />
      </Spacer>
      <Button title="Start Recording" />
    </>
  );
};

export default TrackForm;

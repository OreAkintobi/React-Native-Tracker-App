import React, { useState, useContext } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { errorMessage } = state;
  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up for Tracker</Text>
      </Spacer>
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        label="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Spacer />
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Spacer />
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      <Spacer>
        <Button title="Sign Up" onPress={() => signup({ email, password })} />
      </Spacer>
      <Spacer>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Signin");
          }}
        >
          <Text style={styles.link}>
            Already have an account? Sign in instead.
          </Text>
        </TouchableOpacity>
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200,
  },
  error: {
    color: "red",
    fontSize: 16,
    marginLeft: 15,
  },
  link: {
    color: "blue",
  },
});

export default SignupScreen;

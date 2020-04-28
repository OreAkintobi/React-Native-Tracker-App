import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { AsyncStorage } from "react-native";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signin":
      return { errorMessage: "", token: action.payload };
    case "clear_error_message":
      return { ...state, errorMessage: "" };
    default:
      return state;
  }
};

const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: "signin", payload: token });
    navigate("TrackList");
  } else {
    navigate("Signup");
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "clear_error_message" });
};

const signup = (dispatch) => async ({ email, password }) => {
  try {
    // make api request to sign up with email & password
    const response = await trackerApi.post("/signup", { email, password });
    // if we sign up, modify our state, and say we are authenticated
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "signin", payload: response.data.token });
    // console.log(response.data);

    navigate("TrackList");
  } catch (error) {
    // if signing up fails, we need to handle that error
    // console.log(error.response.data);
    dispatch({
      type: "add_error",
      payload: "Something went wrong with sign up",
    });
  }
};

const signin = (dispatch) => async ({ email, password }) => {
  try {
    // make api request to sign in with email & password
    const response = await trackerApi.post("/signin", { email, password });
    // if we sign in, update our state, and say we are authenticated
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "signin", payload: response.data.token });
    // console.log(response.data);
    navigate("TrackList");
  } catch (error) {
    // if signing in fails, we need to handle that error
    dispatch({
      type: "add_error",
      payload: "Something went wrong with sign in",
    });
  }
};

const signout = (dispatch) => {
  return () => {
    // sign out
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrorMessage, tryLocalSignin },
  { token: null, errorMessage: "" }
);

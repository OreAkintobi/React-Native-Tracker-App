import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { AsyncStorage } from "react-native";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signup":
      return { errorMessage: "", token: action.payload };
    default:
      return state;
  }
};

const signup = (dispatch) => async ({ email, password }) => {
  try {
    // make api request to sign up with email & password
    const response = await trackerApi.post("/signup", { email, password });
    // if we sign up, modify our state, and say we are authenticated
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "signup", payload: response.data.token });
    // console.log(response.data);
  } catch (error) {
    // if signing up fails, we need to handle that error
    // console.log(error.response.data);
    dispatch({
      type: "add_error",
      payload: "Something went wrong with sign up",
    });
  }
};

const signin = (dispatch) => {
  return ({ email, password }) => {
    // make api request to sign in with email & password
    // if we sign in, update our state, and say we are authenticated
    // if signing in fails, we need to handle that error
  };
};

const signout = (dispatch) => {
  return () => {
    // sign out
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { token: null, errorMessage: "" }
);

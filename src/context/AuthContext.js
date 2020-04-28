import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    // make api request to sign up with email & password
    try {
      const response = await trackerApi.post("/signup", { email, password });
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
    // if we sign up, modify our state, and say we are authenticated

    // if signing up fails, we need to handle that error
  };
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
  { isSignedIn: false }
);

import { createAction } from "redux-actions";

export const signIn = createAction("signIn");
export const signUp = createAction("signUp");
export const logOut = createAction("logOut");
export const setAuthState = createAction("setAuthState");

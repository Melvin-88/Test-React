import { takeLatest, call, put } from "redux-saga/effects";
import { login } from "../actions/users";
import * as API from "../api/";
import setAuthToken from "../utils/setAuthToken";
import { history } from "../index";

//WORKERS
function* signInWorker({ payload: { data, resolve, reject } }) {
  // const response = yield call(API.signInApi, data);
  const response = null;
  if (response.status && response.status === 200) {
    resolve();
    let { token } = response.data;
    //set token to localStorage
    localStorage.token = token;
    //set token to Auth header
    setAuthToken(token);
    //add user info
    history.push("/");
    // const res = yield call(API.getUserInfoAPI);
    // if (res.status === 200) {
    //     yield put(setUser(res.data.user));
    // }
  } else {
    reject(response);
  }
}

export function* logOutWorker() {
  // yield setAuthToken();
  // yield put(setUser({}));
  // //Redirect to login
  // localStorage.clear();
  // history.push('/');
}

// WATCHERS
export function* loginUserWatcher() {
  yield takeLatest(login, signInWorker);
}

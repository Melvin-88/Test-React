import {takeLatest, call, put} from 'redux-saga/effects';
import {signIn, signUp, setAuthState, logOut} from '../actions';
import * as API from '../api/';
import {history} from '../index';

//WORKERS
function* signInWorker({
    payload: {
        data: {email, password},
        resolve,
        reject,
    },
}) {
    const response = yield call(API.signInApi, email);
    if (response[0] && response[0].password === password) {
        resolve();
        //set user to localStorage
        localStorage.user = JSON.stringify(response);
        //set user info
        yield put(setAuthState(response[0]));
        //push to main page
        history.push('/');
    } else {
        if (!response[0]) {
            reject({email: 'User with this Email is not exist'});
        } else if (response[0].password !== password) {
            reject({password: 'Wrong password'});
        }
    }
}

function* signUnWorker({payload: {data, resolve, reject}}) {
    const response = yield call(API.signUnApi, data);
    if (response.name) {
        resolve();
        history.push('/authentication');
    } else {
        reject(response);
    }
}

// WATCHERS
export function* loginUserWatcher() {
    yield takeLatest(signIn, signInWorker);
}

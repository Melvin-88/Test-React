import {takeLatest, call, put} from 'redux-saga/effects';
import {addNewEntries, saveNewEntries} from '../actions';
import * as API from '../api/';

//WORKERS
function* addNewEntriesWorker({payload: {data, resolve, reject}}) {
    const response = yield call(API.addNewEntriesApi, data);
    if (response.name === data.name) {
        resolve();
        //set user info
        yield put(saveNewEntries(response));
    } else {
        if (!response[0]) {
            reject({_error: ''});
        }
    }
}

// WATCHERS
export function* addNewEntriesWatcher() {
    yield takeLatest(addNewEntries, addNewEntriesWorker);
}

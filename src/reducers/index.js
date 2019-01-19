import {combineReducers} from 'redux';
import UserReducer from './reducerUser';
import EntriesReducer from './reducerEntries';
import {reducer as formReducer} from 'redux-form';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
    router: routerReducer,
    form: formReducer,
    user: UserReducer,
    entries: EntriesReducer,
});

export default rootReducer;

import * as actions from '../actions/entries';
import {handleActions} from 'redux-actions';

const initialState = {
    entries_list: [],
};

const EntriesReducer = handleActions(
    {
        [actions.saveNewEntries]: (state, {payload}) => {
            console.log(payload);
            return {
                ...state,
                entries_list: payload,
            };
        },
    },
    initialState,
);

export default EntriesReducer;

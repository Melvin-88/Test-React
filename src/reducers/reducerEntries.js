import * as actions from '../actions/entries';
import {handleActions} from 'redux-actions';

const initialState = {
    entries_list: null,
};

const EntriesReducer = handleActions(
    {
        [actions.saveNewEntries]: (state, {payload}) => {
            let arr = [...state.entries_list];
            arr.push(payload);
            return {
                ...state,
                entries_list: arr,
            };
        },
        [actions.saveListEntries]: (state, {payload}) => {
            return {
                ...state,
                entries_list: payload,
            };
        },
    },
    initialState,
);

export default EntriesReducer;

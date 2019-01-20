import {createSelector} from 'reselect';

const entriesSelector = state => state.entries.entries_list;

export const entriesListSelector = createSelector(
    entriesSelector,
    state => state,
);

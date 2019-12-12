import {createSelector} from 'reselect'
// import { combineSelectors } from 'combine-selectors-redux';
import {State} from "../types/index";

const getRowsFromState = (state: State) => state.users.rows;

const getIsFetching = (state: State) => state.users.fetching;

export const getRowsSelector = createSelector(
    getRowsFromState,
    users => users,
);

export const getFriendsSelector = createSelector(
    getRowsFromState,
    users => {
        const hashMap: any = {};
        users.map(
            user => {
                // @ts-ignore
                hashMap[user.id] = user.friends.map(friend => friend.name);
            }
        );
        return hashMap;
    }
);

export const getIsFetchingSelector = createSelector(
    getIsFetching,
    fetching => fetching
);
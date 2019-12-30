import {createSelector} from 'reselect'
import {State} from "../types";

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
                hashMap[user.id] = (user.friends || []).map(friend => friend.name);
            }
        );
        return hashMap;
    }
);

export const getIsFetchingSelector = createSelector(
    getIsFetching,
    fetching => fetching
);
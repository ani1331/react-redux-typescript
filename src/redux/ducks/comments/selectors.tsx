import {createSelector} from "reselect";

const getIsFetching = (state) => state.comments.fetching;
const getRows = (state) => state.comments.rows;

export const getIsFetchingSelector = createSelector(
    getIsFetching,
    fetching => fetching
);

export const getCommentsSelector = createSelector(
    getRows,
    comments => comments
);
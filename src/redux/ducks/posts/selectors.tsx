import {createSelector} from "reselect";

const getIsFetching = (state) => state.posts.fetching;
const getRows = (state) => state.posts.rows;

export const getIsFetchingSelector = createSelector(
    getIsFetching,
    fetching => fetching
);

export const getPostsSelector = createSelector(
    getRows,
    posts => posts
);
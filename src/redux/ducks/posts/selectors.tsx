import {createSelector} from "reselect";
import {State} from "../types";

const getIsFetching = (state: State) => state.posts.fetching;
const getRows = (state: State) => state.posts.rows;

export const getIsFetchingSelector = createSelector(
    getIsFetching,
    fetching => fetching
);

export const getPostsSelector = createSelector(
    getRows,
    posts => posts
);
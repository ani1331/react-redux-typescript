import {createSelector} from "reselect";
import {State} from "../types";

const getIsFetching = (state: State) => state.comments.fetching;
const getRows = (state: State) => state.comments.rows;

export const getIsFetchingSelector = createSelector(
    getIsFetching,
    fetching => fetching
);

export const getCommentsSelector = createSelector(
    getRows,
    comments => comments
);
import {createSelector} from "reselect";
// @ts-ignore
import {combineSelectors} from "combine-selectors-redux";
import {State} from "../types";

const getIsFetching = (state: State) => state.albums.fetching;
const getRows = (state: State) => state.albums.rows;

const getIsFetchingSelector = createSelector(
    getIsFetching,
    fetching => fetching
);

const getAlbumsSelector = createSelector(
    getRows,
    albums => albums,
);

export const selectors = combineSelectors({
    getIsFetchingSelector,
    getAlbumsSelector,
});
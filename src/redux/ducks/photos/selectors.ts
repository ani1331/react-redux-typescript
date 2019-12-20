import {createSelector} from "reselect";
// @ts-ignore
import { combineSelectors } from 'combine-selectors-redux'
import {State} from "../types";

const getIsFetching = (state: State) => state.photos.fetching;
const getRows = (state: State) => state.photos.rows;

const getIsFetchingSelector = createSelector(
    getIsFetching,
    fetching => fetching
);

const getPhotosSelector = createSelector(
    getRows,
    photos => photos
);

export const selectors = combineSelectors({
    getIsFetchingSelector,
    getPhotosSelector,
});
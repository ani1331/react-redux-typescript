// import * as types from "./types"
import {AlbumsReducerActions, REQUEST_ALBUMS, RESPONSE_ALBUMS_SUCCESS } from "./types";
import {Albums} from "../types";

const initialState = {
    fetching: true,
    rows: []
};

const albumsReducer = (state = initialState, action: AlbumsReducerActions): Albums => {
    switch (action.type) {
        case REQUEST_ALBUMS:
            return {
                fetching: true,
                rows: []
            };
        case RESPONSE_ALBUMS_SUCCESS:
            return {
                fetching: false,
                rows: action.albums
            };
        default:
            return state;
    }
};

export default albumsReducer;
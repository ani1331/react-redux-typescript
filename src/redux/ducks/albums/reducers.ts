import {IFetchingAlbums, REQUEST_ALBUMS, RESPONSE_ALBUMS_SUCCESS } from "./types";
import {Albums} from "../types";

const initialState: Albums = {
    fetching: true,
    rows: []
};

const albumsReducer = (state = initialState, action: IFetchingAlbums): Albums => {
    switch (action.type) {
        case REQUEST_ALBUMS:
            return {
                fetching: true,
                rows: []
            };
        case RESPONSE_ALBUMS_SUCCESS:
            return <Albums>{
                fetching: false,
                rows: action.albums
            };
        default:
            return state;
    }
};

export default albumsReducer;
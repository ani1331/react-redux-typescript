import {AlbumsData} from "../types";
import {EMPTY_OBJECT} from "../users/types";

export const REQUEST_ALBUMS = 'ducks/albums/REQUEST_ALBUMS';
export const RESPONSE_ALBUMS_SUCCESS = 'ducks/albums/RESPONSE_ALBUMS_SUCCESS';
export const RESPONSE_ALBUMS_FAILURE = 'ducks/albums/RESPONSE_ALBUMS_FAILURE';

interface RequestAlbums {
    type: typeof REQUEST_ALBUMS
}

interface ResponseAlbumsSuccess {
    type: typeof RESPONSE_ALBUMS_SUCCESS;
    albums: AlbumsData[]
}

interface ResponseAlbumsFailure {
    type: typeof RESPONSE_ALBUMS_FAILURE;
    error: any
}

interface Empty {
    type: typeof EMPTY_OBJECT;
}

export type AlbumsReducerActions = RequestAlbums | ResponseAlbumsSuccess | ResponseAlbumsFailure | Empty;

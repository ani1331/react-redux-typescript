import * as types from "./types";
import {AlbumsReducerActions} from "./types";
import {AlbumsData} from "../types";

export function requestAlbums(): AlbumsReducerActions {
    return {
        type: types.REQUEST_ALBUMS
    }
}

export function responseAlbumsSuccess(albums: AlbumsData[]): AlbumsReducerActions {
    return {
        type: types.RESPONSE_ALBUMS_SUCCESS,
        albums
    }
}

export function responseAlbumsFailure(error: any): AlbumsReducerActions {
    return {
        type: types.RESPONSE_ALBUMS_FAILURE,
        error
    }
}
import * as types from "./types";
import {IFetchingAlbums} from "./types";
import {AlbumsData} from "../types";

export function requestAlbums(): IFetchingAlbums {
    return {
        type: types.REQUEST_ALBUMS
    }
}

export function responseAlbumsSuccess(albums: AlbumsData[]): IFetchingAlbums {
    return {
        type: types.RESPONSE_ALBUMS_SUCCESS,
        albums
    }
}

export function responseAlbumsFailure(error: any): IFetchingAlbums {
    return {
        type: types.RESPONSE_ALBUMS_FAILURE,
        error
    }
}
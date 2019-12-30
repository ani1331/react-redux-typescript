import {AlbumsData} from "../types";

export const REQUEST_ALBUMS = 'ducks/albums/REQUEST_ALBUMS';
export const RESPONSE_ALBUMS_SUCCESS = 'ducks/albums/RESPONSE_ALBUMS_SUCCESS';
export const RESPONSE_ALBUMS_FAILURE = 'ducks/albums/RESPONSE_ALBUMS_FAILURE';

export interface IFetchingAlbums {
    type: string;
    albums?: AlbumsData[]
    error?: any
}
import {PhotosData} from "../types";

export const REQUEST_PHOTOS = 'ducks/photos/RECEIVE_PHOTOS_LIST';
export const RESPONSE_PHOTOS_SUCCESS = 'ducks/photos/RESPONSE_PHOTOS_SUCCESS';
export const RESPONSE_PHOTOS_FAILURE = 'ducks/photos/RESPONSE_PHOTOS_FAILURE';

export interface IFetchingPhotos {
    type: string;
    photos?: PhotosData[];
    error?: any
}
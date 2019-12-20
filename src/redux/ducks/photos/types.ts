import {PhotosData} from "../types";
import {EMPTY_OBJECT} from "../users/types";

export const REQUEST_PHOTOS = 'ducks/photos/RECEIVE_PHOTOS_LIST';
export const RESPONSE_PHOTOS_SUCCESS = 'ducks/photos/RESPONSE_PHOTOS_SUCCESS';
export const RESPONSE_PHOTOS_FAILURE = 'ducks/photos/RESPONSE_PHOTOS_FAILURE';

interface RequestPhotos {
    type: typeof REQUEST_PHOTOS
}

interface ResponsePhotosSuccess {
    type: typeof RESPONSE_PHOTOS_SUCCESS;
    photos: PhotosData[]
}

interface ResponsePhotosFailure {
    type: typeof RESPONSE_PHOTOS_FAILURE;
    error: any
}

interface Empty {
    type: typeof EMPTY_OBJECT;
}

export type PhotosReducerActions = RequestPhotos | ResponsePhotosSuccess | ResponsePhotosFailure | Empty;
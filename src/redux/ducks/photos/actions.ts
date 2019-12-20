import * as types from "./types";
import {PhotosReducerActions} from "./types";
import {PhotosData} from "../types";

export function requestPhotos(): PhotosReducerActions {
    return {
        type: types.REQUEST_PHOTOS
    }
}

export function responsePhotosSuccess(photos: PhotosData[]): PhotosReducerActions {
    return {
        type: types.RESPONSE_PHOTOS_SUCCESS,
        photos
    }
}

export function responsePhotosFailure(error: any): PhotosReducerActions {
    return {
        type: types.RESPONSE_PHOTOS_FAILURE,
        error
    }
}
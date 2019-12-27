import * as types from "./types";
import {IFetchingPhotos} from "./types";
import {PhotosData} from "../types";

export function requestPhotos(): IFetchingPhotos {
    return {
        type: types.REQUEST_PHOTOS
    }
}

export function responsePhotosSuccess(photos: PhotosData[]): IFetchingPhotos {
    return {
        type: types.RESPONSE_PHOTOS_SUCCESS,
        photos
    }
}

export function responsePhotosFailure(error: any): IFetchingPhotos {
    return {
        type: types.RESPONSE_PHOTOS_FAILURE,
        error
    }
}
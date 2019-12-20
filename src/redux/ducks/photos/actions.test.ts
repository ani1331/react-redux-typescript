import {requestPhotos, responsePhotosSuccess, responsePhotosFailure} from "./actions";
import * as types from './types'
import {PhotosData} from "../types";

describe('photos', () => {
    it('should create an action to request user photos', () => {
        expect(requestPhotos()).toEqual({
            type: types.REQUEST_PHOTOS
        })
    });

    let photos: PhotosData[] = [];
    let error = 'some text';

    it('should create an action to receive user photos', () => {
        expect(responsePhotosSuccess(photos)).toEqual({
            type: types.RESPONSE_PHOTOS_SUCCESS,
            photos
        })
    });

    it('should create an action to handle an error', () => {
        expect(responsePhotosFailure(error)).toEqual({
            type: types.RESPONSE_PHOTOS_FAILURE,
            error
        })
    });
});
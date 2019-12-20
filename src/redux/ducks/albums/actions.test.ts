import {requestAlbums, responseAlbumsSuccess, responseAlbumsFailure} from './actions'
import * as types from './types'
import {AlbumsData} from "../types";

describe('albums', () => {
    it('should create an action to request user albums', () => {
        expect(requestAlbums()).toEqual({
            type: types.REQUEST_ALBUMS
        })
    });

    let albums: AlbumsData[] = [];
    let error = 'some text';

    it('should create an action to receive user albums', () => {
        expect(responseAlbumsSuccess(albums)).toEqual({
            type: types.RESPONSE_ALBUMS_SUCCESS,
            albums
        })
    });

    it('should create an action to handle an error', () => {
        expect(responseAlbumsFailure(error)).toEqual({
            type: types.RESPONSE_ALBUMS_FAILURE,
            error
        })
    });
});
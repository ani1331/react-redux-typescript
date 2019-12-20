import albumsReducer from './reducers'
import {EMPTY_OBJECT} from "../users/types";
import {REQUEST_ALBUMS, RESPONSE_ALBUMS_SUCCESS} from "./types";

describe('albums reducer', () => {
    it('should return initial state as default', () => {
        expect(albumsReducer(undefined, {type: EMPTY_OBJECT})).toEqual({
            fetching: true,
            rows: []
        })
    });

    it('should request user albums', () => {
        expect(albumsReducer({
            fetching: false,
            rows: []
        }, { type: REQUEST_ALBUMS })).toEqual({
            fetching: true,
            rows: []
            })
    });

    it('should receive user albums', () => {

        const albumsReceivedData = {
            "userId": 1,
            "id": 1,
            "title": "title"
        };

        const requestingAlbums = {
            fetching: true,
            rows: []
        };

        const action =  {type: RESPONSE_ALBUMS_SUCCESS, albums: albumsReceivedData};

        // @ts-ignore
        expect(albumsReducer(requestingAlbums, action)).toEqual({
            fetching: false,
            rows: action.albums
        })
    })
});
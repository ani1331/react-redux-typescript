import photosReducer from './reducers'
import {EMPTY_OBJECT} from "../users/types";

describe('photos reducer', () => {
    it('should return initial state as default', () => {
        expect(photosReducer(undefined, {type: EMPTY_OBJECT})).toEqual({
            fetching: true,
            rows: []
        })
    });

    it('should request user photos', () => {
        expect(photosReducer({
            fetching: false,
            rows: []
        }, { type: 'ducks/photos/RECEIVE_PHOTOS_LIST' })).toEqual({
            fetching: true,
            rows: []
        })
    });

    it('should receive user photos', () => {


        const photosReceivedData = [{
            "albumId": 1,
            "id": 1,
            "title": "accusamus beatae ad facilis cum similique qui sunt",
            "url": "https://via.placeholder.com/600/92c952",
            "thumbnailUrl": "https://via.placeholder.com/150/92c952"
        }];

        const requestingPhotos = {
            fetching: true,
            rows: []
        };

        const action =  {type: 'ducks/photos/RESPONSE_PHOTOS_SUCCESS', photos: photosReceivedData};

        expect(photosReducer(requestingPhotos, action)).toEqual({
            fetching: false,
            rows: action.photos
        })
    })
});
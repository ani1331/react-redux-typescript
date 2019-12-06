import * as types from './types';
import commentsReducer from './reducers'

describe('comments reducer', () => {
    it('should return initial state as default', () => {
        expect(commentsReducer(undefined, {})).toEqual({
            fetching: true,
            rows: []
        })
    });

    it('should request comments list', () => {
        expect(commentsReducer({
            fetching: false,
            rows: [1, 2, 3]
        }, { type: types.REQUEST_COMMENTS })).toEqual({
            fetching: true,
            rows: []
        })
    });

    it('should receive comments list', () => {
        const action =  {type: types.RESPONSE_COMMENTS_SUCCESS};
        expect(commentsReducer(undefined, action)).toEqual({
            fetching: false,
            rows: action.comments
        })
    })
});
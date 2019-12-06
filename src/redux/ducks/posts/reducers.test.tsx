import * as types from './types';
import postsReducer from './reducers'

describe('posts reducer', () => {
    it('should return initial state as default', () => {
        expect(postsReducer(undefined, {})).toEqual({
            fetching: true,
            rows: []
        })
    });

    it('should request posts list', () => {
        expect(postsReducer({
            fetching: false,
            rows: [1, 2, 3]
        }, { type: types.REQUEST_POSTS })).toEqual({
            fetching: true,
            rows: []
        })
    });

    it('should receive posts list', () => {
        const action =  {type: types.RESPONSE_POSTS_SUCCESS};
        expect(postsReducer(undefined, action)).toEqual({
            fetching: false,
            rows: action.posts
        })
    })
});
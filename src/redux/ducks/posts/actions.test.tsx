import {requestPosts, responsePostsSuccess, responsePostsFailure} from './actions'
import * as types from './types'

describe('posts', () => {
    it('should create an action to request posts list', () => {
        expect(requestPosts()).toEqual({
            type: types.REQUEST_POSTS
        })
    });

    let posts = [];
    let error = 'some text';

    it('should create an action to receive posts list', () => {
        expect(responsePostsSuccess(posts)).toEqual({
            type: types.RESPONSE_POSTS_SUCCESS,
            posts
        })
    });

    it('should create an action to handle an error', () => {
        expect(responsePostsFailure(error)).toEqual({
            type: types.RESPONSE_POSTS_FAILURE,
            error
        })
    });
});
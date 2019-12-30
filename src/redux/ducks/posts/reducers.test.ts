import postsReducer from './reducers'
import {EMPTY_OBJECT} from "../users/types";

describe('posts reducer', () => {
    it('should return initial state as default', () => {
        expect(postsReducer(undefined, {type: EMPTY_OBJECT})).toEqual({
            fetching: true,
            rows: []
        })
    });

    it('should request posts list', () => {
        expect(postsReducer({
            fetching: false,
            rows: []
        }, { type: 'ducks/posts/REQUEST_POSTS' })).toEqual({
            fetching: true,
            rows: []
        })
    });

    it('should receive posts list', () => {
        const postsReceivedData = [{
            userId: 1,
            id: 1,
            title: "title",
            body: "body"
        }];

        const requestingPosts = {
            fetching: true,
            rows: []
        };

        const action =  {type: 'ducks/posts/RESPONSE_POSTS_SUCCESS', posts: postsReceivedData};

        const receivedState = {
            fetching: false,
            rows: action.posts
        };

        expect(postsReducer(requestingPosts, action)).toEqual(receivedState)});
});
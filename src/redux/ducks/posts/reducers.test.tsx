import * as types from './types';
import postsReducer from './reducers'
import {REQUEST_POSTS, RESPONSE_POSTS_SUCCESS} from "./types";
import {NOTHING} from "../users/types";

describe('posts reducer', () => {
    it('should return initial state as default', () => {
        expect(postsReducer(undefined, {type: NOTHING})).toEqual({
            fetching: true,
            rows: []
        })
    });

    it('should request posts list', () => {
        expect(postsReducer({
            fetching: false,
            rows: []
        }, { type: REQUEST_POSTS })).toEqual({
            fetching: true,
            rows: []
        })
    });

    it('should receive posts list', () => {
        const postsReceivedData = {
            userId: 1,
            id: 1,
            title: "title",
            body: "body"
        };

        const requestingPosts = {
            fetching: true,
            rows: []
        };

        const action =  {type: RESPONSE_POSTS_SUCCESS, posts: postsReceivedData};

        const receivedState = {
            fetching: false,
            rows: action.posts
        };

        // @ts-ignore
        expect(postsReducer(requestingPosts, action)).toEqual(receivedState)});
});
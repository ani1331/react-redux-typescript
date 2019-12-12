import * as types from './types';
import commentsReducer from './reducers'
import {EMPTY_OBJECT} from "../users/types";
import {RESPONSE_POSTS_SUCCESS} from "../posts/types";
import postsReducer from "../posts";

describe('comments reducer', () => {
    it('should return initial state as default', () => {
        expect(commentsReducer(undefined, {type: EMPTY_OBJECT})).toEqual({
            fetching: true,
            rows: []
        })
    });

    it('should request comments list', () => {
        expect(commentsReducer({
            fetching: false,
            rows: []
        }, {type: types.REQUEST_COMMENTS})).toEqual({
            fetching: true,
            rows: []
        })
    });

    it('should receive comments list', () => {
        const commentsReceivedData = {
            postId: 1,
            id: 1,
            name: "title",
            email: "email",
            body: "body"
        };

        const requestingComments = {
            fetching: true,
            rows: []
        };

        const action = {type: RESPONSE_POSTS_SUCCESS, comments: commentsReceivedData};

        const receivedState = {
            fetching: false,
            rows: action.comments
        };

        // @ts-ignore
        expect(postsReducer(requestingComments, action)).toEqual(receivedState)
    });
});
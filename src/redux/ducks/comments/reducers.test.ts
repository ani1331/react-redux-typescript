import commentsReducer from './reducers'
import {EMPTY_OBJECT} from "../users/types";
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
        }, {type: 'ducks/comments/RECEIVE_COMMENT_LIST'})).toEqual({
            fetching: true,
            rows: []
        })
    });

    it('should receive comments list', () => {
        const commentsReceivedData = [{
            postId: 1,
            id: 1,
            name: "title",
            email: "email",
            body: "body"
        }];

        const requestingComments = {
            fetching: true,
            rows: []
        };

        const action = {type: 'ducks/posts/RESPONSE_POSTS_SUCCESS', comments: commentsReceivedData};

        const receivedState = {
            fetching: false,
            rows: action.comments
        };

        expect(postsReducer(requestingComments, action)).toEqual(receivedState)
    });
});
import {requestComments, responseCommentsSuccess, responseCommentsFailure} from "./actions";
import * as types from './types'
import {CommentsData} from "../types";

describe('comments', () => {
    it('should create an action to request comments list', () => {
        expect(requestComments()).toEqual({
            type: types.REQUEST_COMMENTS
        })
    });

    let comments: CommentsData[] = [];
    let error = 'some text';

    it('should create an action to receive comments list', () => {
        expect(responseCommentsSuccess(comments)).toEqual({
            type: types.RESPONSE_COMMENTS_SUCCESS,
            comments
        })
    });

    it('should create an action to handle an error', () => {
        expect(responseCommentsFailure(error)).toEqual({
            type: types.RESPONSE_COMMENTS_FAILURE,
            error
        })
    });
});
import * as types from "./types";
import {CommentsReducerActions} from "./types";
import {CommentsData} from "../types";

export function requestComments(): CommentsReducerActions {
    return {
        type: types.REQUEST_COMMENTS
    }
}

export function responseCommentsSuccess(comments: CommentsData[]): CommentsReducerActions {
    return {
        type: types.RESPONSE_COMMENTS_SUCCESS,
        comments
    }
}

export function responseCommentsFailure(error: any): CommentsReducerActions {
    return {
        type: types.RESPONSE_COMMENTS_FAILURE,
        error
    }
}
import * as types from "./types";
import {IFetchingComments} from "./types";
import {CommentsData} from "../types";

export function requestComments(): IFetchingComments {
    return {
        type: types.REQUEST_COMMENTS
    }
}

export function responseCommentsSuccess(comments: CommentsData[]): IFetchingComments {
    return {
        type: types.RESPONSE_COMMENTS_SUCCESS,
        comments
    }
}

export function responseCommentsFailure(error: any): IFetchingComments {
    return {
        type: types.RESPONSE_COMMENTS_FAILURE,
        error
    }
}
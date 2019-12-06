import * as types from "./types";

export function requestComments() {
    return {
        type: types.REQUEST_COMMENTS
    }
}

export function responseCommentsSuccess(comments) {
    return {
        type: types.RESPONSE_COMMENTS_SUCCESS,
        comments
    }
}

export function responseCommentsFailure(error) {
    return {
        type: types.RESPONSE_COMMENTS_FAILURE,
        error
    }
}
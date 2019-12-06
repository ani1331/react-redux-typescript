import * as types from "./types";

export function requestPosts() {
    return {
        type: types.REQUEST_POSTS
    }
}

export function responsePostsSuccess(posts) {
    return {
        type: types.RESPONSE_POSTS_SUCCESS,
        posts
    }
}

export function responsePostsFailure(error) {
    return {
        type: types.RESPONSE_POSTS_FAILURE,
        error
    }
}
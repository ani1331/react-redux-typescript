import * as types from "./types";
import {PostReducerActions} from "./types";
import {PostsData} from "../types";

export function requestPosts(): PostReducerActions {
    return {
        type: types.REQUEST_POSTS
    }
}

export function responsePostsSuccess(posts: PostsData[]): PostReducerActions {
    return {
        type: types.RESPONSE_POSTS_SUCCESS,
        posts
    }
}

export function responsePostsFailure(error: any): PostReducerActions{
    return {
        type: types.RESPONSE_POSTS_FAILURE,
        error
    }
}
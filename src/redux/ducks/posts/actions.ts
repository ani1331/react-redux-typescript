import {REQUEST_POSTS, RESPONSE_POSTS_SUCCESS, RESPONSE_POSTS_FAILURE, IFetchingPosts} from "./types";
import {PostsData} from "../types";

export function requestPosts(): IFetchingPosts {
    return {
        type: REQUEST_POSTS,
    }
}

export function responsePostsSuccess(posts: PostsData[]): IFetchingPosts {
    return {
        type: RESPONSE_POSTS_SUCCESS,
        posts
    }
}

export function responsePostsFailure(error: any): IFetchingPosts{
    return {
        type: RESPONSE_POSTS_FAILURE,
        error
    }
}
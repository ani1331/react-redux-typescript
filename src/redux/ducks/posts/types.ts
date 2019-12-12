import {PostsData} from "../types";
import {EMPTY_OBJECT} from "../users/types";

export const REQUEST_POSTS = 'ducks/posts/REQUEST_POSTS';
export const RESPONSE_POSTS_SUCCESS = 'ducks/posts/RESPONSE_POSTS_SUCCESS';
export const RESPONSE_POSTS_FAILURE = 'ducks/posts/RESPONSE_POSTS_FAILURE';

interface RequestPosts {
    type: typeof REQUEST_POSTS
}

interface ResponsePostsSuccess {
    type: typeof RESPONSE_POSTS_SUCCESS;
    posts: PostsData[]
}

interface ResponsePostsFailure {
    type: typeof RESPONSE_POSTS_FAILURE;
    error: any
}

interface Empty {
    type: typeof EMPTY_OBJECT;
}

export type PostReducerActions = RequestPosts | ResponsePostsSuccess | ResponsePostsFailure | Empty;
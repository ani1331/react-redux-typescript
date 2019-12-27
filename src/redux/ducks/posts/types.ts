import {PostsData} from "../types";

export const REQUEST_POSTS = 'ducks/posts/REQUEST_POSTS';
export const RESPONSE_POSTS_SUCCESS = 'ducks/posts/RESPONSE_POSTS_SUCCESS';
export const RESPONSE_POSTS_FAILURE = 'ducks/posts/RESPONSE_POSTS_FAILURE';

export interface IFetchingPosts {
    type: string;
    posts?: PostsData[];
    error?: any
}
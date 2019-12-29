import {CommentsData} from "../types";

export const REQUEST_COMMENTS = 'ducks/comments/REQUEST_COMMENTS_LIST';
export const RESPONSE_COMMENTS_SUCCESS = 'ducks/posts/RESPONSE_COMMENTS_SUCCESS';
export const RESPONSE_COMMENTS_FAILURE = 'ducks/posts/RESPONSE_COMMENTS_FAILURE';


export interface IFetchingComments {
    type: string;
    comments?: CommentsData[];
    error?: any

}
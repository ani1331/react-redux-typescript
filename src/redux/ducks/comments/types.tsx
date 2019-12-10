import {CommentsData} from "../types";
import {NOTHING} from "../users/types";

export const REQUEST_COMMENTS = 'ducks/comments/RECEIVE_COMMENT_LIST';
export const RESPONSE_COMMENTS_SUCCESS = 'ducks/posts/RESPONSE_COMMENTS_SUCCESS';
export const RESPONSE_COMMENTS_FAILURE = 'ducks/posts/RESPONSE_COMMENTS_FAILURE';


interface RequestComments {
    type: typeof REQUEST_COMMENTS
}

interface ResponseCommentsSuccess {
    type: typeof RESPONSE_COMMENTS_SUCCESS;
    comments: CommentsData[]
}

interface ResponseCommentsFailure {
    type: typeof RESPONSE_COMMENTS_FAILURE;
    error: any
}

interface Empty {
    type: typeof NOTHING;
}

export type CommentsReducerActions = RequestComments | ResponseCommentsSuccess | ResponseCommentsFailure | Empty;
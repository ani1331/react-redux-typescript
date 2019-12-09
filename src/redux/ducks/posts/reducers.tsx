import * as types from "./types";
import {PostReducerActions, REQUEST_POSTS, RESPONSE_POSTS_SUCCESS} from "./types";
import {Posts} from "../types";

const initialState = {
    fetching: true,
    rows: []
};

const postsReducer = (state = initialState, action: PostReducerActions): Posts => {
    switch (action.type) {
        case REQUEST_POSTS:
            return {
                fetching: true,
                rows: []
            };
        case RESPONSE_POSTS_SUCCESS:
            return {
                fetching: false,
                rows: action.posts
            };
        default:
            return state;
    }
};

export default postsReducer;
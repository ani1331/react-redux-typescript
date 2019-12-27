import {IFetchingPosts, REQUEST_POSTS, RESPONSE_POSTS_SUCCESS} from "./types";
import {Posts} from "../types";

const initialState: Posts = {
    fetching: true,
    rows: []
};

const postsReducer = (state = initialState, action: IFetchingPosts): Posts => {
    switch (action.type) {
        case REQUEST_POSTS:
            return {
                fetching: true,
                rows: []
            };
        case RESPONSE_POSTS_SUCCESS:
            return <Posts>{
                fetching: false,
                rows: action.posts
            };
        default:
            return state;
    }
};

export default postsReducer;
import * as types from "./types";

const initialState = {
    fetching: true,
    rows: []
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.REQUEST_POSTS:
            return {
                fetching: true,
                rows: []
            };
        case types.RESPONSE_POSTS_SUCCESS:
            return {
                fetching: false,
                rows: action.posts
            };
        default:
            return state;
    }
};

export default postsReducer;
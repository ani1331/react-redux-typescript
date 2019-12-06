import * as types from "./types";

const initialState = {
    fetching: true,
    rows: []
};

const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.REQUEST_COMMENTS:
            return {
                fetching: true,
                rows: []
            };
        case types.RESPONSE_COMMENTS_SUCCESS:
            return {
                fetching: false,
                rows: action.comments
            };
        default:
            return state;
    }
};

export default commentsReducer;
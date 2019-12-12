// import * as types from "./types";
import {CommentsReducerActions, REQUEST_COMMENTS, RESPONSE_COMMENTS_SUCCESS} from "./types";
import {Comments} from "../types";

const initialState = {
    fetching: true,
    rows: []
};

const commentsReducer = (state = initialState, action: CommentsReducerActions): Comments => {
    switch (action.type) {
        case REQUEST_COMMENTS:
            return {
                fetching: true,
                rows: []
            };
        case RESPONSE_COMMENTS_SUCCESS:
            return {
                fetching: false,
                rows: action.comments
            };
        default:
            return state;
    }
};

export default commentsReducer;
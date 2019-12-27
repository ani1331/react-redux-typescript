import {IFetchingComments, REQUEST_COMMENTS, RESPONSE_COMMENTS_SUCCESS} from "./types";
import {Comments} from "../types";

const initialState: Comments = {
    fetching: true,
    rows: []
};

const commentsReducer = (state = initialState, action: IFetchingComments): Comments => {
    switch (action.type) {
        case REQUEST_COMMENTS:
            return {
                fetching: true,
                rows: []
            };
        case RESPONSE_COMMENTS_SUCCESS:
            return <Comments>{
                fetching: false,
                rows: action.comments
            };
        default:
            return state;
    }
};

export default commentsReducer;
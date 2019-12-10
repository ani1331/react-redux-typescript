// import * as types from "./types";
import {Users} from "../types";
import {ReducerActions, REQUEST_USERS, RESPONSE_USERS_SUCCESS} from "./types";

const initialState: Users = {
    fetching: true,
    rows: []
};


const usersReducer = (state = initialState, action: ReducerActions): Users=> {
    switch (action.type) {
        case REQUEST_USERS:
            return {
                fetching: true,
                rows: []
            };
        case RESPONSE_USERS_SUCCESS:
            return {
                fetching: false,
                rows: action.users
            };
        default:
            return state;
    }
};

export default usersReducer;
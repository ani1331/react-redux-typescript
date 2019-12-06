import * as types from "./types";
import {Users} from "../types";
import {ReducerActions} from "./types";

const initialState: Users = {
    fetching: true,
    rows: []
};


const usersReducer = (state = initialState, action: ReducerActions) => {
    switch (action.type) {
        case types.REQUEST_USERS:
            return {
                fetching: true,
                rows: []
            };
        case types.RESPONSE_USERS_SUCCESS:
            return {
                fetching: false,
                rows: action.users
            };
        default:
            return state;
    }
};

export default usersReducer;
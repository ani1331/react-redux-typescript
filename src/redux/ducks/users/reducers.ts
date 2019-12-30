import {Users} from "../types";
import {IFetchingUsers, REQUEST_USERS, RESPONSE_USERS_SUCCESS} from "./types";

const initialState: Users = {
    fetching: true,
    rows: []
};


const usersReducer = (state = initialState, action: IFetchingUsers): Users=> {
    switch (action.type) {
        case REQUEST_USERS:
            return {
                fetching: true,
                rows: []
            };
        case RESPONSE_USERS_SUCCESS:
            return <Users>{
                fetching: false,
                rows: action.users
            };
        default:
            return state;
    }
};

export default usersReducer;
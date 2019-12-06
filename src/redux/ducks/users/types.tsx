import {Users} from "../types";

export const RESPONSE_USERS_SUCCESS = 'ducks/users/RESPONSE_USERS_SUCCESS';
export const REQUEST_USERS = 'ducks/users/REQUEST_USERS';
export const RESPONSE_USERS_FAILURE = 'ducks/users/RESPONSE_USERS_FAILURE';


interface RequestUsers {
    type: typeof REQUEST_USERS
}

interface ResponseUsersSuccess {
    type: typeof RESPONSE_USERS_SUCCESS;
    users: Users
}

interface ResponseUsersFailure {
    type: typeof RESPONSE_USERS_FAILURE;
    error: any
}

export type ReducerActions = RequestUsers | ResponseUsersSuccess | ResponseUsersFailure;

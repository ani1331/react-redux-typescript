import {UsedData} from "../types";

export const RESPONSE_USERS_SUCCESS = 'ducks/users/RESPONSE_USERS_SUCCESS';
export const REQUEST_USERS = 'ducks/users/REQUEST_USERS';
export const RESPONSE_USERS_FAILURE = 'ducks/users/RESPONSE_USERS_FAILURE';
export const NOTHING = "nothing";

interface RequestUsers {
    type: typeof REQUEST_USERS
}

interface ResponseUsersSuccess {
    type: typeof RESPONSE_USERS_SUCCESS;
    users: UsedData[]
}

interface ResponseUsersFailure {
    type: typeof RESPONSE_USERS_FAILURE;
    error: any
}

interface Empty {
    type: typeof NOTHING;
}

export type ReducerActions = RequestUsers | ResponseUsersSuccess | ResponseUsersFailure | Empty;

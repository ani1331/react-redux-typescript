import {UsedData} from "../types";

export const RESPONSE_USERS_SUCCESS = "ducks/users/RESPONSE_USERS_SUCCESS";
export const REQUEST_USERS = 'ducks/users/REQUEST_USERS';
export const RESPONSE_USERS_FAILURE = 'ducks/users/RESPONSE_USERS_FAILURE';
export const EMPTY_OBJECT = "EMPTY_OBJECT";

export interface IFetchingUsers {
    type: string;
    users?: UsedData[];
    error?: any
}
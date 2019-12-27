import * as types from './types';
import {UsersData} from '../types'
import {IFetchingUsers} from "./types";


export function requestUsers(): IFetchingUsers {
    return {
        type: types.REQUEST_USERS,
    }
}

export function responseUsersSuccess(users: UsersData[]): IFetchingUsers {
    return {
        type: types.RESPONSE_USERS_SUCCESS,
        users
    }
}

export function responseUsersFailure(error: any): IFetchingUsers {
    return {
        type: types.RESPONSE_USERS_FAILURE,
        error
    }
}
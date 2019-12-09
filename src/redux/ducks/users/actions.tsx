import * as types from './types';
import {UsersData} from '../types'
import {ReducerActions} from "./types";


export function requestUsers(): ReducerActions {
    return {
        type: types.REQUEST_USERS,
    }
}

export function responseUsersSuccess(users: UsersData[]): ReducerActions {
    return {
        type: types.RESPONSE_USERS_SUCCESS,
        users
    }
}

export function responseUsersFailure(error: any): ReducerActions {
    return {
        type: types.RESPONSE_USERS_FAILURE,
        error
    }
}
import {requestUsers, responseUsersSuccess, responseUsersFailure} from './actions'
import * as types from './types'

describe('actions', () => {
    it('should create an action to request users list', () => {
        expect(requestUsers()).toEqual({
            type: types.REQUEST_USERS
        })
    });

    let users = [];
    let error = 'some text';

    it('should create an action to receive users list', () => {
        expect(responseUsersSuccess(users)).toEqual({
            type: types.RESPONSE_USERS_SUCCESS,
            users
        })
    });

    it('should create an action to handle an error', () => {
        expect(responseUsersFailure(error)).toEqual({
            type: types.RESPONSE_USERS_FAILURE,
            error
        })
    });
});
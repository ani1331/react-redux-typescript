import usersReducer from './reducers';
import * as types from './types';

describe('users reducer', () => {
    it('should return the initial state', () => {
        expect(usersReducer(undefined, {})).toEqual({
            'fetching': true,
            'rows': []
        })
    });

    it('should handle REQUESTING_USERS_LIST', () => {
        const requestingUsers = {
            type: types.REQUEST_USERS
        };
        expect(usersReducer({
            fetching: false,
            rows: [1, 2]
        }, requestingUsers)).toEqual({
            'fetching': true,
            "rows": []
        });
    });

    it('should handle RECEIVE_USERS_LIST', () => {
        const action = {type: types.RESPONSE_USERS_SUCCESS};
        const receivedState = {
            fetching: false,
            rows: action.users
        };
        expect(usersReducer(undefined, action)).toEqual(receivedState);
    });
});

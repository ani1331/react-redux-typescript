import usersReducer from './reducers';
import {NOTHING, REQUEST_USERS, RESPONSE_USERS_SUCCESS} from "./types";

describe('users reducer', () => {
    it('should return the initial state', () => {
        expect(usersReducer(undefined, {type: NOTHING})).toEqual({
            fetching: true,
            rows: []
        })
    });

    it('should handle REQUESTING_USERS_LIST', () => {
        expect(usersReducer({
            fetching: false,
            rows: []
        }, {type: REQUEST_USERS})).toEqual({
            fetching: true,
            rows: []
        });
    });

    it('should handle RECEIVE_USERS_LIST', () => {
        const usersReceivedData = {
            id: 1,
            name: "name",
            email: "email",
            address: "address",
            friends: [{id: 1, name: "name"}]
        };

        const action = {type: RESPONSE_USERS_SUCCESS, users: usersReceivedData};

        const requestingUsers = {
            fetching: true,
            rows: []
        };

        const receivedState = {
            fetching: false,
            rows: action.users
        };

        // @ts-ignore
        expect(usersReducer(requestingUsers, action)).toEqual(receivedState);
    });
});

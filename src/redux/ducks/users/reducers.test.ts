import usersReducer from './reducers';
import {EMPTY_OBJECT, REQUEST_USERS, RESPONSE_USERS_SUCCESS} from "./types";

describe('users reducer', () => {
    it('should return the initial state', () => {
        expect(usersReducer(undefined, {type: EMPTY_OBJECT})).toEqual({
            fetching: true,
            rows: []
        })
    });

    it('should handle REQUESTING_USERS_LIST', () => {
        expect(usersReducer({
            fetching: false,
            rows: []
        }, {type: 'ducks/users/REQUEST_USERS'})).toEqual({
            fetching: true,
            rows: []
        });
    });

    it('should handle RECEIVE_USERS_LIST', () => {
        const usersReceivedData = [{
            id: 1,
            name: "name",
            email: "email",
            address: "address",
            friends: [{id: 1, name: "name"}]
        }];

        const action = {type: "ducks/users/RESPONSE_USERS_SUCCESS", users: usersReceivedData};

        const requestingUsers = {
            fetching: true,
            rows: []
        };

        const receivedState = {
            fetching: false,
            rows: action.users
        };

        expect(usersReducer(requestingUsers, action)).toEqual(receivedState);
    });
});
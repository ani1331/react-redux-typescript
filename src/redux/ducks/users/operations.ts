import axios from "axios";
import {Dispatch} from 'redux';
import {requestUsers, responseUsersSuccess, responseUsersFailure} from './actions'

export const getUsersAsync = () => (dispatch: Dispatch) => {
    const usersApiUrl = 'http://localhost:3000/users.json';
    dispatch(requestUsers());
    return axios.get(usersApiUrl)
        .then(response => response.data)
        .then(users =>
            dispatch(responseUsersSuccess(users))
        )
        .catch(error => {
            dispatch(responseUsersFailure(error))
        });
};

export default {
    getUsersAsync
}
import axios from "axios";
import {requestUsers, responseUsersSuccess, responseUsersFailure} from './actions'

export const getUsersAsync = () => dispatch => {
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
import {requestPosts, responsePostsSuccess, responsePostsFailure} from './actions'
import axios from "axios";

export const getUserPostsAsync = (userId) => (dispatch) => {
    if (userId) {
        const postsApiUrl = 'https://jsonplaceholder.typicode.com/posts?userId=';
        dispatch(requestPosts());
        return axios.get(`${postsApiUrl}${userId}`)
            .then(response => response.data)
            .then(posts => {
                dispatch(responsePostsSuccess(posts));
            })
            .catch(error => {
                dispatch(responsePostsFailure(error))
            });
    } else {
        console.log('userId is not received')
    }
};

export default {
    getUserPostsAsync
}
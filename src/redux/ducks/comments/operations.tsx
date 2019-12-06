import axios from "axios";
import {requestComments, responseCommentsSuccess, responseCommentsFailure} from "./actions";

export const getPostCommentsAsync = (postId) => (dispatch) => {
    if (postId) {
        const commentsApiUrl = 'https://jsonplaceholder.typicode.com/comments?postId=';
        dispatch(requestComments());
        return axios.get(`${commentsApiUrl}${postId}`)
            .then(response => response.data)
            .then(comments => {
                dispatch(responseCommentsSuccess(comments));
            })
            .catch(error => {
                dispatch(responseCommentsFailure(error));
            });
    } else {
        console.log('postId is not received')
    }
};

export default {
    getPostCommentsAsync
}
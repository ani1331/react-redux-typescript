import axios from "axios";
import {requestComments, responseCommentsSuccess, responseCommentsFailure} from "./actions";
import {Dispatch} from "redux";

export const getPostCommentsAsync = (postId: number | null) => (dispatch: Dispatch) => {
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
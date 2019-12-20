import {requestAlbums, responseAlbumsSuccess, responseAlbumsFailure} from './actions'
import axios from "axios";
import {Dispatch} from "redux";

export const getUserAlbumsAsync = (userId: number | null) => (dispatch: Dispatch) => {
    if (userId) {
        const AlbumApiUrl = 'https://jsonplaceholder.typicode.com/albums?userId=';
        dispatch(requestAlbums());
        return axios.get(`${AlbumApiUrl}${userId}`)
            .then(response => response.data)
            .then(albums => {
                dispatch(responseAlbumsSuccess(albums));
            })
            .catch(error => {
                dispatch(responseAlbumsFailure(error))
            });
    } else {
        console.log('userId is not received')
    }
};

export default {
    getUserAlbumsAsync
}
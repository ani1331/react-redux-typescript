import axios from "axios";
import {requestPhotos, responsePhotosSuccess, responsePhotosFailure} from "./actions";
import {Dispatch} from "redux";

export const getPhotosAsync = (albumId: number | null) => (dispatch: Dispatch) => {
    if (albumId) {
        debugger;
        const PhotosApiUrl = 'https://jsonplaceholder.typicode.com/photos?albumId=';
        dispatch(requestPhotos());
        return axios.get(`${PhotosApiUrl}${albumId}`)
            .then(response => response.data)
            .then(photos => {
                dispatch(responsePhotosSuccess(photos));
            })
            .catch(error => {
                dispatch(responsePhotosFailure(error));
            });
    } else {
        console.log('albumId is not received')
    }
};

export default {
    getPhotosAsync
}
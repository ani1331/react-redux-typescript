// import * as types from "./types";
// @ts-ignore
import {PhotosReducerActions, REQUEST_PHOTOS, RESPONSE_PHOTOS_SUCCESS} from "./types";
import {Photos} from "../types";

const initialState = {
    fetching: true,
    rows: []
};

const photosReducer = (state = initialState, action: PhotosReducerActions): Photos => {
    switch (action.type) {
        case REQUEST_PHOTOS:
            return {
                fetching: true,
                rows: []
            };
        case RESPONSE_PHOTOS_SUCCESS:
            return {
                fetching: false,
                rows: action.photos
            };
        default:
            return state;
    }
};

export default photosReducer;
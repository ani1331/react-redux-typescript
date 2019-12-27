import {IFetchingPhotos, REQUEST_PHOTOS, RESPONSE_PHOTOS_SUCCESS} from "./types";
import {Photos} from "../types";

const initialState: Photos = {
    fetching: true,
    rows: []
};

const photosReducer = (state = initialState, action: IFetchingPhotos): Photos => {
    switch (action.type) {
        case REQUEST_PHOTOS:
            return {
                fetching: true,
                rows: []
            };
        case RESPONSE_PHOTOS_SUCCESS:
            return <Photos>{
                fetching: false,
                rows: action.photos
            };
        default:
            return state;
    }
};

export default photosReducer;
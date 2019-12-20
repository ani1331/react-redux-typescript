import * as types from './types';
import {getPhotosAsync} from "./operations";
import axios from 'axios';
import {Dispatch} from "redux";

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('get photos  async function', () => {
    let dispatchFn: Dispatch;
    let albumId = 1;

    beforeEach(() => {
        dispatchFn = jest.fn();
    });

    it('should check if function works without albumID', () => {
        getPhotosAsync(null)(dispatchFn);
        expect(dispatchFn).not.toHaveBeenCalled();
    });

    it('should return callback function', () => {
        expect(typeof getPhotosAsync(null)).toBe('function');
    });

    it('should handle REQUEST_PHOTOS', () => {
        mockedAxios.get.mockResolvedValue({
            data: []
        });
        getPhotosAsync(albumId)(dispatchFn);
        expect(dispatchFn).toHaveBeenCalledWith({type: types.REQUEST_PHOTOS})
    });

    it('should handle RESPONSE_PHOTOS_SUCCESS', async () => {
        const mockData = ['123'];
        mockedAxios.get.mockResolvedValue({
            data: [...mockData]
        });
        await getPhotosAsync(albumId)(dispatchFn);

        expect(dispatchFn).toHaveBeenLastCalledWith(
            {type: types.RESPONSE_PHOTOS_SUCCESS, photos: mockData}
        )
    })
});
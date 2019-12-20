import * as types from './types';
import {getUserAlbumsAsync} from "./operations";
import axios from 'axios';
import {Dispatch} from "redux";

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('get albums  async function', () => {
    let dispatchFn: Dispatch;
    let userId = 1;

    beforeEach(() => {
        dispatchFn = jest.fn();
    });

    it('should check if function works without userID', () => {
        getUserAlbumsAsync(null)(dispatchFn);
        expect(dispatchFn).not.toHaveBeenCalled();
    });

    it('should return callback function', () => {
        expect(typeof getUserAlbumsAsync(null)).toBe('function');
    });

    it('should handle REQUEST_ALBUMS', () => {
        mockedAxios.get.mockResolvedValue({
            data: []
        });
        getUserAlbumsAsync(userId)(dispatchFn);
        expect(dispatchFn).toHaveBeenCalledWith({type: types.REQUEST_ALBUMS})
    });

    it('should handle RESPONSE_ALBUMS_SUCCESS', async () => {
        const mockData = ['123'];
        mockedAxios.get.mockResolvedValue({
            data: [...mockData]
        });
        await getUserAlbumsAsync(userId)(dispatchFn);

        expect(dispatchFn).toHaveBeenLastCalledWith(
            {type: types.RESPONSE_ALBUMS_SUCCESS, albums: mockData}
        )
    })
});
import * as types from './types';
import {getUserPostsAsync} from "./operations";
import axios from 'axios';
import {Dispatch} from "redux";

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('get posts  async function', () => {
    let dispatchFn: Dispatch;
    let userId = 1;

    beforeEach(() => {
        dispatchFn = jest.fn();
    });

    it('should check if function works without userID', () => {
        getUserPostsAsync(null)(dispatchFn);
        expect(dispatchFn).not.toHaveBeenCalled();
    });

    it('should return callback function', () => {
        expect(typeof getUserPostsAsync(null)).toBe('function');
    });

    it('should handle REQUEST_POSTS', () => {
        mockedAxios.get.mockResolvedValue({
            data: []
        });
        getUserPostsAsync(userId)(dispatchFn);
        expect(dispatchFn).toHaveBeenCalledWith({type: types.REQUEST_POSTS})
    });

    it('should handle RESPONSE_POSTS_SUCCESS', async () => {
        const mockData = ['123'];
        mockedAxios.get.mockResolvedValue({
            data: [...mockData]
        });
        await getUserPostsAsync(userId)(dispatchFn);

        expect(dispatchFn).toHaveBeenLastCalledWith(
            {type: types.RESPONSE_POSTS_SUCCESS, posts: mockData}
        )
    })
});
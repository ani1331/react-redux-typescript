import * as types from './types';
import {getPostCommentsAsync} from "./operations";
import axios from 'axios';
import {Dispatch} from "redux";

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('get comments  async function', () => {
    let dispatchFn: Dispatch;
    let postId = 1;

    beforeEach(() => {
        dispatchFn = jest.fn();
    });

    it('should check if function works without postID', () => {
        getPostCommentsAsync(null)(dispatchFn);
        expect(dispatchFn).not.toHaveBeenCalled();
    });

    it('should return callback function', () => {
        expect(typeof getPostCommentsAsync(null)).toBe('function');
    });

    it('should handle REQUEST_COMMENTS', () => {
        mockedAxios.get.mockResolvedValue({
            data: []
        });
        getPostCommentsAsync(postId)(dispatchFn);
        expect(dispatchFn).toHaveBeenCalledWith({type: types.REQUEST_COMMENTS})
    });

    it('should handle RESPONSE_COMMENTS_SUCCESS', async () => {
        const mockData = ['123'];
        mockedAxios.get.mockResolvedValue({
            data: [...mockData]
        });
        await getPostCommentsAsync(postId)(dispatchFn);

        expect(dispatchFn).toHaveBeenLastCalledWith(
            {type: types.RESPONSE_COMMENTS_SUCCESS, comments: mockData}
        )
    })
});
import * as types from './types';
import {getPostCommentsAsync} from "./operations";
// @ts-ignore
import axios from 'axios';

jest.mock('axios');

describe('get comments  async function', () => {
    let dispatchFn;
    let postId = 1;

    beforeEach(() => {
        dispatchFn = jest.fn();
    });

    it('should check if function works without postID', () => {
        getPostCommentsAsync()(dispatchFn);
        expect(dispatchFn).not.toHaveBeenCalled();
    });

    it('should return callback function', () => {
        expect(typeof getPostCommentsAsync()).toBe('function');
    });

    it('should handle REQUEST_COMMENTS', () => {
        axios.get.mockResolvedValue({
            data: []
        });
        getPostCommentsAsync(postId)(dispatchFn);
        expect(dispatchFn).toHaveBeenCalledWith({type: types.REQUEST_COMMENTS})
    });

    it('should handle RESPONSE_COMMENTS_SUCCESS', async () => {
        const mockData = ['123'];
        axios.get.mockResolvedValue({
            data: [...mockData]
        });
        await getPostCommentsAsync(postId)(dispatchFn);

        expect(dispatchFn).toHaveBeenLastCalledWith(
            {type: types.RESPONSE_COMMENTS_SUCCESS, comments: mockData}
        )
    })
});
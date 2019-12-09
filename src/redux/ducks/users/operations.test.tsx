import * as types from "./types";
import { getUsersAsync } from './operations';
import {Dispatch} from 'redux';
import axios from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('users async function', () => {
    let dispatchFn: Dispatch;

    beforeEach(() => {
        dispatchFn = jest.fn();
    });

    it('should return callback function', () => {
        expect(typeof getUsersAsync()).toBe('function');
    });

    it('should handle REQUESTING_USERS_LIST', () => {
        mockedAxios.get.mockResolvedValue({
            data: []
        });
        getUsersAsync()(dispatchFn);
        expect(dispatchFn).toHaveBeenCalledWith({type:types.REQUEST_USERS})
    });

    it('should handle RECEIVE_USERS_LIST', async () => {
        const mockData = ['123'];
        mockedAxios.get.mockResolvedValue({
            data: [...mockData]
        });
        await getUsersAsync()(dispatchFn);

        expect(dispatchFn).toHaveBeenLastCalledWith(
            {type: types.RESPONSE_USERS_SUCCESS, users: mockData}
        )
    })
});
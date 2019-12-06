import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { UsersTable } from './UsersTable';
import Indicator  from './LoadingIndicator';

configure({ adapter: new Adapter() });

describe('users table', () => {
    const getUsersFn = jest.fn();
    let wrapper;
    const users = [{
        "id": 1,
        "name": "Valeria Merrill",
        "email": "valeriamerrill@ohmnet.com",
        "address": "435 Flatbush Avenue, Calverton, Idaho, 8077"
    }];

    beforeEach(() => {
        wrapper = shallow(<UsersTable
            isFetching={false}
            users={users}
            getUsers={getUsersFn}
            friends={{1:["Carlson Brooks", "Pugh Garrett", "Hawkins Pace"]}}
        />);
    });

    it('should exist', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('should render loading indicator, when isFetching true', () => {
        wrapper.setProps({
            isFetching: true
        });
        expect(wrapper.find(Indicator)).toHaveLength(1);
    });

    it('should render users table', () => {
        wrapper.setProps({
            isFetching: false
        });
        expect(wrapper.find('div[data-test-id="users-table"]')).toHaveLength(1);
    });


    it('calls componentDidMount', () => {
        expect(getUsersFn).toHaveBeenCalled();
    });
});
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Icon from '../icon/filter.svg';
import {usersOperations} from "../redux/ducks/users";
// @ts-ignore
import {connect} from 'react-redux';
import '../style/main.css';
import {selectors} from "../redux/ducks/users";
import Indicator  from './LoadingIndicator'

// export interface Props {
//     getUsers:
// }

export class UsersTable extends Component {
    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        if (this.props.isFetching) {
            return ( <Indicator/> );
        }
        return (
            <div data-test-id="users-table" className="App">
                <table className="table table-striped"
                       style={{
                           width: "auto",
                           borderRadius: "1em",
                           overflow: "hidden",
                           margin: "2% auto",
                       }}>
                    <thead className="thead">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Address</th>
                        <th scope="col">Friends</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.users.map(user => (
                        <tr className="columns" key={user.id}>
                            <td>
                                <img className="ml-1" alt="icon" src={Icon}/>
                                <Link to={`/posts/${user.id}`}>{user.name}</Link>
                            </td>
                            <td>{user.email}</td>
                            <td>{user.address}</td>
                            <td>{this.props.friends[user.id].join(', ')}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        users: selectors.getRowsSelector(state),
        friends: selectors.getFriendsSelector(state),
        isFetching: selectors.getIsFetchingSelector(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => dispatch(usersOperations.getUsersAsync())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersTable);

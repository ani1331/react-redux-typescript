import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Icon from '../icon/filter.svg';
import {usersOperations} from "../redux/ducks/users";
import {connect} from 'react-redux';
// import {AnyAction, Dispatch} from 'redux';
import '../style/main.css';
import Indicator  from './LoadingIndicator'
import {FriendsData, UsedData} from "../redux/ducks/types";
import {getFriendsSelector, getIsFetchingSelector, getRowsSelector} from "../redux/ducks/users";

type UsersTableProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

export class UsersTable extends Component<UsersTableProps, {}> {
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
                            //@ts-ignore
                            <td>{this.props.friends[user.id].join(', ')}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        )
    }
}



interface StateToProps {
    users: UsedData[];
    friends: FriendsData[];
    isFetching: boolean
}

interface DispatchToProps {
    getUsers: () => void
}

const mapStateToProps = (state: any): StateToProps => {
    return {
        users: getRowsSelector(state),
        friends: getFriendsSelector(state),
        isFetching: getIsFetchingSelector(state)
    }
};

const mapDispatchToProps = (dispatch: any): DispatchToProps => {
    return {
        getUsers: () => dispatch(usersOperations.getUsersAsync())
    }
};

export default connect<StateToProps, DispatchToProps>(mapStateToProps, mapDispatchToProps)(UsersTable);
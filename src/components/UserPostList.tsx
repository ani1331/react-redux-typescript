import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {postsOperations} from "../redux/ducks/posts";
import {connect} from "react-redux";
import Indicator  from './LoadingIndicator';
import {getPostsSelector, getIsFetchingSelector} from '../redux/ducks/posts/selectors'
import { PostsData } from "../redux/ducks/types";

type UsersPostListTableProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class PostList extends Component<UsersPostListTableProps, {}> {
    componentDidMount() {
        this.props.getUserPosts(+this.props.userId);
    }

    render() {
        if(this.props.isFetching){
            return ( <Indicator/> );
        }
        return (
            <div className="App">
                <table className="table table-striped" style={{
                    width: "80%",
                    borderRadius: "1em",
                    overflow: "hidden",
                    margin: "2% auto",
                }}>
                    <thead className="thead" style={{backgroundColor: "#2F4F4F"}}>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Body</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.posts.map(post => (
                        <tr key={post.id}>
                            <td>
                                <Link to={`/comments/${post.id}`}>{post.title}</Link>
                            </td>
                            <td>{post.body}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

interface StateToProps {
    posts: PostsData[];
    isFetching: boolean;
    userId: string;
}

interface DispatchToProps {
    getUserPosts: (userId: number) => void
}

const mapStateToProps = (state: any, ownProps: any): StateToProps => {
    return {
        posts: getPostsSelector(state),
        isFetching: getIsFetchingSelector(state),
        userId: ownProps.match.params.userId
    }
};

const mapDispatchToProps = (dispatch: any): DispatchToProps => {
    return {
        getUserPosts: (userId) => dispatch(postsOperations.getUserPostsAsync(userId))
    }
};

export default connect<StateToProps, DispatchToProps>(mapStateToProps, mapDispatchToProps)(PostList);
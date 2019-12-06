import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {postsOperations} from "../redux/ducks/posts";
import {connect} from "react-redux";
import Indicator  from './LoadingIndicator';
import {getPostsSelector, getIsFetchingSelector} from '../redux/ducks/posts/selectors'

class PostList extends Component {
    componentDidMount() {
        this.props.getUserPosts(this.props.match.params.userId);
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

const mapStateToProps = (state) => {
    return {
        posts: getPostsSelector(state),
        isFetching: getIsFetchingSelector(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUserPosts: (userId) => dispatch(postsOperations.getUserPostsAsync(userId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
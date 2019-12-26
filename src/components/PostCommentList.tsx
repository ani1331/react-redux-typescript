import React, {Component} from 'react';
import {commentsOperations} from "../redux/ducks/comments";
import {connect} from "react-redux";
import Indicator  from './LoadingIndicator';
import {getCommentsSelector, getIsFetchingSelector} from '../redux/ducks/comments/selectors'
import {CommentsData} from "../redux/ducks/types";

type PostCommentListTableProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class CommentList extends Component<PostCommentListTableProps, {}> {
    componentDidMount() {

        this.props.getCommentList(+this.props.postId);
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
        <thead className="thead" style={{backgroundColor: "#4682B4"}}>
        <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Body</th>
            </tr>
            </thead>
            <tbody>
            {this.props.comments.map(comment => (
                    <tr key={comment.id}>
                        <td>{comment.name}</td>
                        <td>{comment.email}</td>
                        <td>{comment.body}</td>
                        </tr>
                ))}
            </tbody>
            </table>
            </div>
    );
    }
}

interface StateToProps {
    comments: CommentsData[];
    isFetching: boolean;
    postId: number
}

interface DispatchToProps {
    getCommentList: (postId: number) => void
}

const mapStateToProps = (state: any, ownProps: any): StateToProps => {
    return {
        comments: getCommentsSelector(state),
        isFetching: getIsFetchingSelector(state),
        postId: ownProps.match.params.postId
    }
};

const mapDispatchToProps = (dispatch: any): DispatchToProps => {
    return {
        getCommentList: (postId) => dispatch(commentsOperations.getPostCommentsAsync(postId))
    }
};

export default connect<StateToProps, DispatchToProps>(mapStateToProps, mapDispatchToProps)(CommentList);

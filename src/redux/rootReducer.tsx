import { combineReducers } from 'redux';
import usersReducer from "./ducks/users/reducers";
import postsReducer from "./ducks/posts/reducers";
import commentsReducer from "./ducks/comments/reducers";
import { connectRouter } from 'connected-react-router'


const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    users: usersReducer,
    posts: postsReducer,
    comments: commentsReducer
});

export default createRootReducer
import {combineReducers, Reducer} from 'redux';
import usersReducer from "./ducks/users/reducers";
import postsReducer from "./ducks/posts/reducers";
import commentsReducer from "./ducks/comments/reducers";
import { connectRouter } from 'connected-react-router'
import {State} from "./ducks/types";

const createRootReducer = (history: any) => combineReducers({
    router: connectRouter(history),
    users: usersReducer,
    posts: postsReducer,
    comments: commentsReducer
});

// export type RootState = ReturnType<typeof createRootReducer>

export default createRootReducer
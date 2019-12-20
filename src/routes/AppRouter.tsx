import React from "react";
import UsersTable from "../components/UsersTable";
import PostList from "../components/UserPostList";
import UserAlbums from "../components/UserAlbums";
import CommentList from "../components/PostCommentList";
import {Router, Switch, Route} from "react-router-dom";
import { history } from '../redux/configureStore'
import UserPhotos from "../components/UserPhotos";

const AppRouter = () => (
    <Router history={history}>
        <Switch>
            <Route exact path="/" component={UsersTable}/>
            <Route exact path="/posts/:userId" component={PostList}/>
            <Route exact path="/albums/:userId" component={UserAlbums}/>
            <Route exact path="/photos/:albumId" component={UserPhotos}/>
            <Route exact path="/comments/:postId" component={CommentList}/>
        </Switch>
    </Router>
);

export default AppRouter;
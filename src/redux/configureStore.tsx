import {createBrowserHistory} from "history";
import {applyMiddleware, compose, createStore} from "redux";
import createRootReducer from "./rootReducer";
import {routerMiddleware} from "connected-react-router";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

// const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const history = createBrowserHistory();

export default function configureStore() {
    return createStore(
        createRootReducer(history),
        composeWithDevTools(
            applyMiddleware(
                routerMiddleware(history),
                thunk
            ),
        ),
    );
}
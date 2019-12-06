import {createBrowserHistory} from "history";
import {applyMiddleware, compose, createStore} from "redux";
import createRootReducer from "./rootReducer";
import {routerMiddleware} from "connected-react-router";
import thunk from "redux-thunk";
import {State} from "./ducks/types";

// export interface MyStore {
//     language: string;
//     country: string;
//     auth: {
//         authenticated: boolean;
//         username?: string;
//     };
// }

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const history = createBrowserHistory();

export default function configureStore() {
    return createStore<State>(
        createRootReducer(history),
        composeEnhancers(
            applyMiddleware(
                routerMiddleware(history),
                thunk
            ),
        ),
    );
}
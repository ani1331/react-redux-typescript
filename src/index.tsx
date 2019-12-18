import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes/AppRouter';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router'
import configureStore, { history } from './redux/configureStore'

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <AppRouter/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'));

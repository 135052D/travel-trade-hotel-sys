import React from 'react';
import { render } from 'react-dom'
import { createStore ,applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import logger from 'redux-logger'
import reduxThunk from 'redux-thunk'

import { BrowserRouter, Route, Link} from 'react-router-dom'

const store = createStore(
    applyMiddleware(reduxThunk, logger)
);
render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route path="/app" component={App}/>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)

serviceWorker.unregister();
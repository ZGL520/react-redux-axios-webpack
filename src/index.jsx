import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import createHistory from 'history/createHashHistory'
const history = createHistory();
const store = configureStore();

import RootRoute from './router/rootRoute'

render(
    <Provider store={store}>
        <RootRoute history={history}/>
    </Provider>,
    document.getElementById('root')
);


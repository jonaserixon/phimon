import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import routes from './routes/routes';

import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            {routes}
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root') as HTMLElement
);

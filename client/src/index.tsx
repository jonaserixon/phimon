import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import routes from './routes/routes';

ReactDOM.render(
    <BrowserRouter>
        {routes}
    </BrowserRouter>
    ,
    document.getElementById('root') as HTMLElement
);

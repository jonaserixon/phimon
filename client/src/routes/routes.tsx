import * as React from 'react';
import { Route } from 'react-router-dom';

import App from '../containers/App';
import Test from '../components/Test';

export default (
    <div>
        <Route path='/' component={App} />
        <Route path='/test' component={Test} />
    </div>
)

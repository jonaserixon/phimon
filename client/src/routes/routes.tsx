import * as React from 'react';
import { Route } from 'react-router-dom';

import App from '../containers/App';
import Pokemon from '../containers/Pokemon';

export default (
    <div>
        <Route path='/' component={App} />
        <Route path='/pokemon' component={Pokemon} />
    </div>
)

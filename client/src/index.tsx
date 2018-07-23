import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import Pokemon from './components/Pokemon';
import PokemonList from './components/PokemonList'
import store from './redux/store/store';
import history from './utils/history';

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <div>
                <Route path='/' component={App} />
                <Route path='/pokemon/:id' component={Pokemon} />
                <Route path='/list' component={PokemonList} />
            </div>
        </Router>
    </Provider>
    ,
    document.getElementById('root') as HTMLElement
);

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import Pokemon from './components/Pokemon';
import PokemonList from './components/PokemonList';
import store from './redux/store/store';
import history from './utils/history';
import Header from './components/Header';

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <div>
            <Header />
                <Switch>
                    <Route path='/pokemon/:id' component={Pokemon} />
                    <Route path='/database' component={PokemonList} />
                    <Route path='/' component={App} />
                </Switch>
            </div>
        </Router>
    </Provider>
    ,
    document.getElementById('root') as HTMLElement
);

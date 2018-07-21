import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import PokemonPresenter from './components/Pokemon';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route path='/' component={App} />
                <Route path='/pokemon' component={PokemonPresenter} />
            </div>
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root') as HTMLElement
);

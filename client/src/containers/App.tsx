import * as React from 'react';
import '../style.css';
import { connect } from "react-redux";

import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import PokemonPresenter from '../components/Pokemon';

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <Header />
                <SearchBar />
                <PokemonPresenter />
            </div>
        );
    }
}

export default App;

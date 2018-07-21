import * as React from 'react';
import '../style.css';
import { connect } from 'react-redux';

import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Pokemon from '../components/Pokemon';
import FilterBar from '../components/FilterBar';

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <Header />
                <SearchBar />
                <FilterBar />
                <Pokemon />
            </div>
        );
    }
}

export default App;

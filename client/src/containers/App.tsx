import * as React from 'react';
import '../style.css';
import { connect } from 'react-redux';

import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <Header />
                <SearchBar />
            </div>
        );
    }
}

export default App;

import * as React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

class Header extends React.Component {
    public render() {
        return (
            <div className="Header">
                <h1>PhiMon - The Ultimate Pokemon Resource</h1>
                <Link to='/'>PhiMon</Link>
                <Link to='/list'>Pokémon Database</Link>
                <SearchBar />
            </div>
        );
    }
}

export default Header;

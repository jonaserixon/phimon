import * as React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    public render() {
        return (
            <div className="Header">
                <h1>PhiMon - The Ultimate Pokemon Resource</h1>

                <Link to='/'>PhiMon</Link>
                <Link to='/list'>Pokemon List</Link>
                
            </div>
        );
    }
}

export default Header;

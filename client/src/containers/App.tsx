import * as React from 'react';
import '../style.css';
import Header from '../components/Header';

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <Header />
            </div>
        );
    }
}

export default App;

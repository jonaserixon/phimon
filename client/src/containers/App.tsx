import * as React from 'react';
import '../style.css';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import * as axios from 'axios';

class App extends React.Component<{userInput: string}> {
    constructor(props: any) {
        super(props);
        this.state = {
            userInput: ''
        };

        this.handleUserInput = this.handleUserInput.bind(this);
    }



    public render() {
        return (
            <div className="App">
                <Header />
                <SearchBar 
                    onClick={this.handleUserInput}
                />

            </div>
        );
    }

    private handleUserInput(input: string): void {
        this.setState({userInput: input});
        console.log(input);
        // Skicka en request till servern med axios
    }
}

export default App;

import * as React from 'react';
import * as Autosuggest from 'react-autosuggest';
import axios from 'axios';

export interface IAutoCompleteProps {
    handleChange(input: any): void;
}

interface IAutoCompleteState {
    pokemons: any[];
}

class AutoComplete extends React.Component<IAutoCompleteProps, IAutoCompleteState> {
    constructor(props: any) {
        super(props);
        this.state = {
            pokemons: []
        }
    }

    public async componentWillMount() {
        const response = await axios.get('/api/pokemon');
        this.setState({pokemons: response.data});
    }

    public createOptions = () => {
        const pokemons = this.state.pokemons.map((pokemon, i) => 
            <option key={i}>{pokemon.pkmnname}</option> 
        )
        return pokemons;
    }

    public getSuggestions = (value: any) => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
        
        return inputLength === 0 ? [] : this.state.pokemons.filter(pokemon =>
            pokemon.pkmnname.toLowerCase().slice(0, inputLength) === inputValue
        );
    };

    public render() {
        return (
            <datalist id='pokemons'>
                {this.createOptions()}
            </datalist>
        );
    }
}

export default AutoComplete;
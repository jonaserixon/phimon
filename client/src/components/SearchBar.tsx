import * as React from 'react';
import { connect } from 'react-redux';
import { getPokemon } from '../redux/actions/pokemonAction';
import * as Autosuggest from 'react-autosuggest';
import axios from 'axios';

interface ISearchBarProps {
    pokemon: any;
    getPokemon(input: any): any;
}

interface ISearchBarState {
    pokemons: any[],
    suggestions: any[],
    value: any
}

class SearchBar extends React.Component<ISearchBarProps, ISearchBarState> {
    constructor(props: any) {
        super(props);
        this.state = {
            pokemons: [],
            suggestions: [],
            value: ''
        };
    }

    public async componentWillMount() {
        const response = await axios.get('/api/pokemon');
        this.setState({pokemons: response.data});
    }

    public render() {
        const inputProps = {
            onChange: this.onChange,
            placeholder: 'Search...',
            value: this.state.value
        };

        return (
            <div className="SearchBar">
                <form onSubmit={this.handleSubmit}>
                    <Autosuggest
                        suggestions={this.state.suggestions}
                        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                        getSuggestionValue={this.getSuggestionValue}
                        renderSuggestion={this.renderSuggestion}
                        inputProps={inputProps}
                    />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }

    private onChange = (event: any, {newValue}: any) => {
        this.setState({
          value: newValue
        });
    };

    private onSuggestionsFetchRequested = ({value}:any) => {
        this.setState({
            suggestions: this.getSuggestions(value)
        });
    };
    
    private onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    private handleSubmit = (event: any): void => {
        event.preventDefault();
        console.log(this.state.value);
        this.props.getPokemon(this.state.value);
    }

    private getSuggestions = (value: any) => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
        
        return inputLength === 0 ? [] : this.state.pokemons.filter(pokemon =>
            pokemon.pkmnname.toLowerCase().slice(0, inputLength) === inputValue
        );
    };
    
    private getSuggestionValue = (suggestion: any) => suggestion.pkmnname;
     
    private renderSuggestion = (suggestion: any) => (
        <div>
            {suggestion.pkmnname}
        </div>
    );
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getPokemon: (pokemon: any) => dispatch(getPokemon(pokemon))
    };
};

export default connect(null, mapDispatchToProps)(SearchBar);

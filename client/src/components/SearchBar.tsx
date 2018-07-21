import * as React from 'react';
import { connect } from 'react-redux';
import { getPokemon } from '../actions/pokemonAction';

export interface ISearchBar {
    pokemon: any;
    getPokemon(input: any): any;
}

class SearchBar extends React.Component<ISearchBar, { value: string }> {
    constructor(props: any) {
        super(props);
        this.state = {
            value: ''
        };
    }

    public render() {
        return (
            <div className="SearchBar">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.value} onChange={this.handleChange} placeholder='search' />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }

    private handleChange = (event: any): void => {
        this.setState({value: event.target.value});
    }

    private handleSubmit = (event: any): void => {
        event.preventDefault();
        console.log(this.state.value);
        this.props.getPokemon(this.state.value);
        
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getPokemon: (pokemon: any) => dispatch(getPokemon(pokemon))
    };
};

export default connect(null, mapDispatchToProps)(SearchBar);

import * as React from 'react';
import FilterBar from './FilterBar';
import axios from 'axios';
import { connect } from 'react-redux';
import { getPokemon } from '../redux/actions/pokemonAction';

interface IPokemonState {
    list: any[];
}

class PokemonList extends React.Component<{getPokemon(input: any): any;}, IPokemonState> {
    constructor(props: any) {
        super(props);
        this.state = {
            list: []
        }
    }

    public async componentDidMount() {
        if (this.state.list.length < 1) {
            const response = await axios.get('/api/pokemon');
            this.setState({list: response.data});
        }
    }

    public handleFiltering = async (input: string) => {
        const response = await axios.get(input);
        this.setState({list: response.data});
    }

    public handleOnClick = (event: any, name: string) => {
        event.preventDefault();
        this.props.getPokemon(name);
    }

    public render() {
        return (
            <div className="PokemonList">
                <h1>Pokemon List</h1>
                <FilterBar submitFilter={this.handleFiltering}/>
                <ol>
                    {this.state.list.map((pokemon, i) => {
                        return (
                            <li key={i} onClick={((e) => this.handleOnClick(e, pokemon.pkmnname))}>{pokemon.pkmnname}</li>
                        )
                    })}
                </ol>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getPokemon: (pokemon: any) => dispatch(getPokemon(pokemon))
    };
};

export default connect(null, mapDispatchToProps)(PokemonList);

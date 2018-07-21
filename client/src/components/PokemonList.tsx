import * as React from 'react';
import { connect } from "react-redux";

export interface IPokemonList {
    pokemon: any;
    isLoading: boolean;
}

class PokemonList extends React.Component<IPokemonList> {

    public componentDidUpdate() {
        console.log(this.props.isLoading);
        console.log(this.props.pokemon);
    }

    public componentWillMount() {
        console.log(this.props.isLoading);
    }

    public render() {
        return (
            <div className="PokemonList">
                <h1>Pokemon List</h1>
                <ul>
                    <li>list</li>
                    <li>of</li>
                    <li>pokemons</li>
                </ul>
            </div>
        );
    }
}

export default PokemonList;

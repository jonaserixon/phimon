import * as React from 'react';
import { connect } from "react-redux";
import { getPokemon } from '../redux/actions/pokemonAction';
import Chart from './Chart';

interface IPokemonProps {
    pokemon: any;
    isLoading: boolean;
    match: any;
    getPokemon(input: any): any;
}

class Pokemon extends React.Component<IPokemonProps> {
    public render() {
        return (
            <div className="Pokemon">
                <h1>Pokemon Page</h1>
                {this.handleRender()}
            </div>
        );
    }

    private handleRender = (): JSX.Element => {
        if (Object.keys(this.props.pokemon).length > 0 && this.props.pokemon.constructor === Object) {            
            return (
                <div>
                    <hr />
                    <h3>{this.props.pokemon.pkmnname}</h3>
                    <p>#{this.props.pokemon.id}</p>
                    <img src={this.props.pokemon.sprite} />
                    <Chart pokemon={[this.props.pokemon]}/>
                    <hr />
                </div>
            )
        } else {
            this.props.getPokemon(this.props.match.params.id);
            return (
                <div>
                    <p>Loading...</p>
                </div>
            )
        }
    }
}

const mapStateToProps = (state: any) => {
    return { 
        isLoading: state.pokemonReducer.isLoading,
        pokemon: state.pokemonReducer.pokemon
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        getPokemon: (pokemon: any) => dispatch(getPokemon(pokemon))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pokemon);

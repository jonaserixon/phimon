import * as React from 'react';
import { connect } from "react-redux";
import { getPokemon } from '../actions/pokemonAction';

export interface IPokemon {
    pokemon: any;
    isLoading: boolean;
    match: any;
    getPokemon(input: any): any;
}

class Pokemon extends React.Component<IPokemon> {

    public componentDidUpdate() {
        console.log(this.props.isLoading);
        console.log(this.props.pokemon);
        console.log('update')
    }

    public componentWillMount() {
        console.log(this.props.isLoading);
        console.log(this.props.match.params.id);
        
    }

    public render() {
        return (
            <div className="Pokemon">
                <h1>Pokemon Container Page</h1>
                {this.handleRender()}
            </div>
        );
    }

    private handleRender = (): JSX.Element => {
        if (Object.keys(this.props.pokemon).length > 0 && this.props.pokemon.constructor === Object) {            
            console.log('finns pkmns')
            return (
                <div>
                    <hr />
                    <h3>{this.props.pokemon.pkmnname}</h3>
                    <p>#{this.props.pokemon.id}</p>
                    <img src={this.props.pokemon.sprite} />
                    <hr />
                </div>
            )
        } else {
            this.props.getPokemon(this.props.match.params.id);
            console.log(this.props.pokemon);
            console.log('tomt som fan')
            return (
                <div>
                    <p>Inte laddat nån Pokemon ännu hehe</p>
                </div>
            )
        }
    }
}

const mapStateToProps = (state: any) => {
    return { 
        isLoading: state.pokemon.isLoading,
        pokemon: state.pokemon.pokemon
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        getPokemon: (pokemon: any) => dispatch(getPokemon(pokemon))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pokemon);

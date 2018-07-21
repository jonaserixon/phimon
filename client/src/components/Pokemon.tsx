// innehåller bild + info + charts för en pokemon
import * as React from 'react';
import { connect } from "react-redux";

export interface IPokemon {
    pokemon: any;
    isLoading: boolean;
}

class Pokemon extends React.Component<IPokemon> {

    public componentDidUpdate() {
        console.log(this.props.isLoading);
        console.log(this.props.pokemon);
    }

    public componentWillMount() {
        console.log(this.props.isLoading);
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
            return (
                <div>
                    <p>Search completed</p>
                    
                    <h3>{this.props.pokemon.pkmnname}</h3>
                    <p>#{this.props.pokemon.id}</p>
                    <img src={this.props.pokemon.sprite} />

                </div>
            )
        } else {
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

export default connect(mapStateToProps, {})(Pokemon);

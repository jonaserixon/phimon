// innehåller bild + info + charts för en pokemon
import * as React from 'react';
import { connect } from "react-redux";

export interface IPokemon {
    pokemon: any;
}

const mapStateToProps = (state: any) => {
    return { pokemon: state.pokemon };
};

class Pokemon extends React.Component<IPokemon> {

    public componentDidUpdate() {
        console.log(this.props.pokemon);
    }

    public render() {
        return (
            <div className="Pokemon">
                <h1>Pokemon Container Page</h1>
            </div>
        );
    }
}

export default connect(mapStateToProps, {})(Pokemon);

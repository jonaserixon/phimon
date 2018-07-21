import * as React from 'react';
import { connect } from 'react-redux';
import { getPokemons } from '../actions/pokemonAction';
import * as qs from 'qs';

export interface IFilterBar {
    getPokemons(input: any): any;
}

class SearchBar extends React.Component<IFilterBar, { selectType: string, sortType: string}> {
    constructor(props: any) {
        super(props);
        this.state = {
            selectType: '',
            sortType: ''
        };
    }

    public render() {
        return (
            <div className="FilterBar">
            <hr />
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>
                            Filter 
                            <select value={this.state.selectType} onChange={this.handleTypeChange}>
                                <option value='normal'>Normal</option>
                                <option value='fighting'>Fighting</option>
                                <option value='flying'>Flying</option>
                                <option value='poison'>Poison</option>
                                <option value='ground'>Ground</option>
                                <option value='rock'>Rock</option>
                                <option value='bug'>Bug</option>
                                <option value='ghost'>Ghost</option>
                                <option value='steel'>Steel</option>
                                <option value='fire'>Fire</option>
                                <option value='water'>Water</option>
                                <option value='grass'>Grass</option>
                                <option value='electric'>Electric</option>
                                <option value='psychic'>Psychic</option>
                                <option value='ice'>Ice</option>
                                <option value='dragon'>Dragon</option>
                                <option value='dark'>Dark</option>
                                <option value='fairy'>Fairy</option>
                            </select>
                        </label>
                    </div>

                    <br />

                    <div>
                        <label>
                            Sort 
                            <select value={this.state.sortType} onChange={this.handleSortChange}>
                                <option value='id'>pokedex id</option>
                                <option value='pkmnname'>name</option>
                                <option value='hp'>HP</option>
                                <option value='atk'>ATK</option>
                                <option value='spAtk'>SPATK</option>
                                <option value='spDef'>SPDEF</option>
                                <option value='def'>DEF</option>
                            </select>
                        </label>
                    </div>
                    <input type="submit" value="Filter" />
                </form>
                <hr />
            </div>
        );
    }

    private handleSortChange = (event: any): void => {
        this.setState({sortType: event.target.value});
    }

    private handleTypeChange = (event: any): void => {
        this.setState({selectType: event.target.value});
    }

    private handleSubmit = (event: any): void => {
        event.preventDefault();
        const queryString = qs.stringify({'type': this.state.selectType, 'sort': this.state.sortType});
        console.log(queryString);
        this.props.getPokemons(queryString);
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getPokemons: (pokemons: any) => dispatch(getPokemons(pokemons))
    };
};

export default connect(null, mapDispatchToProps)(SearchBar);
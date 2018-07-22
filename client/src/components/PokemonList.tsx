import * as React from 'react';
import FilterBar from './FilterBar';
import axios from 'axios';

interface IPokemonState {
    list: any[];
}

class PokemonList extends React.Component<{}, IPokemonState> {
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

    public componentDidUpdate() {
        console.log(this.state.list);
    }

    public handleFiltering = async (input: string) => {
        const response = await axios.get(input);
        this.setState({list: response.data});
    }

    public render() {
        return (
            <div className="PokemonList">
                <h1>Pokemon List</h1>
                <FilterBar submitFilter={this.handleFiltering}/>
            </div>
        );
    }
}

export default PokemonList;

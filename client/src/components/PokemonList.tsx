import * as React from 'react';
import FilterBar from './FilterBar';
import axios from 'axios';
import { connect } from 'react-redux';
import { getPokemon } from '../redux/actions/pokemonAction';
import ComparePage from './ComparePage';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

interface IPokemonState {
    checked: any[]
    list: any[],
    message: string,
    open: boolean,
    selected: string[],
    pokemonData: any[]
}

class PokemonList extends React.Component<{getPokemon(input: any): any;}, IPokemonState> {
    constructor(props: any) {
        super(props);
        this.state = {
            checked: [],
            list: [],
            message: '',
            open: false,
            pokemonData: [],
            selected: [],
        }
    }

    public clearPokemonData = (event: any): void => {
        event.preventDefault();
        this.setState({pokemonData: []});
        this.setState({selected: []});
        this.setState({open: true});
        this.setState({message: 'Chart was cleared.'});
    }

    public async componentDidMount() {
        if (this.state.list.length < 1) {
            const response = await axios.get('/api/pokemon');
            this.setState({list: response.data});
        }
    }

    public handleClick = () => {
        this.setState({ open: true });
    };
    
    public handleClose = (event: any) => {
        this.setState({ open: false });
    };

    public handleFiltering = async (input: string) => {
        const response = await axios.get(input);
        this.setState({list: response.data});
    }

    public handleOnClick = (event: any, name: string): void => {
        event.preventDefault();
        this.props.getPokemon(name);
    }

    public handleAddCompare = async (event: any) => {
        event.preventDefault();
        if (this.state.selected.includes(event.target.value) || this.state.selected.length > 4) {
            console.log('Already selected / Reached maximum number of Pokemons!');
        } else {
            this.setState({open: true});
            this.setState({message: (event.target.value + ' was added.')});
            this.setState({selected: [...this.state.selected, event.target.value]});
            const response = await axios.get('/api/pokemon/specific/' + event.target.value);
            this.setState({pokemonData: [...this.state.pokemonData, response.data[0]]});
        }
    }

    public handleToggle = (value: any) => () => {
        const { checked } = this.state;
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
        
        if (this.state.selected.length > 4) {
            return;
        }
    
        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
    
        this.setState({checked: newChecked});
    };

    public render() {
        return (
            <Grid container={true} className="PokemonList" spacing={16}>
                <Grid item={true} md={4}>
                    <FilterBar submitFilter={this.handleFiltering}/>
                    <List>
                        {this.state.list.map((pokemon, i) => {
                            return (
                                <ListItem key={i} dense={true} button={true} onClick={((e: any) => this.handleOnClick(e, pokemon.pkmnname))}>
                                <Avatar src={pokemon.sprite} />
                                <ListItemText primary={pokemon.pkmnname + ' #' + pokemon.id } />
                                <ListItemText secondary={pokemon.type} />
                                <ListItemSecondaryAction>
                                    <Checkbox
                                        onChange={this.handleToggle(i)}
                                        checked={this.state.checked.indexOf(i) !== -1}
                                        onClick={this.handleAddCompare} value={pokemon.pkmnname}
                                    />
                                </ListItemSecondaryAction>
                                </ListItem>
                            )
                        })}
                    </List>
                </Grid>
                
                <Grid item={true} md={8}>
                    <ComparePage pokemon={this.state.pokemonData} clearPokemonData={this.clearPokemonData}/>
                </Grid>

                <Snackbar
                    anchorOrigin={{
                        horizontal: 'right',
                        vertical: 'bottom'
                    }}
                    open={this.state.open}
                    autoHideDuration={6000}
                    onClose={this.handleClose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">{this.state.message}</span>}
                    action={[
                        <Button key="undo" color="secondary" size="small" onClick={this.handleClose}>
                            Close
                        </Button>,
                        <IconButton
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            onClick={this.handleClose}
                        />
                    ]}
                />
            </Grid>
        );
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getPokemon: (pokemon: any) => dispatch(getPokemon(pokemon))
    };
};

export default connect(null, mapDispatchToProps)(PokemonList);

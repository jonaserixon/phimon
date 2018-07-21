import { GET_POKEMON, SET_POKEMON, GET_POKEMONS, SET_POKEMONS } from './actions';
import axios from 'axios';

// Action creators
export const getPokemon = (input: string) => async (dispatch: any) => {
    try {
        dispatch({ type: GET_POKEMON });
        const queryString = '/api/pokemon/specific/' + input;
        const response = await axios.get(queryString);
        dispatch({
            payload: response.data[0],
            type: SET_POKEMON
        })
    } catch(err) {
        console.log(err);
    }
}

export const getPokemons = (input: string) => async (dispatch: any) => {
    try {
        dispatch({ type: GET_POKEMONS });
        const queryString = '/api/filter' + input;
        const response = await axios.get(queryString);
        console.log(response.data);
        dispatch({
            payload: response.data,
            type: SET_POKEMONS
        })
    } catch(err) {
        console.log(err);
    }
}

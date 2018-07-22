import { GET_POKEMON, SET_POKEMON } from './actions';
import history from '../history';
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
        });
        history.push('/pokemon/' + response.data[0].pkmnname);
    } catch(err) {
        console.log(err);
    }
}

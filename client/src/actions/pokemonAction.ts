import { GET_POKEMON, SET_POKEMON } from './actions';
import axios from 'axios';

// Action creator
export const getPokemon = (input: string) => async (dispatch: any) => {
    try {
        dispatch({ type: GET_POKEMON });
        const response = await axios.get('/api/pokemon/specific/' + input);
        dispatch({
            payload: response.data[0],
            type: SET_POKEMON
        })
    } catch(err) {
        console.log(err);
        throw new Error(err);
    }
}

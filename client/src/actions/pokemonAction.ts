import { GET_POKEMON } from './actions';
import axios from 'axios';

/*
 * action creators
 */
​
export const getPokemon = (input: string) => async (dispatch: any) => {
    try {
        const response = await axios.get('/api/pokemon/specific/' + input);
        console.log(response.data[0])
        dispatch({
            payload: response.data[0],
            type: GET_POKEMON
        })
    } catch(err) {
        console.log(err);
        return;
    }
}
import { GET_POKEMON } from '../actions/actions';

const initialState = {
    pokemon: {},
    pokemons: []
}

export default (state = initialState, action: any) => {
    switch(action.type) {
        case GET_POKEMON: 
            return {
                ...state,
                pokemon: action.payload,
            }
        default: 
            return state;
    }
}

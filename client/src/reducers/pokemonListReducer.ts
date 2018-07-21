import { GET_POKEMONS, SET_POKEMONS } from '../actions/actions';

const initialState = {
    isLoading: false,
    pokemons: []
}

export default (state = initialState, action: any) => {
    switch(action.type) {
        case GET_POKEMONS:
            return {
                ...state,
                isLoading: true,
            }
        case SET_POKEMONS:
            return {
                ...state,
                isLoading: false,
                pokemons: [...state.pokemons, action.payload]
            }
        default: 
            return state;
    }
}

import { GET_POKEMON, SET_POKEMON } from '../actions/actions';

const initialState = {
    isLoading: false,
    pokemon: {}
}

export default (state = initialState, action: any) => {
    switch(action.type) {
        case GET_POKEMON:
            return {
                ...state,
                isLoading: true,
            }
        case SET_POKEMON:
            return {
                ...state,
                isLoading: false,
                pokemon: action.payload
            }
        default: 
            return state;
    }
}

export const GET_POKEMON = 'GET_POKEMON';
export const SET_POKEMON = 'SET_POKEMON';

export const getPokemon = () => ({
    type: GET_POKEMON
});

export const setPokemon = (pokemon: any) => ({
    payload: pokemon,
    type: SET_POKEMON
});

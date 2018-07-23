export const GET_POKEMON = 'GET_POKEMON';
export const SET_POKEMON = 'SET_POKEMON';
export const GET_POKEMONS = 'GET_POKEMONS';
export const SET_POKEMONS = 'SET_POKEMONS';

export const getPokemon = () => ({
    type: GET_POKEMON
});

export const setPokemon = (pokemon: any) => ({
    payload: pokemon,
    type: SET_POKEMON
});

export const getPokemons = () => ({
    type: GET_POKEMONS
});

export const setPokemons = (pokemons: any) => ({
    payload: pokemons,
    type: SET_POKEMONS
});

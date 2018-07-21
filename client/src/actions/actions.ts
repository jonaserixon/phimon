export const GET_POKEMON = 'GET_POKEMON';

// CREATORS
export const getPokemon = (pokemon: any) => ({
  payload: pokemon,
  type: GET_POKEMON
});

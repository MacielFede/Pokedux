import { SET_FAVORITE, SET_POKEMONS } from './types'
import { SET_LOADING } from './types'
import getPokemonInfo from '../api/getPokemonInfo'

export const setPokemons = payload => ({
  type: SET_POKEMONS,
  payload
})

export const getPokemonsWithDetails =
  (pokemons = []) =>
  async dispatch => {
    const pokemonsInfo = await Promise.all(
      pokemons.map((_, index) => getPokemonInfo(index + 1))
    )

    dispatch(setPokemons(pokemonsInfo))
  }

export const setLoading = payload => ({
  type: SET_LOADING,
  payload
})

export const setFavorite = payload => ({
  type: SET_FAVORITE,
  payload
})

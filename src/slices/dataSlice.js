import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { setLoading } from './uiSlice'
import getPokemons from '../api/getPokemons'
import getPokemonInfo from '../api/getPokemonInfo'

const initialState = {
  pokemons: []
}

export const fetchPokemonsWithDetails = createAsyncThunk(
  'data/fetchPokemonsWithDetails',
  async (_, { dispatch }) => {
    dispatch(setLoading(true))
    const pokemonsRes = await getPokemons()
    const pokemonsDetailed = await Promise.all(
      pokemonsRes.map((_, index) => getPokemonInfo(index + 1))
    )
    dispatch(setPokemons(pokemonsDetailed))
    dispatch(setLoading(false))
  }
)

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload
    },
    setFavorite: (state, action) => {
      const currentPokemonIndex = state.pokemons.findIndex(pokemon => {
        return pokemon.id === action.payload.id
      })

      if (currentPokemonIndex >= 0) {
        const isFavorite = state.pokemons[currentPokemonIndex].favorite

        state.pokemons[currentPokemonIndex].favorite = !isFavorite
      }
    }
  }
})

export const { setFavorite, setPokemons } = dataSlice.actions
console.log('🚀 ~ file: dataSlice.js ~ line 29 ~ dataSlice', dataSlice)

export default dataSlice.reducer

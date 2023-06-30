import { fromJS, getIn, setIn, get } from 'immutable'
import { SET_FAVORITE, SET_POKEMONS } from '../actions/types'

const initialState = fromJS({
  pokemons: []
})

export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return setIn(state, ['pokemons'], fromJS(action.payload))
    // return { ...state, pokemons: action.payload } -> este codigo es sin immutable
    case SET_FAVORITE: {
      // const favPokemons = [...state.pokemons] -> no necesitamos hacer esto porque immutable ya se encarga de que no se toque el valor inicial
      const currentPokeIndex = get(state, 'pokemons').findIndex(
        poke => poke.get('id') === action.payload.id
      )

      if (currentPokeIndex < 0) return state
      const isFavorite = getIn(state, [
        'pokemons',
        currentPokeIndex,
        'favorite'
      ])
      console.log(isFavorite)

      return setIn(
        state,
        ['pokemons', currentPokeIndex, 'favorite'],
        !isFavorite
      )
    }
    default:
      return state
  }
}

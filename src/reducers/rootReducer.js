// import { pokemonsReducer } from './pokemons'
// import { uiReducer } from './ui'
import { combineReducers } from 'redux'
import dataReducer from '../slices/dataSlice'
import uiReducer from '../slices/uiSlice'

const rootReducer = combineReducers({
  // data: pokemonsReducer,
  // ui: uiReducer
  data: dataReducer,
  ui: uiReducer
})

export default rootReducer

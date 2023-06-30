// import getPokemonInfo from '../api/getPokemonInfo'

export const logger = store => next => action => {
  console.log(action)
  next(action)
}

// export const addInfo = store => next => async actionInfo => {
//   //This middleware gets more info about the pokemons fetched first
//     const pokemonsInfo = await Promise.all(
//       actionInfo.action.payload.map((_, index) => getPokemonInfo(index + 1))
//     )

//     const updatedAction = {
//       ...actionInfo,
//       action: {
//         ...actionInfo.action,
//         payload: pokemonsInfo
//       }
//     }

//     next(updatedAction)
//   }

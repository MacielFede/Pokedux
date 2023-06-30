import axios from 'axios'

const getPokemonInfo = index => {
  try {
    const response = axios
      .get('https://pokeapi.co/api/v2/pokemon-form/' + index)
      .then(res => res.data)
    return response
  } catch (error) {
    console.error(error)
  }
}

export default getPokemonInfo

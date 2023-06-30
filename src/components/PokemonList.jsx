import PokemonCard from './PokemonCard'
import PropTypes from 'prop-types'

const PokemonList = ({ pokemons }) => {
  return (
    <div className='pokemonList'>
      {pokemons.map(pokemon => {
        return (
          <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            types={pokemon.types}
            image={pokemon.sprites.front_default}
            id={pokemon.id}
            isFav={pokemon.favorite}
          />
        )
      })}
    </div>
  )
}

PokemonList.propTypes = {
  pokemons: PropTypes.array
}

export default PokemonList

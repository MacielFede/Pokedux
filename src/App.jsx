import './App.css'
import Searcher from './components/Searcher'
import PokemonCard from './components/PokemonCard'
import { useState } from 'react'
import logo from './static/logo.svg'

function App() {
  const [pokemons, setPokemons] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

  return (
    <div className='App'>
      <img src={logo} alt='App logo' className='appLogo' />
      <Searcher className='searchBar' />
      <div className='pokemonList'>
        {pokemons.map((pokemon, index) => (
          <PokemonCard key={index} />
        ))}
      </div>
    </div>
  )
}

export default App

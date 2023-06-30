import './App.css'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import Searcher from './components/Searcher'
import { useEffect } from 'react'
import logo from './static/logo.svg'
// import getPokemons from './api/getPokemons'
// import { setLoading, getPokemonsWithDetails } from './actions'
import CircularProgress from '@mui/material/CircularProgress'
import { fetchPokemonsWithDetails } from './slices/dataSlice'
import { setDisplayFavorites } from './slices/uiSlice'
import PokemonList from './components/PokemonList'

function App() {
  const pokemons = useSelector(state => state.data.pokemons, shallowEqual)
  const loading = useSelector(state => state.ui.loading)
  const favorites = useSelector(state => state.ui.displayFavorites)

  const dispatch = useDispatch()
  // const pokemons = useSelector(state =>
  //   getIn(state, ['data', 'pokemons'], shallowEqual)
  // ).toJS()
  // const loading = useSelector(state => getIn(state, ['ui', 'loading']))
  // const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchPokemonsWithDetails())
    // const fetchPokemons = async () => {
    //   const pokemonsRes = await getPokemons()
    //   dispatch(getPokemonsWithDetails(pokemonsRes))
    // }
    // dispatch(setLoading(true))
    // fetchPokemons()
    // dispatch(setLoading(false))
  }, [])

  const favHandler = () => {
    dispatch(setDisplayFavorites(!favorites))
  }

  return (
    <div className='App'>
      <img src={logo} alt='Pokedux logo' className='Pokedux' />
      <Searcher className='searchBar' displayFavs={favHandler} />
      {loading ? (
        <CircularProgress sx={{ alignSelf: 'center', marginTop: 5 }} />
      ) : favorites ? (
        <PokemonList pokemons={pokemons.filter(poke => poke.favorite)} />
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </div>
  )
}

export default App

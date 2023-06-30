import { TextField, IconButton, ToggleButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import PropTypes from 'prop-types'
import './Searcher.css'
import { useSelector } from 'react-redux'

const Searcher = ({ displayFavs }) => {
  const favsSelected = useSelector(state => state.ui.displayFavorites)

  return (
    <div className='searchBar'>
      <ToggleButton
        value='Display Favs'
        selected={favsSelected}
        onClick={displayFavs}
      >
        Display favs
      </ToggleButton>
      <TextField
        id='outlined-basic'
        label='Search'
        sx={{ width: 600, marginLeft: 2 }}
        variant='outlined'
      />
      <IconButton aria-label='search'>
        <SearchIcon />
      </IconButton>
    </div>
  )
}

Searcher.propTypes = {
  displayFavs: PropTypes.func
}

export default Searcher

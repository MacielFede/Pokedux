import { TextField, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import './Searcher.css'

const Searcher = () => {
  return (
    <div className='searchBar'>
      <TextField
        id='outlined-basic'
        label='Search'
        sx={{ width: 600 }}
        variant='outlined'
      />
      <IconButton aria-label='search'>
        <SearchIcon />
      </IconButton>
    </div>
  )
}

export default Searcher

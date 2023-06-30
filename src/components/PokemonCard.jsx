import { Card, CardHeader, CardMedia, IconButton } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { setFavorite } from '../slices/dataSlice'
// import { setFavorite } from '../actions'

const PokemonCard = ({ id, name, types, image, isFav }) => {
  const dispatch = useDispatch()
  const favColor = isFav ? 'red' : 'grey'
  const favHandler = () => {
    dispatch(setFavorite({ id: id }))
  }
  return (
    <Card sx={{ width: 250, maxWidth: 345 }}>
      <CardHeader
        title={name}
        subheader={types.map(t => t.type.name).join(', ')}
        action={
          <IconButton aria-label='add to favorites' onClick={favHandler}>
            <FavoriteIcon sx={{ color: favColor }} />
          </IconButton>
        }
      />
      <CardMedia component='img' image={image} alt={name + ' image'} />
    </Card>
  )
}

PokemonCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  types: PropTypes.array,
  image: PropTypes.string,
  isFav: PropTypes.bool
}

export default PokemonCard

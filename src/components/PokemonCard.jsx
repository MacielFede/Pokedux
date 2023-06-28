import { Card, CardHeader, CardMedia } from '@mui/material'

const PokemonCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title='Pokemons name' subheader='Pokemon types' />
      <CardMedia
        component='img'
        image='https://mui.com/static/images/cards/paella.jpg'
        alt='Pokemons name + image'
      />
    </Card>
  )
}

export default PokemonCard

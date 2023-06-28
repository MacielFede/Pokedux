import { Card, CardHeader, CardMedia } from '@mui/material'

const PokemonCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title='Pokemons name' />
      <CardMedia component='img' image='' alt='Pokemons name + image' />
    </Card>
  )
}

export default PokemonCard

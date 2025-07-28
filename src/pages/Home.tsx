import { useQuery } from '@tanstack/react-query'
import { api } from '../services/api'
import { useFavoritesStore } from '../store/useFavoritesStore'
import {
  Card, CardMedia, CardContent, Typography, IconButton, Box
} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

type Character = {
  id: number
  name: string
  image: string
  species: string
}

export  function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ['characters'],
    queryFn: async () => {
      const res = await api.get('/character')
      return res.data.results as Character[]
    }
  })

  const { favorites, addFavorite, removeFavorite } = useFavoritesStore()

  const toggleFavorite = (char: Character) => {
    const isFav = favorites.some((f) => f.id === char.id)
    isFav ? removeFavorite(char.id) : addFavorite(char)
  }

  return (
    <Box sx={{ padding: 4 }}>
    <Typography variant="h4" gutterBottom>
      Rick and Morty Characters
    </Typography>
  
    {isLoading && <p>Loading...</p>}
  
    <Box
      sx={{
        display: 'grid',
        gap: 2,
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(4, 1fr)'
        }
      }}
    >
      {data?.map((char) => {
        const isFav = favorites.some((f) => f.id === char.id)
        return (
          <Card key={char.id}>
            <CardMedia
              component="img"
              height="200"
              image={char.image}
              alt={char.name}
            />
            <CardContent>
              <Typography variant="h6">{char.name}</Typography>
              <Typography variant="body2">{char.species}</Typography>
              <IconButton onClick={() => toggleFavorite(char)} color="primary">
                {isFav ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </IconButton>
            </CardContent>
          </Card>
        )
      })}
    </Box>
  </Box>
  )
}

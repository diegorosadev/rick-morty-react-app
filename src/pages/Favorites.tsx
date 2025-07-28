import { useFavoritesStore } from '../store/useFavoritesStore'
import { Card, CardMedia, CardContent, Typography, IconButton, Box } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

export const Favorites = () => {
  const { favorites, removeFavorite } = useFavoritesStore()

  return (
    <div style={{ padding: '2rem' }}>
      <Typography variant="h4" gutterBottom>Meus Favoritos</Typography>

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
        {favorites.map((char) => {
             return (
            <Card key={char.id}>
              <CardMedia component="img" height="200" image={char.image} alt={char.name} />
              <CardContent>
                <Typography variant="h6">{char.name}</Typography>
                <IconButton onClick={() => removeFavorite(char.id)} color="error">
                  <DeleteIcon />
                </IconButton>
              </CardContent>
            </Card>
             )
            })}
      </Box>
    </div>
  )
}
export default Favorites;

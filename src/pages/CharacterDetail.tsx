import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { api } from '../services/api'
import { Box, Typography, Card, CardMedia, CircularProgress } from '@mui/material'

type Character = {
  id: number
  name: string
  image: string
  species: string
  gender: string
  status: string
  origin: { name: string }
  location: { name: string }
}

export function CharacterDetail() {
  const { id } = useParams()

  const { data, isLoading } = useQuery({
    queryKey: ['character', id],
    queryFn: async () => {
      const res = await api.get(`/character/${id}`)
      return res.data as Character
    }
  })

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
        <CircularProgress />
      </Box>
    )
  }

  if (!data) return <p>Character not found.</p>

  return (
    <Box sx={{ padding: 4 }}>
      <Card sx={{ maxWidth: 400, margin: '0 auto' }}>
        <CardMedia component="img" height="400" image={data.image} alt={data.name} />
        <Box sx={{ padding: 2 }}>
          <Typography variant="h5">{data.name}</Typography>
          <Typography>Status: {data.status}</Typography>
          <Typography>Species: {data.species}</Typography>
          <Typography>Gender: {data.gender}</Typography>
          <Typography>Origin: {data.origin.name}</Typography>
          <Typography>Current Location: {data.location.name}</Typography>
        </Box>
      </Card>
    </Box>
  )
}

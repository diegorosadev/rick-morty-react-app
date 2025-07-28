import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { api } from '../services/api'
import {
  Box,
  Typography,
  Card,
  CardMedia,
  Skeleton
} from '@mui/material'

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

export const CharacterDetail = () => {
  const { id } = useParams()

  const { data, isLoading } = useQuery({
    queryKey: ['character', id],
    queryFn: async () => {
      const res = await api.get(`/character/${id}`)
      return res.data as Character
    }
  })

  const isLoadingOrNull = isLoading || !data

  return (
    <Box sx={{ padding: 4 }}>
      <Card sx={{ maxWidth: 400, margin: '0 auto' }}>
        {isLoadingOrNull ? (
          <Skeleton variant="rectangular" height={400} />
        ) : (
          <CardMedia component="img" height="400" image={data.image} alt={data.name} />
        )}

        <Box sx={{ padding: 2 }}>
          <Typography variant="h5">
            {isLoadingOrNull ? <Skeleton width="80%" /> : data.name}
          </Typography>
          <Typography>
            {isLoadingOrNull ? <Skeleton width="60%" /> : `Status: ${data.status}`}
          </Typography>
          <Typography>
            {isLoadingOrNull ? <Skeleton width="60%" /> : `Species: ${data.species}`}
          </Typography>
          <Typography>
            {isLoadingOrNull ? <Skeleton width="60%" /> : `Gender: ${data.gender}`}
          </Typography>
          <Typography>
            {isLoadingOrNull ? <Skeleton width="80%" /> : `Origin: ${data.origin.name}`}
          </Typography>
          <Typography>
            {isLoadingOrNull ? <Skeleton width="80%" /> : `Current Location: ${data.location.name}`}
          </Typography>
        </Box>
      </Card>
    </Box>
  )
}

export default CharacterDetail

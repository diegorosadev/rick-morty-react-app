import { useNavigate, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { api } from '../services/api'
import {
  Box,
  Typography,
  CardMedia,
  Paper,
  Button,
  Skeleton,
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
  episode: string[]
}


export const CharacterDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const { data: character, isLoading } = useQuery({
    queryKey: ['character', id],
    queryFn: async () => {
      const res = await api.get(`/character/${id}`)
      return res.data as Character
    }
  })

  const { data: episodes } = useQuery({
    queryKey: ['episodes', character?.episode],
    enabled: !!character,
    queryFn: async () => {
      const episodeIds = character!.episode.map((url) => url.split('/').pop()).join(',')
      const res = await api.get(`/episode/${episodeIds}`)
      return Array.isArray(res.data) ? res.data : [res.data]
    }
  })

  if (isLoading) {
    return (
      <Box sx={{ backgroundColor: '#121212', color: '#fff', minHeight: '100vh', p: 4 }}>
        <Skeleton animation="wave"  variant="rectangular" width={120} height={36} sx={{ mb: 3 }} />
        <Skeleton animation="wave"  variant="text" width={200} height={60} sx={{ mb: 4 }} />

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
          <Box sx={{ flex: 1 }}>
            <Skeleton animation="wave"  variant="rectangular" width="100%" height={300} sx={{ mb: 2 }} />

            <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
              <Skeleton animation="wave"  variant="rectangular" height={70} width="100%" />
              <Skeleton animation="wave"  variant="rectangular" height={70} width="100%" />
              <Skeleton animation="wave"  variant="rectangular" height={70} width="100%" />
            </Box>

            <Skeleton animation="wave"  variant="rectangular" width="100%" height={60} sx={{ mb: 2 }} />
            <Skeleton animation="wave"  variant="rectangular" width="100%" height={60} />
          </Box>

          <Box sx={{ flex: 1.5 }}>
            <Skeleton animation="wave"  variant="text" width={150} height={30} sx={{ mb: 2 }} />
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
              {[1, 2, 3, 4].map((i) => (
                <Skeleton animation="wave"  key={i} variant="rectangular" width="calc(50% - 8px)" height={100} />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    )
  }

  return (
    <Box sx={{ backgroundColor: '#121212', color: '#fff', minHeight: '100vh', p: 4 }}>
        <Button variant="contained" 
        onClick={() => navigate('/')}
        sx={{ 
            mb: 3, 
            mt: 10, 
            backgroundColor: '#00d2ff', 
            color: '#000', 
            fontWeighgroundColort: 'bold', '&:hover': { back: '#00c467' } }}
        >
            Back to Home
        </Button>

      <Typography
        variant="h2"
        sx={{
            fontFamily: 'Creepster, cursive',
            color: '#00e676',
            mb: 4,
            textShadow: '4px 4px #0f0de2',
        }}
      >
        DETAILS
      </Typography>

      <Box sx={{ display: 'flex',  flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>

        <Box sx={{ flex: 1 }}>
          <Paper sx={{ p: 2, backgroundColor: '#000', borderRadius: 2, mb: 2 }}>
            <Typography align="center" sx={{ fontFamily: 'cursive', fontWeight: 'bold', mb: 1, color: '#00d2ff' }}>
              {character!.name}
            </Typography>

            <CardMedia
              component="img"
              image={character!.image}
              alt={character!.name}
              sx={{ borderRadius: 2, width: '100%', mb: 2 }}
            />

          </Paper>
            <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
              {[character!.status, character!.species, character!.gender].map((value, idx) => (
                <Box key={idx} sx={{ flex: 1 }}>
                  <Paper sx={{ backgroundColor: '#000', p: 1, textAlign: 'center' }}>
                    <Typography fontSize={12} fontWeight="bold" sx={{color: "#00d2ff"}}>
                      {['STATUS', 'SPECIES', 'GENDER'][idx]}
                    </Typography>
                    <Typography sx={{color: "#fff"}} fontSize={14}>{value}</Typography>
                  </Paper>
                </Box>
              ))}
            </Box>

            <Paper sx={{ mt: 2, p: 2, backgroundColor: '#000' }}>
              <Typography sx={{color: "#00d2ff"}} fontWeight="bold" mb={0.5}>Origin</Typography>
              <Typography sx={{color: "#fff"}}>{character!.origin.name}</Typography>
            </Paper>

            <Paper sx={{ mt: 2, p: 2, backgroundColor: '#000' }}>
              <Typography sx={{color: "#00d2ff"}} fontWeight="bold" mb={0.5}>Location</Typography>
              <Typography sx={{color: "#fff"}}>{character!.location.name}</Typography>
            </Paper>
        </Box>

        {/* Coluna direita */}
        <Box sx={{ flex: 1.5 }}>
          <Typography variant="h5" sx={{ fontFamily: 'cursive', mb: 2 }}>EPISODES</Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            {episodes?.map((ep) => (
              <Paper
                key={ep.id}
                sx={{
                  backgroundColor: '#000',
                  p: 2,
                  width: 'calc(50% - 8px)',
                  minWidth: '240px'
                }}
              >
                <Typography sx={{ color: '#00d2ff', fontWeight: 'bold' }}>{ep.episode}</Typography>
                <Typography sx={{ color: 'white', fontWeight: '500' }}>{ep.name}</Typography>
                <Typography variant="caption" color="gray">{ep.air_date}</Typography>
              </Paper>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default CharacterDetail

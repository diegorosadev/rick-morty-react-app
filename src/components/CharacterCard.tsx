import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Typography,
    IconButton,
    Skeleton,
    Button,
  } from '@mui/material'
  import FavoriteIcon from '@mui/icons-material/Favorite'
  import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
  import type { Character } from '../types/character'
  import { useNavigate } from 'react-router-dom';

  interface Props {
    character?: Character
    loading?: boolean
    isFavorite?: boolean
    onToggleFavorite?: () => void
  }
  
  export default function CharacterCard({
    character,
    loading,
    isFavorite,
    onToggleFavorite,
  }: Props) {
    const navigate = useNavigate();

    if (loading) {
      return (
        <Card sx={{ borderRadius: 3 }}>
          <Skeleton variant="rectangular" height={200} />
          <CardContent>
            <Skeleton width="60%" />
            <Skeleton width="40%" />
            <Skeleton width="50%" />
          </CardContent>
        </Card>
      )
    }
  
    if (!character) return null
  
    const statusColor =
      character.status === 'Alive'
        ? 'green'
        : character.status === 'Dead'
        ? 'red'
        : 'gray'
  
    return (
      <Card
        sx={{
          backgroundColor: '#2d2d2d',
          color: '#fff',
          borderRadius: 3,
          overflow: 'hidden',
          position: 'relative',
          width: "300px"
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image={character.image}
          alt={character.name}
        />
  
        <IconButton
          onClick={onToggleFavorite}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            backgroundColor: 'rgba(0,0,0,0.5)',
            color: '#00e676',
            '&:hover': {
              backgroundColor: 'rgba(0,0,0,0.7)',
            },
          }}
        >
          {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
  
        <CardContent>
          <Typography variant="h6" fontWeight={700}>
            {character.name}
          </Typography>
  
          <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                backgroundColor: statusColor,
                display: 'inline-block',
                mr: 1,
              }}
            />
            {character.status} - {character.species}
          </Typography>
  
          <Typography variant="body2" color="gray">
            Last known location:
          </Typography>
          <Typography variant="body2" mb={1}>
            {character.location.name}
          </Typography>
  
          <Typography variant="body2" color="gray">
            First seen in:
          </Typography>
          <Typography variant="body2">
            {character.origin.name}
          </Typography>

          <Box sx={{
            display: "flex",
            justifyContent: "center",

          }}>
            <Button
                sx={{
                    color: '#00BCD4',
                    '&:hover': {
                    color: '#00acc1',
                    }
                }}
                onClick={() => navigate(`/character/${character.id}`)}>
                Show Details
            </Button>
          </Box>

        </CardContent>
      </Card>
    )
  }
  
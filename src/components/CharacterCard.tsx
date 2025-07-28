import { Card, CardContent, Typography, Skeleton, Button } from '@mui/material';
import type { Character } from '../types/character';
import { useNavigate } from 'react-router-dom';

interface Props {
    character?: Character;
    loading?: boolean;
    isFavorite?: boolean;
    onToggleFavorite?: () => void;
  }  

  export const CharacterCard = ({
    character,
    loading,
    isFavorite,
    onToggleFavorite,
  }: Props) => {
    const navigate = useNavigate();

    return (
      <Card sx={{ width: 200 }}>
        {loading ? (
          <>
            <Skeleton variant="rectangular" height={140} />
            <CardContent>
              <Skeleton width="80%" />
              <Skeleton width="60%" />
            </CardContent>
          </>
        ) : (
          <>
            <img src={character?.image} alt={character?.name} height={'50%'} />
            <CardContent>
              <Typography variant="h6">{character?.name}</Typography>
              <Typography variant="body2">{character?.species}</Typography>
              <Typography variant="body2">{character?.status}</Typography>
  
              <Typography
                onClick={onToggleFavorite}
                color={isFavorite ? 'red' : 'text.secondary'}
                sx={{ cursor: 'pointer', fontWeight: 'bold' }}
              >
                {isFavorite ? '♥ ' : '♡'}
              </Typography>

              <Button
                size="small"
                variant="outlined"
                onClick={() => navigate(`/character/${character?.id}`)}
                sx={{ marginTop: 1 }}
                >
                Show Details
            </Button>
            </CardContent>
          </>
        )}
      </Card>
    );
  }
  export default CharacterCard;
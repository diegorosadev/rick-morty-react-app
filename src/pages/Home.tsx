import { useQuery } from '@tanstack/react-query'
import { api } from '../services/api'
import { useFavoritesStore } from '../store/useFavoritesStore'
import {
  Card, CardMedia, CardContent, Typography, IconButton, Box,
  Button
} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import FilterCard from '../components/FilterCard';
import CharacterCard from '../components/CharacterCard'
import type { Character } from '../types/character'
import Hero from '../components/Hero'

export const Home = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['characters'],
        queryFn: async () => {
        const res = await api.get('/character')
        return res.data.results as Character[]
        }
    })

    const { favorites, addFavorite, removeFavorite } = useFavoritesStore()
    const [status, setStatus] = useState('');
    const [species, setSpecies] = useState('');
    const [gender, setGender] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate()

    const statusOptions = ['Alive', 'Dead', 'unknown'];
    const speciesOptions = ['Human', 'Alien', 'Robot', 'Animal', 'Mythological', 'unknown'];
    const genderOptions = ['Male', 'Female', 'Genderless', 'unknown'];


  const toggleFavorite = (char: Character) => {
    const isFav = favorites.some((f) => f.id === char.id)
    isFav ? removeFavorite(char.id) : addFavorite(char)
  }

  const filteredCharacters = (data ?? []).filter((char) => {
    return (
      (status ? char.status.toLowerCase() === status.toLowerCase() : true) &&
      (species ? char.species.toLowerCase() === species.toLowerCase() : true) &&
      (gender ? char.gender.toLowerCase() === gender.toLowerCase() : true) &&
      (name ? char.name.toLowerCase().includes(name.toLowerCase()) : true)
    );
  });
  

  return (
<Box sx={{ width: '100%', overflowX: 'hidden' }}>

        <Hero />
        <Box sx={{ 
            width: '100%',
            overflowX: 'hidden',
            minHeight: '320px',
            backgroundColor: '#202329',
            color: '#111',
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: 'relative',
            px: 2,
         }}>

        <FilterCard
            status={status}
            setStatus={setStatus}
            species={species}
            setSpecies={setSpecies}
            gender={gender}
            setGender={setGender}
            name={name}
            setName={setName}
            statusOptions={statusOptions}
            speciesOptions={speciesOptions}
            genderOptions={genderOptions}
            />

    
        {isLoading && <p>Loading...</p>}
    
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box
            sx={{
                display: 'grid',
                gap: 2,
                gridTemplateColumns: {
                    xs: '1fr',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(3, 1fr)',
                    lg: 'repeat(4, 1fr)',
                },
            }}
            >
            {isLoading
            ? Array.from({ length: 8 }).map((_, i) => (
                <CharacterCard key={i} loading />
            ))
            : filteredCharacters.map((char) => {
                const isFav = favorites.some((f) => f.id === char.id)
                return (
                    <CharacterCard
                    key={char.id}
                    character={char}
                    isFavorite={isFav}
                    onToggleFavorite={() => toggleFavorite(char)}
                    />
                )
            })}

        </Box>
        </Box>
    </Box>
    </Box>
  )  
}
export default Home;

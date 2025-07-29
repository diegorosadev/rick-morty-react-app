import { useQuery } from '@tanstack/react-query'
import { api } from '../services/api'
import { useFavoritesStore } from '../store/useFavoritesStore'
import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import FilterCard from '../components/FilterCard';
import CharacterCard from '../components/CharacterCard'
import type { Character } from '../types/character'
import Hero from '../components/Hero'
import { PaginationControls } from '../components/PaginationControls'
import { Footer } from '../components/Footer'

export const Home = () => {
    
    const { favorites, addFavorite, removeFavorite } = useFavoritesStore()
    const [status, setStatus] = useState('');
    const [species, setSpecies] = useState('');
    const [gender, setGender] = useState('');
    const [name, setName] = useState('');
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    const statusOptions = ['Alive', 'Dead', 'unknown'];
    const speciesOptions = ['Human', 'Alien', 'Robot', 'Animal', 'Mythological', 'unknown'];
    const genderOptions = ['Male', 'Female', 'Genderless', 'unknown'];

    const { data, isLoading } = useQuery({
        queryKey: ['characters', page],
        queryFn: async () => {
          const res = await api.get(`/character?page=${page}`)
          return res.data as { results: Character[]; info: { pages: number } }
        }
      })

    useEffect(() => {
        if (data?.info?.pages) {
          setTotalPages(data.info.pages)
        }
      }, [data])

  const toggleFavorite = (char: Character) => {
    const isFav = favorites.some((f) => f.id === char.id)
    isFav ? removeFavorite(char.id) : addFavorite(char)
  }

  const filteredCharacters = (data?.results ?? []).filter((char: Character) => {
    return (
      (status ? char.status.toLowerCase() === status.toLowerCase() : true) &&
      (species ? char.species.toLowerCase() === species.toLowerCase() : true) &&
      (gender ? char.gender.toLowerCase() === gender.toLowerCase() : true) &&
      (name ? char.name.toLowerCase().includes(name.toLowerCase()) : true)
    )
  })
  
  return (
     <Box 
         sx={{ 
             width: '100vw',
             backgroundColor: '#202329',
             margin: 0,
             padding: 0,
         }}>
 
             <Hero />
 
             <Box sx={{ 
                 width: '100%',
                 minHeight: '320px',
                 color: '#111',
                 display: "flex",
                 flexDirection: "column",
                 justifyContent: "center",
                 alignItems: "center",
                 position: 'relative',
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
                : filteredCharacters.map((char: Character) => {
                    const isFav = favorites.some((f) => f.id === char.id)
                    return (
                        <CharacterCard
                        key={char.id}
                        character={char}
                        isFavorite={isFav}
                        onToggleFavorite={() => toggleFavorite(char)}
                        />
                    )
                    })
                }

                </Box>
            </Box>
        </Box>

        <PaginationControls
            page={page}
            totalPages={totalPages}
            onPrev={() => setPage(page - 1)}
            onNext={() => setPage(page + 1)}
        />

        <Footer />
    </Box>
    
  )  
}
export default Home;

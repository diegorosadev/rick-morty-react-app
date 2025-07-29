import { Tabs, Tab, Box, Badge } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useLocation, useNavigate } from 'react-router-dom'
import { useFavoritesStore } from '../store/useFavoritesStore'

export const TabNavigation = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { favorites } = useFavoritesStore()

  const handleChange = (_: any, newValue: string) => {
    navigate(newValue)
  }

  const isActive = (path: string) => location.pathname === path

  return (
    <Box sx={{ backgroundColor: '#1F1F1F', p: 1, borderRadius: 5, display: 'inline-flex' }}>
      <Tabs
        value={location.pathname}
        onChange={handleChange}
        textColor="inherit"
        TabIndicatorProps={{ style: { display: 'none' } }}
        sx={{
          '& .MuiTab-root': {
            textTransform: 'none',
            borderRadius: 4,
            px: 2,
            py: 1,
            color: 'white',
            '&.Mui-selected': {
              backgroundColor: 'white',
              color: 'black',
            },
          },
        }}
      >
        <Tab
          icon={
          <HomeIcon
                sx={{
                    color: isActive('/') ? '#00e676' : '#999'
                }}
            />
            }
          iconPosition="start"
          label="Home"
          value="/"
        />
        <Tab
          icon={
    
               <FavoriteIcon
                sx={{
                  color: isActive('/favorites') ? '#00e676' : '#999'
                }}
              />
          }
          iconPosition="start"
          label="Favorites"
          value="/favorites"
        />
      </Tabs>
          <Badge badgeContent={favorites.length} color="success" ></Badge>
    </Box>
  )
}

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, Badge } from '@mui/material';
import { lazy, Suspense } from 'react'; 
import { useFavoritesStore } from './store/useFavoritesStore'; 

const Home = lazy(() => import('./pages/Home'));
const Favorites = lazy(() => import('./pages/Favorites'));
const CharacterDetail = lazy(() => import('./pages/CharacterDetail'));

function App() {
  const { favorites } = useFavoritesStore(); 

  return (
    <BrowserRouter>
      <AppBar position="fixed" sx={{ width: '100%', backgroundColor: '#0a0a0a' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Rick and Morty
          </Typography>

          <Button   
            color={location.pathname === '/' ? 'primary' : 'inherit'}
            component={Link}
            to="/"
          >
          🏠 Home
          </Button>

          <Button 
            color={location.pathname === '/favorites' ? 'primary' : 'inherit'}
            component={Link}
            to="/favorites"
          >
            <Badge badgeContent={favorites.length} color="success">
              💚 Favoritos
            </Badge>
          </Button>
        </Toolbar>
      </AppBar>

      <Box sx={{ mt: 10, px: 2 }}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/character/:id" element={<CharacterDetail />} />
          </Routes>
        </Suspense>
      </Box>
    </BrowserRouter>
  );
}

export default App;

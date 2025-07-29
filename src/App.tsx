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
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo alinhada à esquerda */}
          <Box
            component="img"
            src="src/assets/img/rick-and-morty-logo.svg"
            alt="Rick and Morty Logo"
            sx={{ width: 100, height: 'auto' }}
          />

          {/* Botões alinhados à direita */}
          <Box display="flex" gap={2}>
            <Button
              color={location.pathname === '/' ? 'primary' : 'inherit'}
              component={Link}
              to="/"
            >
              🏠 HOME
            </Button>
            <Button
              color={location.pathname === '/favorites' ? 'primary' : 'inherit'}
              component={Link}
              to="/favorites"
            >
              💚 FAVORITOS
            </Button>
          </Box>
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

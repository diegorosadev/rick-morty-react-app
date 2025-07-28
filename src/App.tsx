import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { lazy, Suspense } from 'react'; 

const Home = lazy(() => import('./pages/Home'));
const Favorites = lazy(() => import('./pages/Favorites'));
const CharacterDetail = lazy(() => import('./pages/CharacterDetail'));

function App() {
  return (
    <BrowserRouter>
      <AppBar position="fixed" sx={{ width: '100%' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Rick and Morty
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/favorites">Favoritos</Button>
        </Toolbar>
      </AppBar>

      <Box sx={{ mt: 10, px: 2 }}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />+
          <Route path="/character/:id" element={<CharacterDetail />} />
        </Routes>
        </Suspense>

      </Box>
    </BrowserRouter>
  );
}

export default App;

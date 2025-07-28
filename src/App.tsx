import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import Favorites from './pages/Favorites';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { CharacterDetail } from './pages/CharacterDetail' // importa a nova página

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />+
          <Route path="/character/:id" element={<CharacterDetail />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;

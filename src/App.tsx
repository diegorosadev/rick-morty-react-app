import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { lazy, Suspense } from 'react'; 
import { TabNavigation } from './components/TabNavigation';
import logo from './assets/img/rick-and-morty-logo.svg'
import BackToTop from './components/BackToTop';

const Home = lazy(() => import('./pages/Home'));
const Favorites = lazy(() => import('./pages/Favorites'));
const CharacterDetail = lazy(() => import('./pages/CharacterDetail'));

function App() {

  return (
    <BrowserRouter>
      <AppBar position="fixed" sx={{ width: '100vw', backgroundColor: '#0a0a0a' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box
          component="img"
          src={logo}
          alt="Rick and Morty Logo"
          sx={{ width: 100, height: 'auto' }}
        />

          <Box display="flex" gap={2}>
            <TabNavigation />
          </Box>
        </Toolbar>

      </AppBar>

      <Box sx={{ width: '100%' }}>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/character/:id" element={<CharacterDetail />} />
            </Routes>
            <BackToTop />
          </Suspense>
      </Box>
    </BrowserRouter>
  );
}

export default App;

import { Box, Typography } from '@mui/material';

export const Hero = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url("public/img/500555-rick-and-morty.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100%', 
        minHeight: '520px',
        backgroundColor: 'white',
        color: '#111',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative',
        mt: 4
      }}
    >

<img
        src="src\assets\img\rick.svg"
        alt="Rick"
        style={{
          position: 'absolute',
          top: '50%',
          left: '30%',
          transform: 'translate(-50%, -50%)',
          opacity: 0.05,
          width: '350px',
          zIndex: 0,
        }}
      />
      <img
        src="src\assets\img\morty.svg"
        alt="Morty"
        style={{
          position: 'absolute',
          top: '50%',
          left: '70%',
          transform: 'translate(-50%, -50%)',
          opacity: 0.05,
          width: '350px',
          zIndex: 0,
        }}
      />
        <Typography
        variant="h2"
        sx={{
            fontWeight: 900,
            fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
            color: '#00ff90', 
            letterSpacing: '0.1em',
            textShadow: '2px 2px #000', 
            transform: 'skewX(-5deg)',
            zIndex: 2,
            fontFamily: 'monospace',
        }}
        >
        The Rick and Morty Characters
        </Typography>


      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'url(/bg-rick-morty.png) center/contain no-repeat',
          opacity: 0.05,
          zIndex: 1,
        }}
      />
    </Box>
  );
}
export default Hero;
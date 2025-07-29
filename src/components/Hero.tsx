import { Box, Typography } from '@mui/material';

export const Hero = () => {
  return (
    <Box
      sx={{
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
      <Typography
        variant="h2"
        sx={{
          fontWeight: 900,
          zIndex: 2,
          fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
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
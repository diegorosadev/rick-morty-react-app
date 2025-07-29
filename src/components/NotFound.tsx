// src/components/NotFound.tsx
import { Box, Typography } from '@mui/material'

interface NotFoundProps {
  message?: string
}

export const NotFound = ({ message = 'Not found' }: NotFoundProps) => {

  return (
        <Box
            sx={{
                width: '100vw',
                height: '40vh', 
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'center',
                color: '#fff',
                backgroundImage: 'url("src/assets/img/03fdb791c0c8753db54348da091ba79b.jpeg")',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
        >
  
        <Typography variant="h5" fontWeight="bold" gutterBottom>
            {message}
        </Typography>
        <Typography variant="body2" color="gray">
            Try choose your favorite characters.
        </Typography>
    </Box>
  )
}

export default NotFound

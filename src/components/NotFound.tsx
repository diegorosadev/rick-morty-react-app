// src/components/NotFound.tsx
import { Box, Typography } from '@mui/material'

interface NotFoundProps {
  message?: string
}

export const NotFound = ({ message = 'Not found' }: NotFoundProps) => {
  return (
    <Box
      sx={{
        mt: 6,
        mb: 8.3,
        width: '100vw',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#fff',
      }}
    >
        <Typography variant="h5" fontWeight="bold" gutterBottom>
            {message}
        </Typography>
        <Typography variant="body2" color="gray">
            Try adjusting filters or reviewing the data.
        </Typography>
    </Box>
  )
}

export default NotFound

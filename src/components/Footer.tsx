import { Box, Typography, Link, Stack } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import TwitterIcon from '@mui/icons-material/Twitter'
import FavoriteIcon from '@mui/icons-material/Favorite'
import CircleIcon from '@mui/icons-material/Circle'

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#1A1A1D',
        color: '#ccc',
        py: 4,
        mt: 8,
        textAlign: 'center',
      }}
    >
      <Stack spacing={1} alignItems="center">
        <Typography variant="body2">
          CHARACTERS: 826 &nbsp; | &nbsp; LOCATIONS: 126 &nbsp; | &nbsp; EPISODES: 51
        </Typography>

        <Typography variant="body2">
          SERVER STATUS: <CircleIcon sx={{ color: 'lime', fontSize: 12, verticalAlign: 'middle' }} />
        </Typography>

        <Stack direction="row" spacing={3} justifyContent="center" sx={{ mt: 1 }}>
          <img src="/netlify.svg" alt="Netlify" height={20} />
          <img src="/stellate.svg" alt="Stellate" height={20} />
        </Stack>

        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 1 }}>
          <GitHubIcon fontSize="small" />
          <TwitterIcon fontSize="small" />
          <FavoriteIcon fontSize="small" />
        </Stack>

        <Typography variant="caption" sx={{ mt: 2 }}>
          &lt;/&gt;Created by <Link href="https://github.com/diegorosadev" color="inherit" underline="hover">Diego Rosa</Link> {new Date().getFullYear()}
        </Typography>
      </Stack>
    </Box>
  )
}

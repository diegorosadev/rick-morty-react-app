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
        textAlign: 'center',
      }}
    >
      <Stack spacing={3} alignItems="center">
        <Typography variant="body2">
          CHARACTERS: 826 &nbsp; | &nbsp; LOCATIONS: 126 &nbsp; | &nbsp; EPISODES: 51
        </Typography>

        <Typography variant="body2">
          SERVER STATUS: <CircleIcon sx={{ color: 'lime', fontSize: 12, verticalAlign: 'middle' }} />
        </Typography>

        <Stack direction="row" spacing={3} justifyContent="center" sx={{ mt: 1 }}>
            <Stack alignItems="center">
                <Typography variant="caption" color="gray">Deployed on Vercel</Typography>
                <img src="src\assets\img\Vercel_logo_2025.svg" alt="Vercel" height={20} />
            </Stack>

            <Stack alignItems="center">
                <Typography variant="caption" color="gray">Built with React</Typography>
                <img src="src\assets\img\React_logo_wordmark.png" alt="React" height={20} />
            </Stack>
        </Stack>

        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 1 }}>
          <GitHubIcon fontSize="small" />
          <TwitterIcon fontSize="small" />
          <FavoriteIcon fontSize="small" />
        </Stack>

        <Typography variant="caption" sx={{ mt: 2 }}>
          &lt;/&gt; Created by <Link href="https://github.com/diegorosadev" color="inherit" underline="hover">Diego Rosa</Link> {new Date().getFullYear()}
        </Typography>
      </Stack>
    </Box>
  )
}

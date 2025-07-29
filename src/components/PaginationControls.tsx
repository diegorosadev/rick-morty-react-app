import { Box, Button, Typography } from '@mui/material'

interface Props {
  page: number
  totalPages: number
  onPrev: () => void
  onNext: () => void
}

export const PaginationControls = ({ page, totalPages, onPrev, onNext }: Props) => (
  <Box display="flex" justifyContent="center" alignItems="center" mt={4} gap={2}>
    <Button
        variant="contained"
        disabled={page === 1}
        onClick={onPrev}
        sx={{
            backgroundColor: '#00BCD4',
            '&:hover': {
            backgroundColor: '#00acc1',
            }
        }}
    >
        Previous
    </Button>

    <Typography color='white'>Page {page} of {totalPages}</Typography>

    <Button
        variant="contained"
        disabled={page === totalPages}
        onClick={onNext}
        sx={{
            backgroundColor: '#00BCD4',
            '&:hover': {
            backgroundColor: '#00acc1',
            }
        }}
    >
        Next
    </Button>
  </Box>
)

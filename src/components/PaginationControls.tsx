import { Box, Button, Typography } from '@mui/material'

interface Props {
  page: number
  totalPages: number
  onPrev: () => void
  onNext: () => void
}

export const PaginationControls = ({ page, totalPages, onPrev, onNext }: Props) => (
  <Box display="flex" justifyContent="center" mt={4} gap={2}>
    <Button variant="contained" disabled={page === 1} onClick={onPrev}>
      Previous
    </Button>

    <Typography>Page {page} of {totalPages}</Typography>

    <Button variant="contained" disabled={page === totalPages} onClick={onNext}>
      Next
    </Button>
  </Box>
)

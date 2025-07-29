import { Box, Card, CardContent, Typography, TextField, MenuItem } from '@mui/material';

interface FilterCardProps {
  status: string;
  setStatus: (value: string) => void;
  species: string;
  setSpecies: (value: string) => void;
  gender: string;
  setGender: (value: string) => void;
  name: string;
  setName: (value: string) => void;
  statusOptions: string[];
  speciesOptions: string[];
  genderOptions: string[];
}

export default function FilterCard({
  status,
  setStatus,
  species,
  setSpecies,
  gender,
  setGender,
  name,
  setName,
  statusOptions,
  speciesOptions,
  genderOptions
}: FilterCardProps) {
  return (
    <Card sx={{ width: "1210px",mb: 4, mt: 4, p: 2, backgroundColor: '#1c1c1c', color: 'white' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>Filters</Typography>

        <Box display="flex" flexDirection="row" gap={2}>
          <TextField
            label="Search by name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            sx={{
                '& .MuiOutlinedInput-root': {
                  color: 'white',
                  '& fieldset': {
                    borderColor: 'gray',
                  },
                  '&:hover fieldset': {
                    borderColor: '#00BCD4', 
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#00BCD4', 
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'gray',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#00BCD4',
                },
              }}
          />

            <TextField
            select
            label="Select status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            fullWidth
            sx={{
                '& .MuiOutlinedInput-root': {
                  color: 'white',
                  '& fieldset': {
                    borderColor: 'gray',
                  },
                  '&:hover fieldset': {
                    borderColor: '#00BCD4', 
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#00BCD4', 
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'gray',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#00BCD4',
                },
              }}
            >
            <MenuItem value="">
                <em>Select status</em>
            </MenuItem>
            {statusOptions.map((s) => (
                <MenuItem key={s} value={s}>{s}</MenuItem>
            ))}
            </TextField>

          <TextField
            select
            label="Select species"
            value={species}
            onChange={(e) => setSpecies(e.target.value)}
            fullWidth
            sx={{
                '& .MuiOutlinedInput-root': {
                  color: 'white',
                  '& fieldset': {
                    borderColor: 'gray',
                  },
                  '&:hover fieldset': {
                    borderColor: '#00BCD4', 
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#00BCD4', 
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'gray',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#00BCD4',
                },
              }}
          >
            <MenuItem value="">
                <em> Select Species </em>
            </MenuItem>
            {speciesOptions.map((s) => (
              <MenuItem key={s} value={s}>{s}</MenuItem>
            ))}
          </TextField>

          <TextField
            select
            label="Select gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            fullWidth
            sx={{
                '& .MuiOutlinedInput-root': {
                  color: 'white',
                  '& fieldset': {
                    borderColor: 'gray',
                  },
                  '&:hover fieldset': {
                    borderColor: '#00BCD4', 
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#00BCD4', 
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'gray',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#00BCD4',
                },
              }}
          >
            <MenuItem value="">
                <em> Select Gender</em>
            </MenuItem>
            {genderOptions.map((g) => (
              <MenuItem key={g} value={g}>{g}</MenuItem>
            ))}
          </TextField>
        </Box>
      </CardContent>
    </Card>
  );
}

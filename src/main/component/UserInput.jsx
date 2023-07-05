/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Autocomplete, Box, Button, FormControl, FormHelperText, Grid, Stack, TextField, Typography,
} from '@mui/material';
import { Search } from '@mui/icons-material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { retrieveTimeTable } from '../slice/timeTableSlice';
import { airports } from '../constant/data';
import { formatDate } from '../constant/util';

function UserInput() {
  const [fromAirports, setFromAirports] = useState('');
  const [toAirports, setToAirports] = useState('');
  const [fromDate, setFromDate] = useState('');

  const dispatch = useDispatch();

  const handleSearchClick = () => {
    const from = fromAirports[0].iataCode;
    const to = toAirports[0].iataCode;
    const date = formatDate(fromDate);
    dispatch(retrieveTimeTable({ from, to, date }));
  };

  return (
    <Grid container justifyContent="space-evenly">
      <Grid>
        <FormControl>
          <Autocomplete
            sx={{ width: '500px' }}
            multiple
            filterSelectedOptions
            limitTags={5}
            options={airports}
            getOptionLabel={(option) => option.city}
            renderInput={(params) => <TextField {...params} />}
            renderOption={(props, option) => (
              <Box {...props}>
                <Stack>
                  <Typography>{`${option.city},${option.state}`}</Typography>
                  <Typography>{`${option.airportName} (${option.iataCode})`}</Typography>
                </Stack>
              </Box>
            )}
            onChange={(_, value) => setFromAirports(value)}
          />
          <FormHelperText>From</FormHelperText>
        </FormControl>
      </Grid>
      <Grid>
        <FormControl>
          <Autocomplete
            sx={{ width: '500px' }}
            multiple
            filterSelectedOptions
            limitTags={5}
            options={airports}
            getOptionLabel={(option) => option.city}
            renderInput={(params) => <TextField {...params} />}
            renderOption={(props, option) => (
              <Box {...props}>
                <Stack>
                  <Typography>{`${option.city},${option.state}`}</Typography>
                  <Typography>{`${option.airportName} (${option.iataCode})`}</Typography>
                </Stack>
              </Box>
            )}
            onChange={(_, value) => setToAirports(value)}
          />
          <FormHelperText>To</FormHelperText>
        </FormControl>
      </Grid>
      <Grid>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            disablePast
            format="DD/MM/YYYY"
            value={fromDate}
            onChange={(value) => setFromDate(value)}
          />
        </LocalizationProvider>
      </Grid>
      <Grid>
        <Button
          variant="contained"
          color="primary"
          size="large"
          target="_blank"
          disabled={false}
          sx={{ width: '180px', margin: '5px' }}
          startIcon={<Search />}
          onClick={handleSearchClick}
        >
          Search
        </Button>
      </Grid>
    </Grid>
  );
}

export default UserInput;

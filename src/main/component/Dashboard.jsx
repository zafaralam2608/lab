import React from 'react';
import { Box, Grid } from '@mui/material';
import UserInput from './UserInput';
import Filters from './Filters';
import Results from './Results';

function Dashboard() {
  return (
    <Box>
      <UserInput />
      <Grid container>
        <Filters />
        <Results />
      </Grid>
    </Box>
  );
}

export default Dashboard;

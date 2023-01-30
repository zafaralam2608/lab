import React from 'react';
import { Box, Grid } from '@mui/material';
import UserInput from './UserInput';
import Results from './Results';

function Dashboard() {
  return (
    <Box>
      <UserInput />
      <Grid container>
        <Results />
      </Grid>
    </Box>
  );
}

export default Dashboard;

import React from 'react';
import {
  Box, FormControl, FormHelperText, Grid,
} from '@mui/material';
import { Typeahead } from 'react-bootstrap-typeahead';

function Dashboard() {
  return (
    <Box>
      <Grid>
        <FormControl>
          <Typeahead
            labelKey="Source"
          />
          <FormHelperText>From</FormHelperText>
        </FormControl>
      </Grid>
    </Box>
  );
}

export default Dashboard;

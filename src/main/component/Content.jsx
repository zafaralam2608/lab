import React from 'react';
import { Box, Container, Toolbar } from '@mui/material';
import Dashboard from './Dashboard';

function Content() {
  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, height: '100vh', overflow: 'auto' }}
    >
      <Toolbar />
      <Container maxWidth="100%" sx={{ mt: 5, mb: 5 }}>
        <Dashboard />
      </Container>
    </Box>
  );
}

export default Content;

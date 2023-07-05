import React from 'react';
import { useSelector } from 'react-redux';
import {
  Alert,
  Grid, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography,
} from '@mui/material';
import { selectTimeTable } from '../slice/timeTableSlice';
import Row from './Row';

function Results() {
  const { timeTable } = useSelector(selectTimeTable);
  const { timeTableLoaded, timeTableData, timeTableError } = timeTable;

  if (!timeTableLoaded) {
    return (<div>Loading...</div>);
  }

  if (timeTableError) {
    return (
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="error">{timeTableError}</Alert>
      </Stack>
    );
  }

  return (
    <Grid container sx={{ m: '50px 100px' }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Airline</TableCell>
              <TableCell>Departure</TableCell>
              <TableCell>Duration</TableCell>
              <TableCell>Arrival</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          {timeTableData.flights.length > 0
            ? (
              <TableBody>
                {timeTableData.flights.map((flight) => (
                  <Row key={flight.legs.map((leg) => leg.flightNum).join('-')} flight={flight} />
                ))}
              </TableBody>
            )
            : (
              <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0, textAlign: 'center' }} colSpan={5}>
                  <Typography>No flights found</Typography>
                </TableCell>
              </TableRow>
            )}
        </Table>
      </TableContainer>
    </Grid>
  );
}

export default Results;

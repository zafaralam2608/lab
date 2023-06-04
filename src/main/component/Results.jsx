import React from 'react';
import { useSelector } from 'react-redux';
import {
  Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography,
} from '@mui/material';
import { selectTimeTable } from '../slice/timeTableSlice';
import { decodeDuration, decodeTS } from '../constant/util';

function Results() {
  const { timeTable } = useSelector(selectTimeTable);
  const { timeTableLoaded, timeTableData } = timeTable;

  if (!timeTableLoaded) {
    return (<div>Loading...</div>);
  }

  return (
    <Grid container sx={{ m: '50px 100px' }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Sort by :</TableCell>
              <TableCell>Departure</TableCell>
              <TableCell>Duration</TableCell>
              <TableCell>Air time</TableCell>
              <TableCell>Arrival</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {timeTableData.flights.map((flight) => (
              <TableRow
                key={flight.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {flight.name}
                </TableCell>
                <TableCell>
                  <Typography>{decodeTS(flight.tsDep)}</Typography>
                  <Typography>{flight.codeDep}</Typography>
                </TableCell>
                <TableCell>{decodeDuration(flight.timeTrip)}</TableCell>
                <TableCell>{decodeDuration(flight.timeFlight)}</TableCell>
                <TableCell>
                  <Typography>{decodeTS(flight.tsArr)}</Typography>
                  <Typography>{flight.codeArr}</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}

export default Results;

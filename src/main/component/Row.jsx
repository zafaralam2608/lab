/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  Collapse, Grid, IconButton, TableCell, TableRow, Typography,
} from '@mui/material';
import { AccessTime, KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { decodeDuration, decodeTS } from '../constant/util';

function Row({ flight }) {
  const [open, setOpen] = useState(false);
  const {
    tsDep, tsArr, codeDep, codeArr,
  } = flight;
  return (
    <>
      <TableRow
        key={flight.name}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {flight.legs[0].airline}
        </TableCell>
        <TableCell>
          <Typography>{decodeTS(tsDep)}</Typography>
          <Typography>{codeDep}</Typography>
        </TableCell>
        <TableCell>
          <Typography>{decodeDuration(flight.timeTrip)}</Typography>
          <Typography>{flight.legs.length === 1 ? 'Non stop' : `${flight.legs.length - 1} stop`}</Typography>
        </TableCell>
        <TableCell>
          <Typography>{decodeTS(tsArr)}</Typography>
          <Typography>{codeArr}</Typography>
        </TableCell>
        <TableCell>
          <IconButton
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            <Typography>Details</Typography>
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
          <Collapse in={open}>
            {flight.legs.map((leg) => (
              <Grid container justifyContent="space-evenly">
                <Grid>
                  <Typography variant="h6">{`${leg.airline} ${leg.flightNum}`}</Typography>
                </Grid>
                <Grid>
                  <Typography variant="h6">{`${leg.airportDep} ${decodeTS(leg.tsDep)}`}</Typography>
                </Grid>
                <Grid>
                  <AccessTime />
                  <Typography>{decodeDuration(leg.duration)}</Typography>
                </Grid>
                <Grid>
                  <Typography variant="h6">{`${leg.airportArr} ${decodeTS(leg.tsArr)}`}</Typography>
                </Grid>
              </Grid>
            ))}
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default Row;

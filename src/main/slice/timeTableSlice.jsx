import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { evaluateFlightDetails } from '../constant/util';

const ROOT_URL = 'https://timetable-lookup.p.rapidapi.com';

const HEADERS = { 'X-RapidAPI-Key': 'c8eba806cdmsh11f91fc417ce101p11e74fjsn2781d4639dfb' };

export const retrieveTimeTable = createAsyncThunk('timeTable/retrieve', async ({ from, to, date }, thunkApi) => {
  try {
    const response = await axios.get(`${ROOT_URL}/TimeTable/${from}/${to}/${date}`, { headers: HEADERS });
    return await response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.response.data);
  }
});

const initialState = {
  timeTableLoaded: null,
  timeTableError: null,
  timeTableData: null,
};

const timeTableSlice = createSlice({
  name: 'timeTable',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(retrieveTimeTable.pending, (state) => {
      state.timeTableLoaded = false;
    });
    builder.addCase(retrieveTimeTable.rejected, (state) => {
      state.timeTableLoaded = true;
      state.timeTableError = 'Error retreiving timeTable details';
    });
    builder.addCase(retrieveTimeTable.fulfilled, (state, data) => {
      state.timeTableLoaded = true;
      const xml = data.payload;
      const flights = evaluateFlightDetails(xml);
      state.timeTableData = flights;
    });
  },
});

export const selectTimeTable = createSelector((state) => ({
  timeTable: state.timeTable,
}), (state) => state);

export default timeTableSlice.reducer;

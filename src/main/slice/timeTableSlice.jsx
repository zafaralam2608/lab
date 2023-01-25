import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { evaluateFlightDetails } from '../constant/util';
import { HEADERS, ROOT_URL } from '../constant/api';

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
      state.timeTableError = null;
      state.timeTableData = null;
    });
    builder.addCase(retrieveTimeTable.rejected, (state) => {
      state.timeTableLoaded = true;
      state.timeTableData = null;
      state.timeTableError = 'Error retreiving Time Table details';
    });
    builder.addCase(retrieveTimeTable.fulfilled, (state, data) => {
      state.timeTableLoaded = true;
      state.timeTableError = null;
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

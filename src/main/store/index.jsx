import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import timeTableReducer from '../slice/timeTableSlice';

const store = configureStore({
  reducer: {
    timeTable: timeTableReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;

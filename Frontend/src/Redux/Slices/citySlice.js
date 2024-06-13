import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCities } from '../ApiCalls/cityApiCall';

const initialState = {
  cities: [],
  loading: false,
  error: null,
};

export const fetchCitiesAsync = createAsyncThunk(
  'city/fetchCities',
  async () => {
    return await fetchCities();
  }
);

const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCitiesAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCitiesAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.cities = action.payload;
      })
      .addCase(fetchCitiesAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default citySlice.reducer;

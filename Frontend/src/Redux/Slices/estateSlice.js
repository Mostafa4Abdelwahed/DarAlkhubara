import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchEstates } from '../ApiCalls/estateApiCall';

const initialState = {
  estates: [],
  loading: false,
  error: null,
};

export const fetchEstatesAsync = createAsyncThunk(
  'estate/fetchEstates',
  async () => {
    return await fetchEstates();
  }
);

const estateSlice = createSlice({
  name: 'estate',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEstatesAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchEstatesAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.estates = action.payload;
      })
      .addCase(fetchEstatesAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default estateSlice.reducer;

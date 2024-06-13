import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchArticles } from '../ApiCalls/articleApiCall';

const initialState = {
  articles: [],
  loading: false,
  error: null,
};

export const fetchArticlesAsync = createAsyncThunk(
  'article/fetchArticles',
  async () => {
    return await fetchArticles();
  }
);

const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchArticlesAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload;
      })
      .addCase(fetchArticlesAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default articleSlice.reducer;

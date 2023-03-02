import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  news: [],
  category: [],
  user: [],
};

export const getNews = createAsyncThunk(
  "news/fetch/get",
  async (_, thunkAPI) => {
    try {
      const news = await fetch("http://localhost:4000/news");
      return news.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.messenge);
    }
  }
);

export const getNewsCategory = createAsyncThunk(
  "category/fetch",
  async (_, thunkAPI) => {
    try {
      const category = await fetch("http://localhost:4000/category");
      return category.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.messenge);
    }
  }
);

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNews.fulfilled, (state, action) => {
        state.news = action.payload;
      })
      .addCase(getNewsCategory.fulfilled, (state, action) => {
        state.category = action.payload;
      });
  },
});
export default newsSlice.reducer;

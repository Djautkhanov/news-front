import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  news: [],
  category: [],
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
export const addComment = createAsyncThunk('add/comment', async (data, thunkAPI) => {
try {
  console.log(data.text);
  const res = await fetch(`http://localhost:4000/news/comment/${data.id}`, {
  method: 'PATCH',
  body: JSON.stringify({text: data.comment}),
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${thunkAPI.getState().userSlice.token}`
  }
})
 const comment = await res.json()
if(comment.error){
  return thunkAPI.rejectWithValue(comment.error)
}
console.log();
 return  comment
} catch (error) {
  return thunkAPI.rejectWithValue(error)
}
});

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
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.news = state.news.map((news) => {
          console.log(action.payload);
          if(news._id === action.payload._id){
            news = action.payload
          }
          return news;
        })
      })
  },
});
export default newsSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
  users: [],
  error: null,
  signingIn: false,
  signingUp: false,
  token: localStorage.getItem('token'),
};

export const authorization = createAsyncThunk(
  "auth/token",
  async (data, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/login", {
        method: "POST",
        body: JSON.stringify({
          login: data.login,
          password: data.password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const token = await res.json()

    if(token.error){
          return thunkAPI.rejectWithValue(token.error)
        }

        localStorage.setItem('token', token.token)

      return token
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addUser = createAsyncThunk("user/add", async (data, thunkAPI) => {
  try {
    const user = await fetch("http://localhost:4000/user", {
      method: "POST",
      body: JSON.stringify({
        firstName: data.firstName,
        lastName: data.lastName,
        login: data.login,
        password: data.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await user.json();
  } catch (error) {
    thunkAPI.rejectWithValue(error.message)
  }
});

export const getUsers = createAsyncThunk('users/get', async (_, thunkAPI) => {
    try {
        const users = await fetch("http://localhost:4000/user")
        return await users.json()
    } catch (error) {
    thunkAPI.rejectWithValue(error.message)
    }
})
export const userSlice = createSlice({
  name: "user",
  initialState,
  redusers: {},
  extraReducers: (builder) => {
    builder.addCase(addUser.fulfilled, (state, action) => {
        state.users = action.payload;
        state.signingUp = true;
        state.error = null
    })
    .addCase(addUser.rejected, (state, action) => {
        state.error = action.payload;
        state.signingUp = false;
    })
    .addCase(authorization.rejected, (state, action) => {
        state.error = action.payload
        state.signingIn = false
    })
    .addCase(authorization.fulfilled, (state, action) => {
        console.log(action.payload) ;
        state.signingIn = true;
    })
    .addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload
    })
  },
});
export default userSlice.reducer;

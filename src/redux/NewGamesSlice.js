import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { newGamesURL } from '../Api';

export const newGamesApi = createAsyncThunk('games/newgames', async () => {
  return fetch(newGamesURL()).then((response) => response.json());
});

const NewGamesSlice = createSlice({
  name: 'games',
  initialState: {
    games: [],
    loading: false,
  },
  extraReducers: {
    [newGamesApi.pending]: (state) => {
      state.loading = true;
    },
    [newGamesApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.games = action.payload;
    },
    [newGamesApi.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default NewGamesSlice.reducer;

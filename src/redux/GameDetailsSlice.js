import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { gameDetailsURL } from '../Api';

export const GameDetailsApi = createAsyncThunk(
  'games/gamedetails',
  async (id) => {
    return fetch(gameDetailsURL(id)).then((response) => response.json());
  },
);

const GameDetailsSlice = createSlice({
  name: 'gamedetails',
  initialState: {
    gamesDetails: [],
    loading: false,
  },
  extraReducers: {
    [GameDetailsApi.pending]: (state) => {
      state.loading = true;
    },
    [GameDetailsApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.gamesDetails = action.payload;
    },
    [GameDetailsApi.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default GameDetailsSlice.reducer;

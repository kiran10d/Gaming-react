import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { gameScreenshotURL } from '../Api';

export const GameScreenshotApi = createAsyncThunk(
  'games/gamescreenshot',
  async (id) => {
    return fetch(gameScreenshotURL(id)).then((response) => response.json());
  },
);

const GameDetailsSlice = createSlice({
  name: 'GameScreenshot',
  initialState: {
    GameScreenshot: [],
    loading: false,
  },
  extraReducers: {
    [GameScreenshotApi.pending]: (state) => {
      state.loading = true;
    },
    [GameScreenshotApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.gameScreenshot = action.payload;
    },
    [GameScreenshotApi.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default GameDetailsSlice.reducer;

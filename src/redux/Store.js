import { configureStore } from '@reduxjs/toolkit';
import NewGamesSlice from './NewGamesSlice';
import GameDetailsSlice from './GameDetailsSlice';
import GameScreenshotSlice from './GameScreenshotSlice';

export const store = configureStore({
  reducer: {
    games: NewGamesSlice,
    gameDetails: GameDetailsSlice,
    gameScreenshot: GameScreenshotSlice,
  },
});

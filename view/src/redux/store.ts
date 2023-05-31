// Dependencies
import { configureStore } from '@reduxjs/toolkit'

// Slicers
import sidebarSlice from "./slicers/slicer/sidebar";
import settingsSlice from "./slicers/slicer/settings";
import userSlicer from "./slicers/slicer/user";

export const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    settings: settingsSlice,
    user: userSlicer
  },
})

// Root State Map
export type RootState = ReturnType<typeof store.getState>

// Dependencies
import { configureStore } from '@reduxjs/toolkit'

// Slicers
import sidebarSlice from "./slicers/slicer/sidebar";
import settingsSlice from "./slicers/slicer/settings";

export const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    settings: settingsSlice
  },
})

// Root State Map
export type RootState = ReturnType<typeof store.getState>

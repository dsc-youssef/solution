// Dependences
import { configureStore } from '@reduxjs/toolkit'

// Slicers
import sidebarSlice from "./slicers/slicer/sidebar";


export const store = configureStore({
  reducer: {
    sidebar: sidebarSlice
  },
})

// Root State Map
export type RootState = ReturnType<typeof store.getState>

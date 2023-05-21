import { createSlice } from "@reduxjs/toolkit";
import { initialState, SidebarState } from "../initialState/sidebar";

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    
    toggleOpen: (state:SidebarState) =>{
      state.open = !state.open;
    }
    
  }
});

export const { toggleOpen } = sidebarSlice.actions;
export default sidebarSlice.reducer;
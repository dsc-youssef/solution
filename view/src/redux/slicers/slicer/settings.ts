import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState, SettingsState } from "../initialState/settings";

const settingsSlice = createSlice({
  initialState,
  name: "settings",
  reducers: {
    setDirection: (state: SettingsState, action: PayloadAction<"ltr" | "rtl">) => {
      state.direction = action.payload;
    },
    setLanguage: (state: SettingsState, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
  }
})

export const { setDirection, setLanguage } = settingsSlice.actions;
export default settingsSlice.reducer;

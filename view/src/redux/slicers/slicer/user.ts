import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "../initialState/user";
import { UserPublicData } from "@/types/user";

const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    setUser: (state: UserPublicData, action: PayloadAction<UserPublicData>) => {
      state = { ...state, ...action };
    }
  }
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;

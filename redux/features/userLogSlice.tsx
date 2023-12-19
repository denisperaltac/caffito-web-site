import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const userLogSlice = createSlice({
  name: "user",
  initialState: { Role: "Admin", Name: "" },
  reducers: {
    authUser: (
      state,
      action: PayloadAction<{ Role: string; Name: string }>
    ) => {
      const { Role, Name } = action.payload;
      state.Role = Role;
      state.Name = Name;
    },
  },
});

export const { authUser } = userLogSlice.actions;
export default userLogSlice.reducer;

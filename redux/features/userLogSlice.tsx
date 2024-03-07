import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const userLogSlice = createSlice({
  name: "user",
  initialState: { Role: "", Name: "", Bearer: "" },
  reducers: {
    authUser: (
      state,
      action: PayloadAction<{ Role: string; Name: string; Bearer: string }>
    ) => {
      const { Role, Name, Bearer } = action.payload;
      return {
        ...state,
        Role: Role,
        Name: Name,
        Bearer: Bearer,
      };
    },
  },
});

export const { authUser } = userLogSlice.actions;
export default userLogSlice.reducer;

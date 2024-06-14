import { createSlice } from "@reduxjs/toolkit";
const authInitialState = {
  id: "",
  name: "",
  email: "",
  profilePicture: "",
  token: "",
};
const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    authReducer: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.profilePicture = action.payload.profilePicture;
      state.token = action.payload.token;
    },
  },
});
export const { authReducer } = authSlice.actions;
export default authSlice.reducer;

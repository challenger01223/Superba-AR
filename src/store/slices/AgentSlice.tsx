import { createSlice } from "@reduxjs/toolkit";

interface IinitialState {}

export const initialState: IinitialState = {};

export const AgentSlice = createSlice({
  name: "agent",
  initialState,
  reducers: {
    // showAuthMessage: (state, action) => {
    //   state.message = action.payload;
    //   state.showMessage = true;
    //   state.loading = false;
    // },
  },
});

export const {} = AgentSlice.actions;

export default AgentSlice.reducer;

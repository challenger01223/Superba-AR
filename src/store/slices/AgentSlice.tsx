import { createSlice } from "@reduxjs/toolkit";
import { models, clothes } from "utils/data";

interface IinitialState {
  models: Array<string>;
  clothes: Array<string>;
}

export const initialState: IinitialState = {
  models: models,
  clothes: clothes,
};

export const AgentSlice = createSlice({
  name: "agent",
  initialState,
  reducers: {
    setModels: (state, action) => {
      state.models = action.payload;
    },
    setClothes: (state, action) => {
      state.clothes = action.payload;
    },
  },
});

export const { setModels, setClothes } = AgentSlice.actions;

export default AgentSlice.reducer;

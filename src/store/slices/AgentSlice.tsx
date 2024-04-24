import { createSlice } from "@reduxjs/toolkit";
import { models, clothes } from "utils/data";

interface IinitialState {
  agentTab: string;
  models: Array<string>;
  clothes: Array<string>;
}

export const initialState: IinitialState = {
  models: models,
  clothes: clothes,
  agentTab: "model",
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
    setAgentTab: (state, action) => {
      state.agentTab = action.payload;
    },
  },
});

export const { setModels, setClothes, setAgentTab } = AgentSlice.actions;

export default AgentSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { models, clothes, backgrounds } from "utils/data";

interface IinitialState {
  step: number;
  models: Array<string>;
  selectedModel: string | null;
  clothes: Array<string>;
  selectedClothes: string | null;
  backgrounds: Array<string>;
  selectedBackground: string | null;
}

export const initialState: IinitialState = {
  step: 0,
  models: models,
  selectedModel: models[0],
  clothes: clothes,
  selectedClothes: clothes[0],
  backgrounds: backgrounds,
  selectedBackground: backgrounds[0],
};

export const AgentSlice = createSlice({
  name: "agent",
  initialState,
  reducers: {
    setStep: (state, action) => {
      state.step = action.payload;
    },
    setModels: (state, action) => {
      state.models = action.payload;
    },
    selectModel: (state, action) => {
      state.selectedModel = action.payload;
    },
    setClothes: (state, action) => {
      state.clothes = action.payload;
    },
    selectClothes: (state, action) => {
      state.selectedClothes = action.payload;
    },
    setBackgrounds: (state, action) => {
      state.backgrounds = action.payload;
    },
    selectBackground: (state, action) => {
      state.selectedBackground = action.payload;
    },
  },
});

export const {
  setModels,
  setClothes,
  setStep,
  selectClothes,
  selectModel,
  setBackgrounds,
  selectBackground,
} = AgentSlice.actions;

export default AgentSlice.reducer;

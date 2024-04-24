import { combineReducers, configureStore } from "@reduxjs/toolkit";

import AgentSlice from "./slices/AgentSlice";

export const rootReducer = combineReducers({
  agent: AgentSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

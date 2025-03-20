import { configureStore } from "@reduxjs/toolkit";
import characterListReducer from "../../entities/character/model/character-list-slice";
import characterDetailsReducer from "../../entities/character/model/character-details-slice";

export const store = configureStore({
  reducer: {
    characterList: characterListReducer,
    characterDetails: characterDetailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const selectCharacterList = (state: RootState) => state.characterList;
export const selectCharacterDetails = (state: RootState) => state.characterDetails;
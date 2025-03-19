import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../../entities/character/model/counter-slice';
import characterListReducer from "../../entities/character/model/character-list-slice";
import characterDetailsSlice from "../../entities/character/model/character-details-slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    characterList: characterListReducer,
    characterDetails: characterDetailsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const selectCharacterList = (state: RootState) => state.characterList;
export const selectCharacterDetails = (state: RootState) => state.characterDetails;
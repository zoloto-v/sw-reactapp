import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICharacter } from "../../../shared/types";

type TState = {
  data: ICharacter | null;
  isPending: boolean;
  isError: boolean;
};

const initialState: TState = {
  data: {
    name: '',
    height: '',
    mass: '',
    hair_color: '',
    skin_color: '',
    eye_color: '',
    birth_year: '',
    gender: 'n/a',
    homeworld: '',
    films: [],
    species: [],
    vehicles: [],
    starships: [],
    created: '',
    edited: '',
    url: '',
  },
  isPending: false,
  isError: false,
};

export const getCharacterDetails = createAsyncThunk(
  'characterList/Data', 
  async (id: string) => {
    console.log(id);
    return await Promise.resolve(null);
  }
);

export const characterDetailsSlice = createSlice({
  name: 'characterDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCharacterDetails.pending, (state) => {
        state.isPending = true;
        state.isError = false;
      })
      .addCase(getCharacterDetails.fulfilled, (state, action: PayloadAction<ICharacter | null>) => {
        const {payload} = action;
        state.data = payload; 
        state.isPending = false;
        state.isError = false;
      })
      .addCase(getCharacterDetails.rejected, (state) => {
        state.isPending = false;
        state.isError = true;
      })
  }
});

export default characterDetailsSlice.reducer;
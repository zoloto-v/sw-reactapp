import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICharacter, IResponseList } from "../../../shared/types";
import { characterService } from "../api";

type TState = {
  count: number | null;
  next: string | null,
  previous: string | null;
  data: Array<ICharacter>;
  isPending: boolean;
  isError: boolean;
};

const initialState: TState = {
  count: null,
  next: null,
  previous: null,
  data: [],
  isPending: false,
  isError: false,
};

export const getCharacterList = createAsyncThunk(
  'characterList/Data',
  async () => {
    const response = await characterService.getCharacterList();
    console.log(response);
    return response.data;
  }
);

export const characterListSlice = createSlice({
  name: 'characterList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCharacterList.pending, state => {
        state.isPending = true;
        state.isError = false;
      })
      .addCase(getCharacterList.fulfilled, (state, action: PayloadAction<IResponseList<ICharacter>>) => {
        const {payload} = action;
        const {results = [], previous = null, next = null, count = null} = payload;

        state.data = results;
        state.previous = previous;
        state.next = next;
        state.count = count;

        state.isPending = false;
        state.isError = false
      })
      .addCase(getCharacterList.rejected, (state) => {
        state.isPending = false;
        state.isError = true;
      })
  }
});

export default characterListSlice.reducer;
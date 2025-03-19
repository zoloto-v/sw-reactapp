import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type TState = {
  data: number;
  isPending: boolean;
  isError: boolean;
};

const initialState: TState = {
  data: 0,
  isPending: false,
  isError: false,
};

export const getData = createAsyncThunk(
  'counter/data', 
  async() => {
    return await Promise.resolve(201);
  }
);

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, state => {
        state.isPending = true;
        state.isError = false;
      })
      .addCase(getData.fulfilled, (state, action: PayloadAction<number>) => {
        state.data += action.payload;
        state.isPending = true;
        state.isError = false;
      })
      .addCase(getData.rejected, (state) => {
        state.data = 0;
        state.isPending = false;
        state.isError = true;
      })
  }
});

export default counterSlice.reducer;
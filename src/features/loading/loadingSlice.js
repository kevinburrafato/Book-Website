import { createSlice } from '@reduxjs/toolkit';
import { fetchAsyncBooks } from '../books/bookSlice';

export const loadingSlice = createSlice ({
    name: "loading",
    initialState: false,
    reducers: {
        toggleLoading: (state) => !state
    },
    extraReducers: {
        [fetchAsyncBooks.pending]: () => true,
        [fetchAsyncBooks.fulfilled]: () => false,
        [fetchAsyncBooks.rejected]: () => false,
    }
})

export const selectLoading = state => state.loading;

export const { toggleLoading } = loadingSlice.actions;
export default loadingSlice.reducer;

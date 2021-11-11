import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import bookApi from "../../common/api/bookApi";

require('dotenv').config()

export const fetchAsyncBooks = createAsyncThunk(
    'books/fetchAsyncBooks',
    async (term) => {
      const response = await bookApi.get(
          `?q=${term}&apiKey=${process.env.API_KEY}&maxResults=40`
        )
        return response.data;
    }
);

export const fetchAsyncBookDetails = createAsyncThunk(
    'movies/fetchAsyncBookDetails',
    async (id) => {
      const response = await bookApi.get(
          `/${id}?apiKey=${process.env.API_KEY}`
        )
        return response.data;
    }
);

const initialState = {
    books:{},
    selectedBook:{}
}

const bookSlice = createSlice({
    name:"books",
    initialState,
    reducers: {
        removeSelectedBook: (state) => {
            state.selectedBook = {};
        },
    },
    extraReducers: {
        [fetchAsyncBooks.pending]: () => {
            console.log("Pending");
        },
        [fetchAsyncBooks.fulfilled]: (state, {payload}) => {
            console.log("Fetched Successfully!");
            return {...state, books: payload};
        },
        [fetchAsyncBooks.rejected]: () => {
            console.log("Rejected");
        },
        [fetchAsyncBookDetails.fulfilled]: (state, {payload}) => {
            console.log("Fetched Successfully!");
            return {...state, selectedBook: payload};
        },
    },
});

export const {removeSelectedBook} = bookSlice.actions;
export const getAllBooks = (state) => state.books.books;
export const getSelectedBook = (state) => state.books.selectedBook;
export default bookSlice.reducer;
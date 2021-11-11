import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./books/bookSlice";
import loadingReducer from "./loading/loadingSlice"

export const store = configureStore({
    reducer: {
        books: booksReducer,
        loading: loadingReducer
    }
});
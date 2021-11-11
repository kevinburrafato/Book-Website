import React from 'react';
import { useSelector } from 'react-redux';
import { getAllBooks } from "../../features/books/bookSlice";
import BookCard from "../BookCard/BookCard";
import "./BookListing.scss";

const BookListing = () => {
    const books = useSelector(getAllBooks);
    let renderBooks = "";

    renderBooks = books.totalItems >= 1 ? (
      books.items.map((volumes, index) => (
          <BookCard key={index} data={volumes}/>
      ))
    ) : (
    <div className="books-error"><h3>{books.Error}</h3></div>
    );
    return (
        <div className="book-wrapper">
            <div className="book-list">
               <h2>“Books are a uniquely portable magic.”</h2>
               <h3>Stephen King</h3>
               <div className="book-container">{renderBooks}</div>
            </div>
        </div>
    );
}


export default BookListing;
import React, { useEffect, useState } from 'react';
import BookListing from "../BookListing/BookListing"
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncBooks } from '../../features/books/bookSlice';
import { selectLoading } from '../../features/loading/loadingSlice';
import "./Home.scss";

const Home = () => {
    const dispatch = useDispatch();
    const [term, setTerm] = useState("");
    const bookText = "Stephen King";
    useEffect(() => {
      dispatch(fetchAsyncBooks(bookText));
    }, [dispatch]);
    const isLoading = useSelector(selectLoading);
    if(isLoading) {
        return (
            <div className="loading">Loading....</div>
        )
    }
    const submitHandler = (e) => {
        e.preventDefault();
        if (term === "") return alert ("Please enter search term!");
        dispatch(fetchAsyncBooks(term));
        setTerm("");
    }
    return (
        <div>
            <div className="search-bar">
                <form onSubmit={submitHandler}>
                    <input 
                    type="text" 
                    value={term} 
                    placeholder="Search Books" 
                    onChange={(e)=> setTerm(e.target.value)} 
                    />
                    <button type="submit"><i className="fa fa-search"></i></button>
                </form>
            </div>
            <div className="banner-img"></div>
            <BookListing />
        </div>
    );
}


export default Home;
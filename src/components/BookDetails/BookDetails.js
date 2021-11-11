import React, { useEffect } from 'react';
import "./BookDetails.scss";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncBookDetails, getSelectedBook, removeSelectedBook } from '../../features/books/bookSlice';

const BookDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const data = useSelector(getSelectedBook);
    console.log(data);
    useEffect(() => {
        dispatch(fetchAsyncBookDetails(id));
        return () => {
            dispatch(removeSelectedBook());
        }
    }, [dispatch, id]);
    return (
        <div className="book-section">
            {Object.keys(data).length === 0 ?
                (<div className="loading">...Loading...</div>
                ) : (
                    <>
                        <div className="section-left">
                            <img src={data.volumeInfo.imageLinks === undefined
                                ? ""
                                : `${data.volumeInfo.imageLinks.thumbnail}`} alt={data.volumeInfo.title} />
                        </div>
                        <div className="section-right">
                            <div className="book-title">{data.volumeInfo.title}</div>
                            <div className="book-plot">{data.volumeInfo.description}</div>
                            <div className="book-info">
                                <div>
                                    <span>Authors:</span>
                                    <span>{data.volumeInfo.authors}</span>
                                </div>
                                <div>
                                    <span>Publisher:</span>
                                    <span>{data.volumeInfo.publisher}</span>
                                </div>
                                <div>
                                    <span>Year:</span>
                                    <span>{data.volumeInfo.publishedDate}</span>
                                </div>
                                <div>
                                    <span>PageNumber</span>
                                    <span>{data.volumeInfo.pageCount}</span>
                                </div>
                                <div>
                                    <span>Rating</span>
                                    <span>{data.volumeInfo.averageRating === undefined
                                        ? "Not Available "
                                        : `${data.volumeInfo.averageRating}`}/5 <i className="fa fa-star"></i></span>
                                </div>
                            </div>
                        </div>
                    </>
                )}
        </div>
    )
};

export default BookDetails;
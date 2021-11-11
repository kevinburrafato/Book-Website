import React from 'react';
import { Link } from 'react-router-dom';
import "./BookCard.scss";

const BookCard = (props) => {
    const { data } = props;
    return (
        <div className="card-item">
            <Link to={`/book/${data.id}`} target="_blank" rel="noopener noreferrer"> 
                <div className="card-inner">
                    <div className="card-top">
                        <img src={data.volumeInfo.imageLinks === undefined
                            ? ""
                            : `${data.volumeInfo.imageLinks.thumbnail}`} alt={data.volumeInfo.title} />
                    </div>
                    <div className="card-bottom">
                        <div className="card-info">
                            <h4>{data.volumeInfo.title}</h4>
                            <p>{data.volumeInfo.authors}</p>
                            <p>{data.volumeInfo.publishedDate}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}


export default BookCard;
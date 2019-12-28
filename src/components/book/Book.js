import React from 'react'

function Book(props) {
    const {name,author,genre,price,description} = props.book
    return (
        <div className="card mb-3">
            <div className="card-header">
                <h4 className="font-weight-light">{name}</h4>
            </div>
            <div className="card-body">
                <p className="lead">{description}</p>
                <p className="m-0">Author: {author}</p>
                <p className="m-0">Genre: {genre}</p>
                <p className="m-0 font-weight-bold">Price: ${price}</p>
            </div>
           
        </div>
    )
}

export default Book

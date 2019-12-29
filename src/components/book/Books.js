import React, { useContext } from 'react'
import Book from './Book'
import PageTitle from '../layouts/PageTitle'
import { BookContext } from '../../contexts/BookContext'
import { REMOVE_BOOK } from "../../reducers/bookReducer";
import { ThemeContext } from "../../contexts/ThemeContext";

function Books() {
    const { books, dispatch } = useContext(BookContext)
    const { theme } = useContext(ThemeContext)
    const containerCssClass = "bg-light p-4 "+theme.text+" "+theme.containerBg
    return (
        <React.Fragment>
            <PageTitle title={'Listed Books'} />
            {books.length ? (books.map(book => <Book book={book} key={book.id} deleteClick={() => dispatch({ type: REMOVE_BOOK, payload: book.id })} />)) : (
                <div className={containerCssClass}>
                    <p className="m-0  text-center lead">No Books to Show</p>
                    <p className="text-center">Please go to 'Add Book' menu for adding book info.The info contains <span className="">Book Name</span>, <span className="">Author</span>, <span className="">Description</span>, <span className="">Genre</span>, and <span className="">Price</span> field </p>
                </div>
            )}

        </React.Fragment>
    )
}

export default Books

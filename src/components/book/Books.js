import React,{useContext} from 'react'
import Book from './Book'
import PageTitle from '../layouts/PageTitle'
import {BookContext} from '../../contexts/BookContext'


function Books() {
   const {books} = useContext(BookContext)
   
    return (
        <React.Fragment>
            <PageTitle title={'Listed Books'} />
            {books.map(book => <Book book={book} key={book.id} />)}
        </React.Fragment>
    )
}

export default Books

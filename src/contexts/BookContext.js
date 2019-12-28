import React,{useReducer} from 'react'
import bookReducer from '../reducers/bookReducer'

export const BookContext = React.createContext()



function BookContextProvider(props) {
    const booksArray = [
        { id: 1, name: 'The Nickel Boys', description: 'The novel shreds our easy confidence in the triumph of goodness and leaves in its place a hard and bitter truth about the ongoing American experiment.', author: 'Colson Whitehead', genre: 'novel', price: 2.76 },
        { id: 2, name: 'The Testaments', description: 'Atwood continues to blur stark villain-victim distinctions. She gives readers a witness who has claimed not just agency for herself, but an agenda.', author: 'Margaret Atwood', genre: 'novel', price: 1.5 }
    ]
    //useReducer(param1:reducer function , param2: initialValue, param3: defaultValue|optional)
    const [books,dispatch] = useReducer(bookReducer,booksArray)
    return (
        <BookContext.Provider value={{books,dispatch}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider

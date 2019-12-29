import React,{useReducer,useEffect} from 'react'
import bookReducer from '../reducers/bookReducer'

export const BookContext = React.createContext()

const BOOK_STORAGE = 'BOOK_APP_ASADJ2321310SADASD'


function BookContextProvider(props) {
    //useReducer(param1:reducer function , param2: initialValue, param3: defaultValue|optional)
    const [books,dispatch] = useReducer(bookReducer,[],()=>{
        const localData = JSON.parse(localStorage.getItem(BOOK_STORAGE))
        return localData?localData:[]
    })

    useEffect(()=>{
        localStorage.setItem(BOOK_STORAGE,JSON.stringify(books))
    },[books])
    return (
        <BookContext.Provider value={{books,dispatch}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider

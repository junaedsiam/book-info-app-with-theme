export const ADD_BOOK = 'ADD_BOOK'
export const REMOVE_BOOK = 'REMOVE_BOOK'
export const EDIT_BOOK = 'EDIT_BOOK'


export default function(state,action){
    switch(action.type){
        case ADD_BOOK: return[
            action.payload,
            ...state
            
        ]
        case REMOVE_BOOK: return [
            ...state.filter(book=>book.id!==action.payload)
        ]
        case EDIT_BOOK: return[
            ...state.map(book=> (book.id===action.payload.id)?action.payload:book)
        ]
        default:
            return state
    }
}
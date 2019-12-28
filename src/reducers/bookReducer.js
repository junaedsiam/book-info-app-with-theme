export const ADD_BOOK = 'ADD_BOOK'
export const REMOVE_BOOK = 'REMOVE_BOOK'
export const EDIT_BOOK = 'EDIT_BOOK'


export default function(state,action){
    switch(action.type){
        case ADD_BOOK: return[
            ...state,
            action.payload
        ]
        case REMOVE_BOOK: return [
            ...state.filter(book=>book.id!==action.payload)
        ]
        default:
            return state
    }
}
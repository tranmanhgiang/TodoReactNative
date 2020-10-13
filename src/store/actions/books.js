import * as types from './actionTypes';

export const fetchBook = () => {
    return {
        type: types.FETCH_BOOKS,
    }
}

export const deleteBook = (id) => {
    return {
        type: types.DELETE_BOOK,
        id
    }
}

export const addBook = (newBook) => {
    return {
        type: types.ADD_BOOK,
        newBook
    }
}

export const editBook = (editBook) => {
    return {
        type: types.EDIT_BOOK,
        editBook
    }
}
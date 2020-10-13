import { createStore , combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import booksReducer from './reducers/booksReducer';

const myReducer = combineReducers({
    book: booksReducer
});

const configureStore = createStore(myReducer, applyMiddleware(thunk));

export default configureStore;
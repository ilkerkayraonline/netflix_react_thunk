import { combineReducers, createStore, applyMiddleware } from "redux";
import movieReducer from "./movieReducer";
import { thunk } from "redux-thunk";
import genreReducer from "./genreReducer";

const rootReducer = combineReducers({
    movie: movieReducer,
    genre: genreReducer,
}) 

export default createStore(rootReducer, applyMiddleware(thunk));
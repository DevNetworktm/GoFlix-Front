import { combineReducers } from 'redux';
import messagesReducer from './messagesReducer.jsx';
import moviesReducer from "./moviesReducer.jsx";
import userReducer from "./userReducer.jsx";

const rootReducer = combineReducers({
    messages: messagesReducer,
    movies: moviesReducer,
    user: userReducer
});

export default rootReducer;
import Types from '../actions/types.jsx';

const initialState = 0

const moviesReducer = (state = initialState, action) => {
    switch ( action.type ) {
        case Types.Movies.savePosition:
            return state = action.payload.id
        default:
            return state;
    }

    return state
};

export default moviesReducer;

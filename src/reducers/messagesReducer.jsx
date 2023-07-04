import Types from '../actions/types.jsx';

const initialState = []

const messagesReducer = (state = initialState, action) => {
    switch ( action.type ) {
        case Types.Message:
            return [ ...state, action.payload.message ]
        default:
            return state;
    }

    return state
};

export default messagesReducer;

import Types from '../actions/types.jsx';

const initialState = {
    token: "",
    navBar: true
}

const userReducer = (state = initialState, action) => {
    switch ( action.type ) {
        case Types.User.userLogin:
            return state = { token: action.payload.token, navBar: false }
        case Types.User.userStartLogin:
            return state = { token: "", navBar: false }
        case Types.User.userLogout:
            return state = { token: "", navBar: true }
        default:
            return state;
    }

    return state
};

export default userReducer;

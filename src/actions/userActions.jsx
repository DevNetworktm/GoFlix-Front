import Types from "./types.jsx";

export const userLogin = (token) => {
    return {
        type: Types.User.userLogin,
        payload: {
            token
        }
    }
}

export const userLogout = () => {
    return {
        type: Types.User.userLogout,
    }
}

export const userStartLogin = () => {
    return {
        type: Types.User.userStartLogin
    }
}
import Types from "./types.jsx";

export const savePosition = (id) => {
    return {
        type: Types.Movies.savePosition,
        payload: {
            id
        }
    }
}
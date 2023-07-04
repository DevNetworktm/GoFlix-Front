import Axios from "axios";

Axios.defaults.baseURL = "http://192.168.1.153:8080";

class Api {
    static async getAllMovies(){
        const response = await Axios.get("/movies")
        return response.data
    }

    static async getOneMovie(id){
        const response = await Axios.get(`/movies/${ id }`)
        return response.data
    }

    static async login(email, password){
        const response = await Axios.post("/auth/login", {
            email,
            password
        })
        return response.data.token
    }

    static async addMovie(title, release_date, duration, synopsis, realisator, productor, actor, picture, trailer_code, token){
        Axios.defaults.headers.common[ "Authorization" ] = `Bearer ${ token }`
        await Axios.post("/movies", {
            title,
            release_date,
            duration,
            synopsis,
            realisator,
            productor,
            actor,
            picture,
            trailer_code
        })
    }
}

export default Api
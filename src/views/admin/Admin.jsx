import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AdminLoginData } from "./Login.jsx";
import { useEffect, useState } from "react";
import Api from "../../utils/api.js";
import Movie from "../../components/Movie.jsx";
import Loader from "../../components/Loader.jsx";

import "./styles/Admin.scss"
import { AdminNewMovieData } from "./movie/AdminNewMovie.jsx";

export const AdminData = {
    path: "/admin"
}

function Admin(){
    const user = useSelector(state => state.user)
    const navigator = useNavigate()

    const [ isFetching, setIsFetching ] = useState(false)
    const [ movies, setMovies ] = useState([]);

    useEffect(() => {
        if ( user.token === "" ) navigator(AdminLoginData.path)
        else {
            (async() => {
                const ms = await Api.getAllMovies()
                setIsFetching(true)
                setMovies(ms)
            })();

        }
    }, [])

    if ( isFetching )
        return (
            <div className="wrapper home">
                <div id={ "movies" }>
                    <Link to={ AdminNewMovieData.path } className="add">
                        <ion-icon name="add-outline"></ion-icon>
                    </Link>
                    { movies.map(movie => Movie(movie, true)) }
                </div>
            </div>
        )
    else
        return <div className="wrapper home-loader">
            <Loader size={ "20px" }/>
        </div>
}

export default Admin
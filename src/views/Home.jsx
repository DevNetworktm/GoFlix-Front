import Movie from "../components/Movie.jsx";
import { useEffect, useState } from "react";
import Api from "../utils/api.js";

// styles
import "./styles/Home.scss"
import Loader from "../components/Loader.jsx";
import { useSelector } from "react-redux";

export const HomeData = {
    path: "/"
}

function Home(){
    const [ isFetching, setIsFetching ] = useState(false)
    const [ movies, setMovies ] = useState([]);
    const position = useSelector(state => state.movies);

    useEffect(() => {
        (async() => {
            const ms = await Api.getAllMovies()
            setIsFetching(true)
            setMovies(ms)

            return ms
        })()

    }, [])

    useEffect(() => {
        if ( position !== 0 ) {
            const element = document.getElementById(position);

            if ( element ) {
                window.scrollTo(0, element.getBoundingClientRect().top + window.scrollY)
            }
        }
    }, [ isFetching ]);


    if ( isFetching )
        return (
            <div className="wrapper home">
                <div id={ "movies" }>
                    { movies.map(movie => Movie(movie)) }
                </div>
            </div>
        )
    else
        return <div className="wrapper home-loader">
            <Loader size={ "20px" }/>
        </div>
}

export default Home
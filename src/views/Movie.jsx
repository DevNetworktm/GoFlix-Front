import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Api from "../utils/api.js";

// Styles
import "./styles/Movie.scss"
import Loader from "../components/Loader.jsx";
import moment from "moment";

export const MovieData = {
    path: "/movies/:id",
}

function Movie(){
    const { id } = useParams()
    const [ isFetching, setIsFetching ] = useState(false)
    const trailer = useRef("")
    const [ movie, setMovie ] = useState({
        id: id,
        title: "",
        release_date: "",
        duration: 0,
        synopsis: "",
        realisator: [ "" ],
        productor: [ "" ],
        actor: [ "" ],
        picture: "",
        trailer_code: ""
    })

    useEffect(() => {
        (async() => {
            const m = await Api.getOneMovie(movie.id)
            m.release_date = moment(m.release_date).format("LL")
            setMovie(m)
            setIsFetching(true)
        })()
    }, [])

    useEffect(() => {
        if ( trailer.current && trailer.current != "null" ) {
            trailer.current.style.height = trailer.current.clientWidth / 1.777778 + "px";
            console.log(trailer.current.style.height)
        } else {
            trailer.current = "null"
        }
    }, [ trailer.current ])

    if ( isFetching )
        return (
            <div className={ "wrapper" }>
                <div className="movie">
                    <div className={ "image" }>
                        <img src={ movie.picture } alt={ movie.title }/>
                    </div>
                    <div className="info">
                        <h1>{ movie.title }</h1>
                        <h3>Realisator : { movie.realisator.map((r, index) =>
                            index === 0 ?
                                <a className={ "wiki" } key={ index } href={ `https://fr.wikipedia.org/wiki/${ r }` }
                                   target="_blank">{ r }</a> :
                                <a className={ "wiki" } key={ index } href={ `https://fr.wikipedia.org/wiki/${ r }` }
                                   target="_blank">, { r }</a>
                        ) }</h3>
                        <h4>Actor : { movie.actor.map((a, index) =>
                            index === 0 ?
                                <a className={ "wiki" } key={ index } href={ `https://fr.wikipedia.org/wiki/${ a }` }
                                   target="_blank">{ a }</a> :
                                <a className={ "wiki" } key={ index } href={ `https://fr.wikipedia.org/wiki/${ a }` }
                                   target="_blank">, { a }</a>
                        ) }</h4>
                        <h6>Productor : { movie.productor.map((p, index) =>
                            index === 0 ?
                                <a className={ "wiki" } key={ index } href={ `https://fr.wikipedia.org/wiki/${ p }` }
                                   target="_blank">{ p }</a> :
                                <a className={ "wiki" } key={ index } href={ `https://fr.wikipedia.org/wiki/${ p }` }
                                   target="_blank">, { p }</a>
                        ) }</h6>
                        <p className={ "synopsis" }>Synopsis : <br/><br/>{ movie.synopsis }</p>
                        <p className="release_date">Release Date
                            : { movie.release_date }. <span>{ moment(movie.release_date).fromNow() }</span></p>
                        <div className="content_trailer">
                            <iframe
                                ref={ trailer }
                                src={ `https://www.youtube.com/embed/${ movie.trailer_code }` }
                                title={ `${ movie.title } TRAILER` } frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        )
    else
        return <div className="wrapper movie-loader">
            <Loader size={ "20px" }/>
        </div>
}

export default Movie
import { useState } from "react";
import moment from "moment/moment.js";

import "../../styles/Movie.scss"
import "./styles/AdminNewMovie.scss"
import { useSelector } from "react-redux";
import Api from "../../../utils/api.js";

export const AdminNewMovieData = {
    path: "/admin/movies/new"
}

function AdminNewMovie(){
    const user = useSelector(state => state.user)

    const [ picture, setPicture ] = useState("https://fr.shopping.rakuten.com/photo/1164882649_L.jpg")
    const [ title, setTitle ] = useState("Title of movie")
    const [ duration, setDuration ] = useState(120)
    const [ trailer_code, setTrailer_code ] = useState("Trailer Code Youtube")
    const [ realisator, setRealisator ] = useState([])
    const [ actor, setActor ] = useState([])
    const [ productor, setProductor ] = useState([])
    const [ synopsis, setSynopsis ] = useState("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores culpa cupiditate eius error harum id in laborum magnam maxime officiis pariatur porro qui rerum temporibus vero voluptates, voluptatum? Eos, harum?")
    const [ release_date, setRelease_date ] = useState(moment(new Date().toDateString()).format("L"))

    function handleAdd(type){
        return () => {
            const response = prompt("Please enter name");
            if ( response != null && response !== "" ) {
                switch ( type ) {
                    case "realisator":
                        console.log(response)
                        setRealisator(prevState => prevState = [ ...prevState, response ])
                        console.log(realisator)
                        break;

                    case "actor":
                        setActor(prev => prev.concat(response))
                        break;

                    case "productor":
                        setProductor(prev => prev.concat(response))
                        break;
                }
            }
        }
    }

    function handleAddMovie(e){
        e.preventDefault()
        Api.addMovie(title, release_date, duration, synopsis, realisator, productor, actor, picture, trailer_code, user.token)
    }

    return (
        <div className={ "wrapper" }>
            <div className="movie">
                <div className={ "image" }>
                    <img src={ picture } alt={ title }/>
                </div>
                <div className="info">
                    <input type="text" value={ picture } onInput={ (e) => setPicture(e.target.value) }/>
                    <input type="text" value={ title } onInput={ (e) => setTitle(e.target.value) }/>
                    <h3>Realisator : {
                        realisator.map((r, index) => {
                            return (<div className={ "name" }>{ r }
                                <div
                                    onClick={ () => setRealisator(prev => prev = prev.filter((_, i) => i != index)) }
                                    className="delete">
                                    <ion-icon name="close-outline"></ion-icon>
                                </div>
                            </div>)
                        }) }
                        <div onClick={ handleAdd("realisator") } className="add-element">
                            <ion-icon name="add-outline"></ion-icon>
                        </div>
                    </h3>
                    <h4>Actor : { actor.map((a, index) => {
                        return (<div className={ "name" }>{ a }
                            <div className="delete"
                                 onClick={ () => setActor(prev => prev = prev.filter((_, i) => i != index)) }>
                                <ion-icon name="close-outline"></ion-icon>
                            </div>
                        </div>)
                    }) }
                        <div onClick={ handleAdd("actor") } className="add-element">
                            <ion-icon name="add-outline"></ion-icon>
                        </div>
                    </h4>
                    <h6>Productor : { productor.map((p, index) => {
                            return (<div className={ "name" }>{ p }
                                <div
                                    onClick={ () => setProductor(prev => prev = prev.filter((_, i) => i != index)) }
                                    className="delete">
                                    <ion-icon name="close-outline"></ion-icon>
                                </div>
                            </div>)
                        }
                    ) }
                        <div onClick={ handleAdd("productor") } className="add-element">
                            <ion-icon name="add-outline"></ion-icon>
                        </div>
                    </h6>
                    <p className={ "synopsis" }>Synopsis : <br/><br/>
                        <textarea value={ synopsis } onInput={ (e) => setSynopsis(e.target.value) } name="" id=""
                                  cols="30"
                                  rows="10">{ }</textarea></p>
                    <input className="release_date" onInput={ (e) => setRelease_date(e.target.value) }
                           value={ release_date }/> <br/>
                    <input className="release_date" onInput={ (e) => setDuration(e.target.value) }
                           value={ duration }/><br/>
                    <input className="release_date" onInput={ (e) => setTrailer_code(e.target.value) }
                           value={ trailer_code }/><br/>
                    <button onClick={ handleAddMovie }>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default AdminNewMovie
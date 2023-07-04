import { Link } from "react-router-dom";

// styles
import "./styles/Movie.scss"
import { MovieData } from "../views/Movie.jsx";
import Stores from "../stores/stores.jsx";
import { savePosition } from "../actions/moviesActions.jsx";

function Movie({ id, title, picture }, admin = false){
    function handleClick(){
        Stores.dispatch(savePosition(id))
    }

    if ( admin )
        return (
            <div key={ id } id={ "components" } className="movie">
                <div className="picture">
                    <img src={ picture } alt={ title }/>
                </div>
                <div className="filter">
                    <button className={ "edit" }>
                        <ion-icon name="create-outline"></ion-icon>
                    </button>
                    <button className={ "delete" }>
                        <ion-icon name="trash-outline"></ion-icon>
                    </button>
                </div>
            </div>
        )
    else
        return (
            <Link onClick={ handleClick } id={ id } key={ id } to={ MovieData.path.replace(":id", id) }>
                <div className="movie">
                    <div className="picture">
                        <img src={ picture } alt={ title }/>
                    </div>
                </div>
            </Link>
        )
}

export default Movie
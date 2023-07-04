import './styles/Header.scss';
import { Link } from "react-router-dom";
import { HomeData } from "../views/Home.jsx";
import { useSelector } from "react-redux";

function Header(){
    const user = useSelector(state => state.user)

    if ( user.navBar )
        return (
            <header className="header">
                <h1><Link to={ HomeData.path }>GoFlix</Link></h1> <p>The reference for your movies</p>
            </header>
        )
    else
        return (
            <>
            </>
        )
}

export default Header
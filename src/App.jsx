import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from "react-redux";
import Stores from './stores/stores.jsx'

// Components
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

// Views
import HomePage, { HomeData } from './views/Home.jsx';
import Movie, { MovieData } from "./views/Movie.jsx";
import Admin, { AdminData } from "./views/admin/Admin.jsx";
import AdminLogin, { AdminLoginData } from "./views/admin/Login.jsx";

// Styles
import './global.css';
import AdminNewMovie, { AdminNewMovieData } from "./views/admin/movie/AdminNewMovie.jsx";

function App(){
    return (
        <div className="app">
            <Provider store={ Stores }>
                <BrowserRouter>
                    <Header/>
                    <Routes>
                        <Route path={ HomeData.path } element={ <HomePage/> }/>
                        <Route path={ MovieData.path } element={ <Movie/> }/>

                        {/*  ADMIN  */ }
                        <Route path={ AdminData.path } element={ <Admin/> }/>
                        <Route path={ AdminLoginData.path } element={ <AdminLogin/> }/>
                        <Route path={ AdminNewMovieData.path } element={ <AdminNewMovie/> }/>
                    </Routes>
                    <Footer/>
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;

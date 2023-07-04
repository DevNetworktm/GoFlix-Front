import "./styles/Login.scss"
import Stores from "../../stores/stores.jsx";
import { userLogin, userStartLogin } from "../../actions/userActions.jsx";
import { useState } from "react";
import Api from "../../utils/api.js";
import { useNavigate } from "react-router-dom";
import { AdminData } from "./Admin.jsx";

export const AdminLoginData = {
    path: "/admin/login"
}

function AdminLogin(){
    Stores.dispatch(userStartLogin())

    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("")

    const navigate = useNavigate()

    async function handleSubmit(e){
        e.preventDefault();
        const token = await Api.login(email, password);
        Stores.dispatch(userLogin(token))
        navigate(AdminData.path);
    }

    return (
        <div className="wrapper login">
            <form onSubmit={ handleSubmit }>
                <h2>Login</h2>
                <input onChange={ (e) => setEmail(e.target.value) } type="email" name="" id=""
                       placeholder={ "example@gmail.com" }/>
                <input onChange={ (e) => setPassword(e.target.value) } type="password" placeholder={ "Goflix31." }/>
                <button type="submit">send</button>
            </form>
        </div>
    )
}

export default AdminLogin
import { Component } from "react";
import { Link } from "react-router-dom";
import Cookies from 'universal-cookie';
import './Header.css';

const cookies = new Cookies();
class Header extends Component{
    constructor(props){
        super(props);
    }

    logout(){
        cookies.remove("user-auth-cookie")

    }
    render (){
      let user = cookies.get("user-auth-cookie")
        return(
            <nav className="main-header">
                <div className="header-contenido">
                    <div className="header-izquierda">
                        <h1 className="logo">Digital films</h1>
                        <p className="frase-header">Películas y series en un solo lugar</p>
                    </div>

                    <div className="header-derecha">
                        <ul className="nav-principal">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/peliculas" className="nav-link">Películas</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/series" className="nav-link">Series</Link>
                            </li>

                            {!user ? (
                              <>
                                <li className="nav-item">
                                <Link to="/register" className="nav-link">Crear Cuenta</Link> 
                                </li>
                                <li className="nav-item">
                                <Link to="/Login" className="nav-link">Login</Link>
                                 </li>
                               </>
                            )
                            : null}
                             
                             {user ? (
                                <>
                                <li className="nav-item">
                                  <Link to="/favoritos" className="nav-link">Favoritos</Link>
                                </li>
                                <li>
                                    <button className="btn-logout" onClick={()=> this.logout()}>Cerrar sesion</button>

                                </li>
                               </>
                             )
                             :null}
                
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;
import { Component } from "react";
import { Link } from "react-router-dom";
import './Header.css'

class Header extends Component{
    constructor(props){
        super(props);
    }

    render (){
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
                            <li className="nav-item">
                                <Link to="/crear" className="nav-link">Crear Cuenta</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/favoritos" className="nav-link">Favoritos</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;
import { Component } from "react";
import { Link } from "react-router-dom";
import './Header.css'

class Header extends Component{
    constructor(props){
        super(props);


    }
        render (){
            return(
             <nav className="container"> 
               <h1>Digital films</h1>
                <ul className="nav nav-tabs my-4">
                    <li className="nav-item">
                        <Link to = "/" className="nav-link">Inicio </Link>
                    </li>
                    <li className="nav-item">
                        <Link to = "/Peliculas" className="nav-link">Peliculas </Link>
                    </li>
                    <li className="nav-item">
                        <Link to = "/Series" className="nav-link">Series </Link>
                    </li>
                   
                </ul>
             </nav>
              
        )}
    }

export default Header; 
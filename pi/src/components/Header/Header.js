import { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component{
    constructor(props){
        super(props);

        this.state = {
            session: sessionStorage.getItem('sesion')
        };
    }
        render (){
            return(
             <nav>
                
                <ul className="nav nav-tabs my-4">
                    <li className="nav-link">
                        <Link to = "/">Inicio </Link>
                    </li>
                    <li className="nav-link">
                        <Link to = "/Peliculas">Peliculas </Link>
                    </li>
                    <li className="nav-link">
                        <Link to = "/Series">Series </Link>
                    </li>
                    {this.state.session ? null : <li className="nav-link"> <Link to = "/Login"> Iniciar sesion</Link> </li>}
                    {this.state.session ? null : <li className="nav-link" > <Link to = "/Register"> Crear cuenta </Link> </li>}
                    {this.state.session ? <li className="nav-link"><Link to="/favorites">Favoritos</Link></li> : null}
                    
    

                </ul>
             </nav>
              
        )}
    }

export default Header; 
import { Component } from "react";
import {  Link } from "react-router-dom";


class CardHomeMovie extends Component {
    constructor(props){
        super(props)
        this.state = {
            verMas: false
        }
    }

    btnVerMas(){
        this.setState(
             {verMas: !this.state.verMas})
    }
    render(){
        let btn = "Ver descrpcion"
        let descripcion = null
        
        if (this.state.verMas === true) {
            btn = "Ocultar"
            descripcion = <p className="card-text" > {this.props.descripcion}</p>
        }

        return(
          <article className="single-card-movie" >
            <img src= {"https://image.tmdb.org/t/p/w500"  + this.props.imagen} className="card-img-top" />
            <div className="cardBody">
                 <h5 className="card-title"> {this.props.titulo}</h5>
                  {descripcion}
                 <button onClick={()=> this.btnVerMas()}>{btn}</button> <br></br>
                 <Link to = {"/detallePelicula/" + this.props.id}  className="link-Detalle">  Ir a detalle  </Link>

            </div>
        </article>
    )
        
    }

}


export default CardHomeMovie
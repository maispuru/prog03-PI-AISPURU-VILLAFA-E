import { Component } from "react";
import {  Link } from "react-router-dom";


class CardHomeMovie extends Component {
    constructor(props){
        super(props)
        this.state = {
            verMas: false,
            informacionItem: props.data,
            esFavorito: false
        }
    }
    componentDidMount() {
        let favoritosGuardados = localStorage.getItem("favoritos") || "[]";
        let favoritos = JSON.parse(favoritosGuardados);

        let coincidencias = favoritos.filter((favorito) => {
            return favorito.id === this.state.informacionItem.id && favorito.tipo === "pelicula";
        });

        if (coincidencias.length > 0) {
            this.setState({ esFavorito: true });
        }
    }

    agregarFavorito() {
        let item = this.state.informacionItem;
        let favoritosGuardados = localStorage.getItem("favoritos") || "[]";
        let favoritos = JSON.parse(favoritosGuardados);

        let nuevoFavorito = {
            id: item.id,
            tipo: "pelicula"
        };

        let favoritosActualizados = favoritos.concat(nuevoFavorito);
        localStorage.setItem("favoritos", JSON.stringify(favoritosActualizados));
        this.setState({ esFavorito: true });
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
                 <button onClick={()=> this.btnVerMas()} className="ver-mas">{btn}</button> 
                 <br></br><br></br>
                 <Link to = {"/detallePelicula/" + this.props.id}  className="link-Detalle">  Ir a detalle  </Link>
                 <br/><br/>
                    {this.state.esFavorito ? null : (
                        <button className="favorito-boton" onClick={() => this.agregarFavorito()}>
                            ♥️ Agregar a favoritos
                        </button>
                    )}
            </div>
        </article>
    )
        
    }

}


export default CardHomeMovie
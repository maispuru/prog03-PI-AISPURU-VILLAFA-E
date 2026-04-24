import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import "./CardMovie.css"

const cookies = new Cookies();
class CardPelicula extends Component {
    constructor(props) {
        super(props);
        this.state = {
            verMas: false,
            informacionItem: props.data,
            esFavorito: false,
    
            
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
   
    eliminarPelicula(id) {
        let favoritosGuardados = localStorage.getItem("favoritos") || "[]";
        let favoritos = JSON.parse(favoritosGuardados);

        let favoritosFiltrados = favoritos.filter((favorito) => {
            return favorito.id !== id || favorito.tipo !== "pelicula";
        });

        localStorage.setItem("favoritos", JSON.stringify(favoritosFiltrados));

        this.setState ({esFavorito: false});
    }

    btnVerMas(){
        this.setState(
             {verMas: !this.state.verMas})
    }
    
    render() {
        let user = cookies.get("user-auth-cookie")
        let item = this.state.informacionItem;
        let btn = "Ver descrpcion"
        let descripcion = null        
        if (this.state.verMas === true) {
            btn = "Ocultar"
            descripcion = <p className="card-text" > {item.overview}</p>
        }
        
    return (
            <article className="single-card-movie">
                <img
                    src={"https://image.tmdb.org/t/p/w500" + item.poster_path}
                    className="card-img-top"
                    alt={item.title}
                />
                <div className="cardBody">
                    <h5 className="card-title">{item.title}</h5>
                    {descripcion}
                    <button onClick={()=> this.btnVerMas()} className="ver-mas">{btn}</button> <br/>
                    <Link to={"/detallePelicula/" + item.id} className="ver-mas">Ver más</Link>
                    <br/><br/>
                      {user ? (
                       this.state.esFavorito === false ? 
                       <button className="favorito-boton" onClick={() => this.agregarFavorito()}>
                                 ♥️ Agregar a favoritos
                         </button>  : (
                         <button className="favorito-boton" onClick={() => this.eliminarPelicula(item.id)}>
                                    ♥️ Eliminar
                        </button>
                        )
                       ) : null }



                </div>
            </article>
        )




    }
}

export default CardPelicula;

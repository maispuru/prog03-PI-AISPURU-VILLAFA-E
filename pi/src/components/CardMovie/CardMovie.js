import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./CardMovie.css"
class CardPelicula extends Component {
    constructor(props) {
        super(props);
        this.state = {
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



    
    render() {
        let item = this.state.informacionItem;

    return (
            <article className="single-card-movie">
                <img
                    src={"https://image.tmdb.org/t/p/w500" + item.poster_path}
                    className="card-img-top"
                    alt={item.title}
                />
                <div className="cardBody">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="">{item.overview}</p>
                    <Link to={"/detallePelicula/" + item.id} className="ver-mas">Ir a detalle</Link>
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

export default CardPelicula;

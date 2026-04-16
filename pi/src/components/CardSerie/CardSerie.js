import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CardSerie extends Component {
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
            return favorito.id === this.state.informacionItem.id && favorito.tipo === "serie";
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
            tipo: "serie"
        };

        let favoritosActualizados = favoritos.concat(nuevoFavorito);
        localStorage.setItem("favoritos", JSON.stringify(favoritosActualizados));
        this.setState({ esFavorito: true });
    }


    render() {

        let item = this.state.informacionItem;

    return (
            <article className="single-card-tv">
                <img
                    src={"https://image.tmdb.org/t/p/w500" + item.poster_path}
                    className="card-img-top"
                    alt={item.name}
                />
                <div className="cardBody">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.overview}</p>
                    <Link to={"/detalleSerie/" + item.id} className="btn btn-primary">Ver más</Link>

                    {this.state.esFavorito ? null : (
                        <button className="btn btn-warning" onClick={() => this.agregarFavorito()}>
                            ♥️ Agregar a favoritos
                        </button>
                    )}
                </div>
            </article>
        )




    }
}

export default CardSerie;

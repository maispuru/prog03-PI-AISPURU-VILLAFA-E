import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Styles.css';

class Favoritos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            peliculasFavoritas: [],
            seriesFavoritas: []
        }
    }

    componentDidMount() {
        this.cargarFavoritos();
    }

    cargarFavoritos() {
        let favoritosGuardados = localStorage.getItem("favoritos") || "[]";
        let favoritos = JSON.parse(favoritosGuardados);

        if (favoritos.length === 0) {
            return;
        }

        for (let i = 0; i < favoritos.length; i++) {
            let favorito = favoritos[i];

            if (favorito.tipo === "pelicula") {
                fetch(`https://api.themoviedb.org/3/movie/${favorito.id}?api_key=ed64b41cac1f7454df1403e56e96ce49`)
                .then(respuesta => respuesta.json())
                .then(datos => {
                    this.setState({
                        peliculasFavoritas: this.state.peliculasFavoritas.concat(datos)
                    });
                })
                .catch(error => console.error(error));
            }

            if (favorito.tipo === "serie") {
                fetch(`https://api.themoviedb.org/3/tv/${favorito.id}?api_key=ed64b41cac1f7454df1403e56e96ce49`)
                .then(respuesta => respuesta.json())
                .then(datos => {
                    this.setState({
                        seriesFavoritas: this.state.seriesFavoritas.concat(datos)
                    });
                })
                .catch(error => console.error(error));
            }
        }
    }

    eliminarPelicula(id) {
        let favoritosGuardados = localStorage.getItem("favoritos") || "[]";
        let favoritos = JSON.parse(favoritosGuardados);

        let favoritosFiltrados = favoritos.filter((favorito) => {
            return favorito.id !== id || favorito.tipo !== "pelicula";
        });

        localStorage.setItem("favoritos", JSON.stringify(favoritosFiltrados));

        let peliculasFiltradas = this.state.peliculasFavoritas.filter((pelicula) => {
            return pelicula.id !== id;
        });

        this.setState({ peliculasFavoritas: peliculasFiltradas });
    }

    eliminarSerie(id) {
        let favoritosGuardados = localStorage.getItem("favoritos") || "[]";
        let favoritos = JSON.parse(favoritosGuardados);

        let favoritosFiltrados = favoritos.filter((favorito) => {
            return favorito.id !== id || favorito.tipo !== "serie";
        });

        localStorage.setItem("favoritos", JSON.stringify(favoritosFiltrados));

        let seriesFiltradas = this.state.seriesFavoritas.filter((serie) => {
            return serie.id !== id;
        });

        this.setState({ seriesFavoritas: seriesFiltradas });
    }

    render() {
        return (
            <div className="container">

                <h2 className="alert alert-primary">Películas Favoritas</h2>
                <section className="row cards" id="movies">
                    {this.state.peliculasFavoritas.map((item, indice) =>
                        <article key={item.id + indice} className="single-card-movie">
                            <img src={"https://image.tmdb.org/t/p/w500" + item.poster_path} className="card-img-top" alt={item.title} />
                            <div className="cardBody">
                                <h5 className="card-title">{item.title}</h5>
                                <Link to={"/detallePelicula/" + item.id} className="ver-mas">Ver más</Link>
                                <br/><br/>
                                <button className="favorito-boton" onClick={() => this.eliminarPelicula(item.id)}>
                                    ♥️ Eliminar
                                </button>
                            </div>
                        </article>
                    )}
                </section>

                <h2 className="alert alert-warning">Series Favoritas</h2>
                <section className="row cards" id="tv-show">
                    {this.state.seriesFavoritas.map((item, indice) =>
                        <article key={item.id + indice} className="single-card-tv">
                            <img src={"https://image.tmdb.org/t/p/w500" + item.poster_path} className="card-img-top" alt={item.name} />
                            <div className="cardBody">
                                <h5 className="card-title">{item.name}</h5>
                                <Link to={"/detalleSerie/" + item.id} className="ver-mas">Ver más</Link>
                                <br/><br/>
                                <button className="favorito-boton" onClick={() => this.eliminarSerie(item.id)}>
                                    ♥️ Eliminar 
                                </button>
                            </div>
                        </article>
                    )}
                </section>

            </div>
        );
    }
}

export default Favoritos;
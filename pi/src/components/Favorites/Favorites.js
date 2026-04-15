/*import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Favoritos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            peliculasFavoritas: [],
            seriesFavoritas: [],
        }
    }

    componentDidMount() {
        this.cargarFavoritos();
    }

    cargarFavoritos() {
        let almacenPeliculas = localStorage.getItem("peliculasFavoritas");
        let storagePeliculas = JSON.parse(almacenPeliculas);

        let almacenSeries = localStorage.getItem("seriesFavoritas");
        let storageSeries = JSON.parse(almacenSeries);

        if (storagePeliculas != null) {
            this.setState({ peliculasFavoritas: storagePeliculas });
        }

        if (storageSeries != null) {
            this.setState({ seriesFavoritas: storageSeries });
        }
    }

    eliminarPelicula(id) {
            let alamacen = localStorage.getItem("peliculasFavoritas")
            let storageFav=JSON.parse(alamacen)
            let identificador = storageFav.filter((item) => item != id)
            localStorage.setItem("peliculasFavoritas",JSON.stringify(identificador))
        }

    eliminarSerie(id) {
            let alamacen = localStorage.getItem("seriesFavoritas")
            let storageFav=JSON.parse(alamacen)
            let identificador = storageFav.filter((item) => item != id)
            localStorage.setItem("seriesFavoritas",JSON.stringify(identificador))
    }

    render() {
        return (
            <div className="container">
            
                <h2 className="alert alert-primary">Películas Favoritas</h2>
                <section className="row cards" id="movies">
                    {this.state.peliculasFavoritas.map((item, idx) =>
                        <article key={item.id + idx} className="single-card-movie">
                            <img src={"" + item.poster_path} alt={item.title} />
                            <div className="cardBody">
                                <h5 className="card-title">{item.title}</h5>
                                <Link to={"" + item.id} className="btn btn-primary">Ver más</Link>
                                <button className="btn alert-info" onClick={() => this.eliminarPelicula(item.id)}>
                                    ♥️ Eliminar
                                </button>
                            </div>
                        </article>
                    )}
                </section>

                <h2 className="alert alert-warning">Series Favoritas</h2>
                <section className="row cards" id="tv-show">
                    {this.state.seriesFavoritas.map((item, idx) =>
                        <article key={item.id + idx} className="single-card-tv">
                            <img src={"" + item.poster_path} alt={item.name} />
                            <div className="cardBody">
                                <h5 className="card-title">{item.name}</h5>
                                <Link to={"" + item.id} className="btn btn-primary">Ver más</Link>
                                <button className="btn alert-warning" onClick={() => this.eliminarSerie(item.id)}>
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

export default Favoritos; */
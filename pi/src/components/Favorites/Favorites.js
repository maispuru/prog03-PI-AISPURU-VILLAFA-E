/*import { Component } from "react";
import { Link } from "react-router-dom";

class Favoritos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            peliculasFavoritas: JSON.parse(localStorage.getItem("peliculasFavoritas")) || [],
            seriesFavoritas: JSON.parse(localStorage.getItem("seriesFavoritas")) || []
        };
    }

    eliminarPelicula = (id) => {
        const nuevaLista = this.state.peliculasFavoritas.filter((pelicula) => pelicula.id !== id);
        localStorage.setItem("peliculasFavoritas", JSON.stringify(nuevaLista));
        this.setState({ peliculasFavoritas: nuevaLista });
    }

    eliminarSerie = (id) => {
        const nuevaLista = this.state.seriesFavoritas.filter((serie) => serie.id !== id);
        localStorage.setItem("seriesFavoritas", JSON.stringify(nuevaLista));
        this.setState({ seriesFavoritas: nuevaLista });
    }

    render() {
        return (
            <div className="container">

                <h2 className="alert alert-primary">Películas Favoritas</h2>
                <section className="row cards" id="movies">
                    {this.state.peliculasFavoritas.map((pelicula) => (
                        <article className="single-card-movie" key={pelicula.id}>
                            <img
                                src={"" + pelicula.poster_path}
                                className="card-img-top"
                                alt={pelicula.title}
                            />
                            <div className="cardBody">
                                <h5 className="card-title">{pelicula.title}</h5>
                                <Link to={"" + pelicula.id} className="btn btn-primary">Ver más</Link>
                                <button className="btn alert-info" onClick={() => this.eliminarPelicula(pelicula.id)}>
                                    ♥️
                                </button>
                            </div>
                        </article>
                    ))}
                </section>

                <h2 className="alert alert-warning">Series Favoritas</h2>
                <section className="row cards" id="tv-show">
                    {this.state.seriesFavoritas.map((serie) => (
                        <article className="single-card-tv" key={serie.id}>
                            <img
                                src={"" + serie.poster_path}
                                className="card-img-top"
                                alt={serie.name}
                            />
                            <div className="cardBody">
                                <h5 className="card-title">{serie.name}</h5>
                                <Link to={"" + serie.id} className="btn btn-primary">Ver más</Link>
                                <button className="btn alert-warning" onClick={() => this.eliminarSerie(serie.id)}>
                                    ♥️
                                </button>
                            </div>
                        </article>
                    ))}
                </section>

            </div>
        );
    }


}

export default Favoritos; */
 

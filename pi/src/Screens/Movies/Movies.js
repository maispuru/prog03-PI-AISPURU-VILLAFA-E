import React, { Component } from 'react';
import CardMovie from '../../components/CardMovie/CardMovie';
import './styles.css';

class Peliculas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
            filtro: ''
        }
        this.paginaActual = 1;
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=ed64b41cac1f7454df1403e56e96ce49&page=${this.paginaActual}`)
        .then(respuesta => respuesta.json())
        .then(datos => this.setState({ peliculas: datos.results }))
        .catch(error => console.error(error));
    }

    evitarSubmit(evento) {
        evento.preventDefault();
    }

    controlarCambios(evento) {
        this.setState({ filtro: evento.target.value });
    }

    filtrarPeliculas() {
        if (this.state.peliculas === undefined) {
            return [];
        }
        let peliculaBuscada = this.state.peliculas.filter((pelicula) => {
            return pelicula.title && pelicula.title.toLowerCase().includes(this.state.filtro.toLowerCase());
        });
        return peliculaBuscada;
    }

    cargarMas() {
        this.paginaActual = this.paginaActual + 1;
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=ed64b41cac1f7454df1403e56e96ce49&page=${this.paginaActual}`)
        .then(respuesta => respuesta.json())
        .then(datos => this.setState({ peliculas: this.state.peliculas.concat(datos.results) }))
        .catch(error => console.error(error));
    }

    render() {
        let peliculasFiltradas = this.filtrarPeliculas();

        return (
            <div className='container'>
                <h2 className='alert alert-primary'>Todas las películas</h2>

                <form className='filter-form px-0 mb-3' onSubmit={(evento) => this.evitarSubmit(evento)}>
                    <input
                        type='text'
                        placeholder='Buscar dentro de la lista'
                        value={this.state.filtro}
                        onChange={(evento) => this.controlarCambios(evento)}
                    />
                </form>

                <button className='btn btn-info' onClick={() => this.cargarMas()}>
                    Cargar más
                </button>

                <section className='row cards all-movies' id='movies'>
                    {peliculasFiltradas.map((pelicula, indice) => {
                        return (
                            <CardMovie
                                key={indice}
                                data={pelicula}
                            />
                        )
                    })}
                </section>


            </div>
        )
    }
}

export default Peliculas;
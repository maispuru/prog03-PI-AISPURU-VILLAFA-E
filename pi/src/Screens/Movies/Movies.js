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


    controlarCambios(evento) {
        this.setState({ filtro: evento.target.value });
    }

enviarFormulario(event) {
    event.preventDefault();

    if (this.state.filtro != "") {
        this.props.history.push("/resultadosPelicula/" + this.state.filtro)
    }
}
    

    cargarMas() {
        this.paginaActual = this.paginaActual + 1;
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=ed64b41cac1f7454df1403e56e96ce49&page=${this.paginaActual}`)
        .then(respuesta => respuesta.json())
        .then(datos => this.setState({ peliculas: this.state.peliculas.concat(datos.results) }))
        .catch(error => console.error(error));
    }

    render() {
        let peliculasFiltradas = this.state.peliculas;
        return (
            <div className='container'>
                <div className='barra-busqueda-peliculas'>
                    <form className='form-busqueda-peliculas' onSubmit={(event)=>this.enviarFormulario(event)}>
                        <input type="text" placeholder="Buscar películas" onChange={(event)=>this.controlarCambios(event)} value={this.state.filtro} />
                        <input type="submit" value="Buscar" />
                    </form>
                </div>
                <br/>
                <h2 className='TituloMovie'>Todas las películas</h2>
                <div className="contenedor-boton-cargar">
                    <button className='boton-cargar-mas' onClick={() => this.cargarMas()}>
                        Cargar más
                    </button>
                </div>
                
                <section className='row cards all-movies' id='movies'>
                    {peliculasFiltradas.length > 0 ? (
                        peliculasFiltradas.map((pelicula, indice) => {
                            return (
                                <CardMovie
                                    key={indice}
                                    data={pelicula}
                                />
                            )
                        })
                    ) : (
                        <p><img src={`/img/Gif.gif`} alt="..Cargando"></img></p>
                    )}
                </section>
            </div>
        )
    }
}

export default Peliculas;

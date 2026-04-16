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
ejecutarBusqueda(item){
        this.props.history.push("/resultadosPelicula/" + item.title)
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
                <h2 className='alert alert-primary'>Todas las películas</h2>
                <form onSubmit={(event)=>this.enviarFormulario(event)}>
                        <label>Name:</label>
                        <input type="text" placeholder="Buscar películas" onChange={(event)=>this.controlarCambios(event)} value={this.state.filtro} />
                        <input type="submit" value="Submit" />
                </form>
                    {peliculasFiltradas.map((item, idx) => 
                        <article key={item.id + idx} onClick={() => this.ejecutarBusqueda(item)}>
                        </article>
                    )}
                <button className='btn btn-info' onClick={() => this.cargarMas()}>
                    Cargar más
                </button>

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

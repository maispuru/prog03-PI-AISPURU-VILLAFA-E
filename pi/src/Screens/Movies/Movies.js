import React, { Component } from 'react';
import CardMovie from '../../components/CardMovie/CardMovie';
import './Movie.css';

class Peliculas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
            filtro: '',
            valor: '',
            cantidad: 8
        }
        this.paginaActual = 1;
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=ed64b41cac1f7454df1403e56e96ce49&page=${this.paginaActual}`)
        .then(respuesta => respuesta.json())
        .then(datos => this.setState({ peliculas: datos.results }))
        .catch(error => console.error(error));
        
    }


evitarSubmit(event) {
    event.preventDefault();
  }

controlarCambios(event) {
    this.setState({valor: event.target.value});
  }

filtrarPersonajes(){
    if(this.state.peliculas == undefined){
        return []
    }
    let personajeBuscado = this.state.peliculas.filter((item) => {
        return item.title && item.title.toLowerCase().includes(this.state.valor.toLowerCase())
    })
    return personajeBuscado
}
    
cargarMas() {
    this.paginaActual = this.paginaActual + 1;
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=ed64b41cac1f7454df1403e56e96ce49&page=${this.paginaActual}`)
    .then(respuesta => respuesta.json())
    .then(datos => this.setState({
        peliculas: this.state.peliculas.concat(datos.results),
        cantidad: this.state.cantidad + 8
    }))
    .catch(error => console.error(error));
}

    render() {
        let peliculasFiltradas = this.filtrarPersonajes()
        
        return (
            <div className='container'>
                <div className='encabezado-movies'>
                    <div className='barra-busqueda-movies'>
                        <form className='form-busqueda-movies' onSubmit={(event)=>this.evitarSubmit(event)}>
                            <input className='input-busqueda-movies' type="text" onChange={(event)=>this.controlarCambios(event)} value={this.state.valor} placeholder='Nombre a buscar'/>
                        </form>
                    </div>
                    <h2 className='TituloMovie'>Todas las películas</h2>
                </div>
                
                <section className='row cards all-movies' id='movies'>
                    {peliculasFiltradas.length > 0 ? (
                        peliculasFiltradas.slice(0, this.state.cantidad).map((pelicula, indice) => {
                            return (
                                <CardMovie
                                    key={pelicula.id}
                                    data={pelicula}
                                    
                                />
                            )
                        })
                    ) : (
                        <p><img src={`/img/Gif.gif`} alt="..Cargando"></img></p>
                    )}
                </section>
                <div className="contenedor-boton-cargar">
                    <button className='boton-cargar-mas' onClick={() => this.cargarMas()}>
                        Cargar más
                    </button>
                </div>
            </div>
        )
    }
}

export default Peliculas;

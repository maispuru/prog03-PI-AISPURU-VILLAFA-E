import React, { Component } from 'react';
import CardSerie from '../../components/CardSerie/CardSerie';
import './Series.css';


class Series extends Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [],
            filtro: '',
            valor: "",
            cantidad: 8
        }
        this.paginaActual = 1;
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=ed64b41cac1f7454df1403e56e96ce49&page=${this.paginaActual}`)
        .then(respuesta => respuesta.json())
        .then(datos => this.setState({ series: datos.results }))
        .catch(error => console.error(error));
    }

evitarSubmit(event) {
    event.preventDefault();
  }

controlarCambios(event) {
    this.setState({valor: event.target.value});
  }

filtrarPersonajes(){
    if(this.state.series == undefined){
        return []
    }
    let personajeBuscado = this.state.series.filter((item) => {
        return item.name && item.name.toLowerCase().includes(this.state.valor.toLowerCase())
    })
    return personajeBuscado
}
    
cargarMas() {
        this.paginaActual = this.paginaActual + 1;
        fetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=ed64b41cac1f7454df1403e56e96ce49&page=${this.paginaActual}`)
        .then(respuesta => respuesta.json())
        .then(datos => this.setState({ series: 
            this.state.series.concat(datos.results),
            cantidad: this.state.cantidad + 8 }))
        .catch(error => console.error(error));
}

    render() {
        let seriesFiltradas = this.filtrarPersonajes()
        console.log(seriesFiltradas);
        
        return (
            <div className='container'>
                <div className='encabezado-series'>
                    <div className='barra-busqueda-series'>
                        <form className='form-busqueda-movies' onSubmit={(event)=>this.evitarSubmit(event)}>
                            <input className='input-busqueda-movies' type="text" onChange={(event)=>this.controlarCambios(event)} value={this.state.valor} placeholder='Nombre a buscar'/>
                        </form>
                    </div>
                    <h2 className='TituloSeries'>Todas las Series</h2>
                </div>
                

                <section className='row cards all-series' id='series'>
                    {seriesFiltradas.length > 0 ? (
                        seriesFiltradas.slice(0, this.state.cantidad).map((series, indice) => {
                            return (
                                <CardSerie
                                    key={series.id}
                                    data={series}
                                    
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

export default Series;
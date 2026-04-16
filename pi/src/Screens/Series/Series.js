import React, { Component } from 'react';
import CardSerie from '../../components/CardSerie/CardSerie';
import './Styles.css';


class Series extends Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [],
            filtro: ''
        }
        this.paginaActual = 1;
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=ed64b41cac1f7454df1403e56e96ce49&page=${this.paginaActual}`)
        .then(respuesta => respuesta.json())
        .then(datos => this.setState({ series: datos.results }))
        .catch(error => console.error(error));
    }

    evitarSubmit(evento) {
        evento.preventDefault();
    }

    controlarCambios(evento) {
        this.setState({ filtro: evento.target.value });
    }

enviarFormulario(event) {
    event.preventDefault();

    let seriesBuscada = this.state.series.filter((item) => {
        return item.name && item.name.toLowerCase().includes(this.state.filtro.toLowerCase())
    });
    console.log(seriesBuscada);

    if (seriesBuscada !== undefined) {
        this.props.history.push("/resultadosSeries/" + seriesBuscada.name)
    }
}
ejecutarBusqueda(item){
        this.props.history.push("/resultadosSeries/" + item.name)
}
    cargarMas() {
        this.paginaActual = this.paginaActual + 1;
        fetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=ed64b41cac1f7454df1403e56e96ce49&page=${this.paginaActual}`)
        .then(respuesta => respuesta.json())
        .then(datos => this.setState({ series: this.state.series.concat(datos.results) }))
        .catch(error => console.error(error));
    }

    render() {
        let seriesFiltradas = this.state.series;

        return (
            <div className='container'>
                <h2 className='alert alert-warning'>Todas las series</h2>
                <form onSubmit={(event)=>this.enviarFormulario(event)}>
                        <label>Name:</label>
                        <input type="text" placeholder="Buscar series   " onChange={(event)=>this.controlarCambios(event)} value={this.state.filtro} />
                        <input type="submit" value="Submit" />
                </form>
                    {seriesFiltradas.map((item, idx) => 
                        <article key={item.id + idx} onClick={() => this.ejecutarBusqueda(item)}>
                        </article>
                    )}
                <button className='btn btn-warning' onClick={() => this.cargarMas()}>
                    Cargar más
                </button>

                <section className='row cards all-series' id='series'>
                    {seriesFiltradas.map((serie, indice) => {
                        return (
                            <CardSerie
                                key={indice}
                                data={serie}
                            />
                        )
                    })}
                </section>
            </div>
        )
    }
}

export default Series;
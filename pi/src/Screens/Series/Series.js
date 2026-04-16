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

    filtrarSeries() {
        if (this.state.series === undefined) {
            return [];
        }
        let serieBuscada = this.state.series.filter((serie) => {
            return serie.name && serie.name.toLowerCase().includes(this.state.filtro.toLowerCase());
        });
        return serieBuscada;
    }

    cargarMas() {
        this.paginaActual = this.paginaActual + 1;
        fetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=ed64b41cac1f7454df1403e56e96ce49&page=${this.paginaActual}`)
        .then(respuesta => respuesta.json())
        .then(datos => this.setState({ series: this.state.series.concat(datos.results) }))
        .catch(error => console.error(error));
    }

    render() {
        let seriesFiltradas = this.filtrarSeries();

        return (
            <div className='container'>
                <h2 className='alert alert-warning'>Todas las series</h2>

                <form className='filter-form px-0 mb-3' onSubmit={(evento) => this.evitarSubmit(evento)}>
                    <input
                        type='text'
                        placeholder='Buscar dentro de la lista'
                        value={this.state.filtro}
                        onChange={(evento) => this.controlarCambios(evento)}
                    />
                </form>

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
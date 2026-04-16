
import { withRouter } from 'react-router-dom'
import React, { Component } from 'react';
import CardMovie from '../../components/CardMovie/CardMovie';
import './SearchResultsMovies.css';

class SearchResultsMovies extends Component{ 
    constructor(props){
        super(props);
        this.state = {
            personaje: [],
            url: "https://api.themoviedb.org/3/search/movie?api_key=ed64b41cac1f7454df1403e56e96ce49&query=" + props.match.params.id
        }
    }

componentDidMount(){
        fetch(this.state.url)
            .then(response => response.json())
            .then(data => this.setState({
                personaje: data.results
            }))
            .catch(error => console.log(error));
    }
render(){
    return(
        <div><h2 className="titulo-resultados">Resultados </h2>
        <section className='row cards all-movies' id='movies'>
            {this.state.personaje.length > 0 ? (
                this.state.personaje.map((pelicula, indice) => {
                    return (
                        <CardMovie
                            key={indice}
                            data={pelicula}
                        />
                    )
                })
            ) : (
                <p><img src={`/img/Gif.gif`} alt="..Cargando" /></p>
            )}
        </section>
        </div>
    )
}
}

export default withRouter(SearchResultsMovies)

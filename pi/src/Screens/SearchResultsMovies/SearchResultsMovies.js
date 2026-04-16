
import { withRouter } from 'react-router-dom'
import React, { Component } from 'react';
import CardMovie from '../../components/CardMovie/CardMovie';

class SearchResultsMovies extends Component{ 
    constructor(props){
        super(props);
        this.state = {
            personaje: [],
            url: "https://api.themoviedb.org/3/movie/" + props.match.params.id + "?api_key=ed64b41cac1f7454df1403e56e96ce49"
        }
    }

componentDidMount(){
        fetch(this.state.url)
            .then(response => response.json())
            .then(data => this.setState({
                personaje: data
            }))
            .catch(error => console.log(error));
    }
render(){
    return(
                <section className='row cards all-movies' id='movies'>
                    <h1>La pelicula buscada es</h1>
                    {this.state.personaje> 0 ? (
                        this.state.personaje.map((pelicula, indice) => {
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
        )
    }
}

export default withRouter(SearchResultsMovies)

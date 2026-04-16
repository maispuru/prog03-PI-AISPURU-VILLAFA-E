import { Component } from "react";
import {  Link } from "react-router-dom";
import CardDetalleMovie from "../../components/CardDetalleMovie/CardDetalleMovie";

class DetallesMovies extends Component{
     constructor(props){
        super(props)
        this.state = {
            movies: null,
        }
    }

componentDidMount(){
    let id = this.props.match.params.id
   fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ed64b41cac1f7454df1403e56e96ce49`)
  .then(res => res.json())
  .then(data => {console.log (data)
     this.setState({movies: data})})
  .catch(err => console.error(err));
}

render() {
    let pelicula = this.state.movies
    return(
        <div> 
            {pelicula === null ?  <h3>CARGANDO...</h3> : 
            <CardDetalleMovie
              imagen = {pelicula.poster_path}
              titulo = {pelicula.title}
              descripcion = {pelicula.overview}
              estreno = {pelicula.release_date}
              rating = {pelicula.vote_average}
              genero = {pelicula.genres}
              duracion = {pelicula.runtime}

            />
             } 
        </div> 
        )

}

}

export default DetallesMovies
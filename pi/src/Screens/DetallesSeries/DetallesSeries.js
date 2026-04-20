import { Component } from "react";
import {  Link } from "react-router-dom";
import CardDetalleSerie from "../../components/CardDetalleSerie/CardDetalleSerie.js";

class DetallesSeries extends Component{
     constructor(props){
        super(props)
        this.state = {
            serie: null,
        }
    }

componentDidMount(){
    let id = this.props.match.params.id
   fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=ed64b41cac1f7454df1403e56e96ce49`)
  .then(res => res.json())
  .then(data => this.setState({serie: data}))
  .catch(err => console.error(err));
}

render() {
    let serie = this.state.serie
    return(
        <div> 
            {serie === null ?  <p><img src={`/img/Gif.gif`} alt="..Cargando" /></p> : 
            <CardDetalleSerie
              data = {serie}
              imagen = {serie.poster_path}
              titulo = {serie.name}
              descripcion = {serie.overview}
              estreno = {serie.first_air_date}
              rating = {serie.vote_average}
              genero = {serie.genres}

            />
             } 
        </div> 
        )

}

}

export default DetallesSeries
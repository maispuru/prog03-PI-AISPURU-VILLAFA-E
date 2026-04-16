import { Component } from "react";
import { Link } from "react-router-dom";
import CardHomeMovie from "../CardHomeMovie/CardHomeMovie";
import CardHomeSerie from "../CardHomeSerie/CardHomeSerie";



class CardsHome extends Component{
    constructor(props){
        super(props)
        this.state = {
            movies: null,
            series: null
        }
    }

componentDidMount( ){

  fetch('https://api.themoviedb.org/3/movie/popular?api_key=ed64b41cac1f7454df1403e56e96ce49')
  .then(res => res.json())
  .then(data =>  this.setState(
    {movies: data.results}))
  .catch(err => console.error(err));

  fetch('https://api.themoviedb.org/3/tv/airing_today?api_key=ed64b41cac1f7454df1403e56e96ce49')
  .then(res => res.json())
  .then( data => this.setState(
    {series: data.results}
  ))
  .catch(err => console.error(err));
}



render(){
    return(
      <div>
       <div className="cards-title">
         <h2 className="TituloHome">Peliculas mas populares </h2>
        </div> 
         <section className="row cards" > 
            {this.state.movies === null ? 
             <p><img src={`/img/Gif.gif`} alt="..Cargando" /></p> : 
             this.state.movies.slice(0,4).map((pelicula ,idx) => (
                    <CardHomeMovie
                      key={idx}
                      id={pelicula.id}
                      titulo={pelicula.title}
                      imagen={pelicula.poster_path}
                      descripcion={pelicula.overview}
                    />
                )

             )}


         </section>
           <div className="cards-title" >
             <h2 className="TituloHome">Series mas vistas esta semana</h2>
           </div>
         <section className="row cards" >
          {this.state.series === null ? 
             <p><img src={`/img/Gif.gif`} alt="..Cargando" /></p> : 
             this.state.series.slice(0,4).map((serie , idx) => (
         
                    <CardHomeSerie
                      key={idx}
                      id= {serie.id}
                      titulo={serie.name}
                      imagen={serie.poster_path}
                      descripcion={serie.overview}
                    />
                )

            )}

         </section>

      </div>
    )
   
}

}

export default CardsHome
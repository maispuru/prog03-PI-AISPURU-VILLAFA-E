import { Component } from "react";
import { Link } from "react-router-dom";
import CardHomeMovie from "../CardMovie/CardMovie";
import CardHomeSerie from "../CardSerie/CardSerie";



class CardsHome extends Component{
    constructor(props){
        super(props)
        this.state = {
            movies: null,
            series: null,
            filtro: '',
            numerador:0
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
cambionum1(){
    this.setState(
    {numerador: 1}
  )
}
cambionum2(){
    this.setState(
    {numerador: 2}
  )
}
    controlarCambios(evento) {
        this.setState({ filtro: evento.target.value });
    }

enviarFormulario(event) {
    event.preventDefault();

    if (this.state.filtro != "") {
      if (this.state.numerador == 0) {
        this.props.history.push("/resultadosPelicula/" + this.state.filtro)
      }else{
        this.props.history.push("/resultadosSeries/" + this.state.filtro)
      }
    }
}

render(){
    return(
      <div>
                <div className='barra-busqueda-peliculas'>
                    <form className='form-busqueda-peliculas' onSubmit={(event)=>this.enviarFormulario(event)}>
                        <input type="text" placeholder="Buscar películas" onChange={(event)=>this.controlarCambios(event)} value={this.state.filtro} />
                          <div>
                            <input onClick={(event)=>this.cambionum1()}type="checkbox" id="task1" name="checklist" value="item1"/>
                            <label for="task1">Peliculas</label>
                          </div>
                          <div>
                            <input onClick={(event)=>this.cambionum2()}  type="checkbox" id="task1" name="checklist" value="item1"/>
                            <label for="task1">Series</label>
                          </div>
                        <input type="submit" value="Buscar" />
                    </form>
                </div>        
       <div className="cards-title">
         <h2 className="TituloHome">Peliculas mas populares </h2>
        </div> 
         <section className="row cards" > 
            {this.state.movies === null ? 
             <p><img src={`/img/Gif.gif`} alt="..Cargando" /></p> : 
             this.state.movies.slice(0,8).map((pelicula ,idx) => (
              
                    <CardHomeMovie
                      data={pelicula}
                      key={idx}
                    />
                )

             )}


         </section>
           <Link to={"/peliculas"} className="link-verTodas">Ver todas las peliculas</Link>
           <div className="cards-title" >
             <h2 className="TituloHome">Series mas vistas esta semana</h2>
           </div>
         <section className="row cards" >
          {this.state.series === null ? 
             <p><img src={`/img/Gif.gif`} alt="..Cargando" /></p> : 
             this.state.series.slice(0,8).map((serie , idx) => (
         
                    <CardHomeSerie
                      data={serie}
                      key={idx}
                    />
                )

            )}

         </section>
           <Link to={"/series"} className="link-verTodas">Ver todas las series</Link>
      </div>
    )
   
}

}

export default CardsHome
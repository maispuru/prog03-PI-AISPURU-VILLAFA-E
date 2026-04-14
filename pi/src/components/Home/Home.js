import { Component } from "react";
import { data, Link } from "react-router-dom";



class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            datos: " "
        }
    }

componentDidMount( ){

  fetch('https://api.themoviedb.org/3/movie/popular?api_key=ed64b41cac1f7454df1403e56e96ce49')
  .then(res => res.json())
  .then(data =>  this.setState(
    {datos: data.results}))
  .catch(err => console.error(err));
}


render(){
    return(
        <div>
            { 
            this.state.datos === " " ?  
             <h3>Cargando...</h3> :
              this.state.datos.map(function (pelicula) {
                return(
                    <div> 
                        <img src="">
                        </img>
                        <h3>{pelicula.title}</h3>
                        <p>{pelicula.overview}</p>
                    </div>
                  
                )
                
              })}

        </div>
    )
   
}

}




export default Home;

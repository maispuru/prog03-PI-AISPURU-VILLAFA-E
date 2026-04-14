import { Component } from "react";
import { data, Link } from "react-router-dom";



class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            datos: " ",
            valor: " "
        }
    }

componentDidMount( ){

  fetch('https://api.themoviedb.org/3/movie/popular?api_key=ed64b41cac1f7454df1403e56e96ce49')
  .then(res => res.json())
  .then (data => console.log (data))
  .then(data => this.setState(
    {datos: data.results}
  ))
  .catch(err => console.error(err));
}



render(){
    return(
        <div>
            
            { this.state.datos === " " ?   
            (<img src={`/img/Gif.gif`} alt="..Cargando"></img>) 
            : <h3> {this.state.datos} </h3>}

        </div>
    )
   
}

}

/*BASE Filtro busqueda
controlarCambios(event) {
        this.setState({valor: event.target.value});
    }
enviarFormulario(event) {
    event.preventDefault();
    let personajeBuscado = this.state.datos.filter((item) => {
        return item.title && item.title.toLowerCase().includes(this.state.valor.toLowerCase())
    })[0]

    this.props.history.push("/resultados/" + personajeBuscado.id)
}
ejecutarBusqueda(item){
        this.props.history.push("/resultados/" + item.id)
    }
        
            <form onSubmit={(event)=>this.enviarFormulario(event)}>
                        <label>Name:</label>
                        <input type="text" onChange={(event)=>this.controlarCambios(event)} value={this.state.valor} />
                        <input type="submit" value="Submit" />
            </form>
*/



export default Home;

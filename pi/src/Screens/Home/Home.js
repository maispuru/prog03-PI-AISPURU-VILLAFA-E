import { Component } from "react";
import CardsHome from "../../components/CardsHome/CardsHome";
import "./Home.css"; 

class Home extends Component {
    render(){
        return(
            <div> 
                <CardsHome/>
            </div>
        )
    }
}

export default Home;

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


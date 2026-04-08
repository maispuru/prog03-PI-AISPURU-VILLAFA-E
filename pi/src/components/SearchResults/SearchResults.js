/*ESTO ES LA BASE DE TP DE RICK
import { withRouter } from 'react-router-dom'
import React, { Component } from 'react';

class SearchResults extends Component{ 
    constructor(props){
        super(props);
        this.state = {
            botonTexto: "Ver mas",
            claseOcultar: "Ocultar",
            id: props.match.params.id,
            personaje: null,
            url: 'https://rickandmortyapi.com/api/character/' + props.match.params.id
        }
    }
cambio() {
        if (this.state.botonTexto === "Ver mas") {
            this.setState({
                botonTexto: "Ver menos",
                claseOcultar: ""
            })
        } else {
            this.setState({
                botonTexto: "Ver mas",
                claseOcultar: "Ocultar"
            })
        }
    }
componentDidMount(){
        this.apiCall(this.state.url)
    }
apiCall(url){
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({
                personaje: data
            }))
            .catch(error => console.log(error));
    }
render(){
    if(this.state.personaje == null){
        return(
            <section className='cardContainer'>
                <h2>Personaje RyM</h2>
                <p>Cargando personaje...</p>
            </section>
        )
        }
    return(
            <section className='cardContainer'>
                <h2>Personaje RyM</h2>
                <article className="character-card">
                    <img src={this.state.personaje.image} alt={this.state.personaje.name} />
                    <h2>{this.state.personaje.name}</h2>
                    <p>{this.state.personaje.status}</p>
                    <p>{this.state.personaje.species}</p>
                    <button onClick={() => this.cambio()}>{this.state.botonTexto}</button>
                    <div className={this.state.claseOcultar}>
                        <p>Origen: {this.state.personaje.origin.name}</p>
                        <p><a href={this.state.personaje.origin.url}>Dimension</a></p>
                    </div>
                    <button>Agregar a Favoritos</button>
                </article>
            </section>
        )
    }
}

export default withRouter(SearchResults)
*/
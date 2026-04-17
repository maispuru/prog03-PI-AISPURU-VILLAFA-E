import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CardSerie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            informacionItem: props.data,
            esFavorito: false
        }
    }

    componentDidMount() {
        let favoritosGuardados = localStorage.getItem("favoritos") || "[]";
        let favoritos = JSON.parse(favoritosGuardados);

        let coincidencias = favoritos.filter((favorito) => {
            return favorito.id === this.state.informacionItem.id && favorito.tipo === "serie";
        });

        if (coincidencias.length > 0) {
            this.setState({ esFavorito: true });
        }
    }

    agregarFavorito() {
        let item = this.state.informacionItem;
        let favoritosGuardados = localStorage.getItem("favoritos") || "[]";
        let favoritos = JSON.parse(favoritosGuardados);

        let nuevoFavorito = {
            id: item.id,
            tipo: "serie"
        };

        let favoritosActualizados = favoritos.concat(nuevoFavorito);
        localStorage.setItem("favoritos", JSON.stringify(favoritosActualizados));
        this.setState({ esFavorito: true });
    }

    btnVerMas(){
        this.setState(
             {verMas: !this.state.verMas})
    }
    render() {
        let item = this.state.informacionItem;
        let btn = "Ver descrpcion"
        let descripcion = null        
        if (this.state.verMas === true) {
            btn = "Ocultar"
            descripcion = <p className="card-text" > {item.overview}</p>
        }
    return (
            <article className="single-card-movie">
                <img
                    src={"https://image.tmdb.org/t/p/w500" + item.poster_path}
                    className="card-img-top"
                    alt={item.name}
                />
                <div className="cardBody">
                    <h5 className="card-title">{item.name}</h5>
                    {descripcion}
                    <button onClick={()=> this.btnVerMas()} className="ver-mas">{btn}</button> <br/>
                    <Link to={"/detalleSerie/" + item.id} className="ver-mas">Ver más</Link>
                    <br/><br/>
                    {this.state.esFavorito ? null : (
                        <button className="favorito-boton" onClick={() => this.agregarFavorito()}>
                            ♥️ Agregar a favoritos
                        </button>
                    )}
                </div>
            </article>
        )




    }
}

export default CardSerie;

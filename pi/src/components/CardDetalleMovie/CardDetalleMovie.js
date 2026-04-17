import { Component } from "react";
import {  Link } from "react-router-dom";
import DetallesSeries from "../../Screens/DetallesSeries/DetallesSeries";



class CardDetalleMovie extends Component {
    constructor(props){
        super(props)
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
  
    render(){

        return(
         
          <section className="row">
             <img  src= {"https://image.tmdb.org/t/p/w500"  + this.props.imagen} className= "col-md-6"/>
            <section className="col-md-6 info">
              <h3 className="card-title"> {this.props.titulo}</h3>
              <p className="description">{this.props.descripcion}</p>
              <p className="mt-0 mb-0">Fecha de estreno: {this.props.estreno}</p>
              <p className="mt-0 mb-">Clasifiacion: {this.props.rating}</p>
              <p className="mt-0 mb-">Duracion: {this.props.duracion}</p>
              <p className="mt-0 mb-">Genero: {this.props.genero[0].name}</p>
              {this.state.esFavorito ? null : (
                  <button className="favorito-boton" onClick={() => this.agregarFavorito()}>
                            ♥️ Agregar a favoritos
                 </button>
              )}
             </section>

                
           </section>
   
           )

        }
      }

      export default CardDetalleMovie

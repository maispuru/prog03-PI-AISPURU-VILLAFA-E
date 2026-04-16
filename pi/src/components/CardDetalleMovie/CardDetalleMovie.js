import { Component } from "react"


function CardDetalleMovie(props) {
    return(
        <section className="row">
            <img  src= {"https://image.tmdb.org/t/p/w500"  + props.imagen} className= "col-md-6"/>
            <section className="col-md-6 info">
              <h3 className="card-title"> {props.titulo}</h3>
              <p className="description">{props.descripcion}</p>
              <p className="mt-0 mb-0">Fecha de estreno: {props.estreno}</p>
              <p className="mt-0 mb-">Clasifiacion: {props.rating}</p>
              <p className="mt-0 mb-">Duracion: {props.duracion}</p>
              <p className="mt-0 mb-">Genero: {props.genero[0].name}</p>
                
            </section>
         </section>
    )
    
}

export default CardDetalleMovie
import { Component } from "react";
import {  Link } from "react-router-dom";



function CardHome(props) {
    return(
        <article className="single-card-movie" >
            <img src= {"https://image.tmdb.org/t/p/w500"  + props.imagen} className="card-img-top" />
            <div className="cardBody">
                 <h5 className="card-title"> {props.titulo}</h5>
                 <button>Ver descripción</button>
                 <p className="card-text"> {props.descripcion}</p>
                 <Link to = {"/dettalle/" + props.id}> Ver mas</Link>

            </div>
        </article>
    )
}

export default CardHome
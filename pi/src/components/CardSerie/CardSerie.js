import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CardSerie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            informacionItem: props.data
        }
    }

    render() {
        let item = this.state.informacionItem;

        return (
            <article className="single-card-tv">
                <img
                    src={"https://image.tmdb.org/t/p/w500" + item.poster_path}
                    className="card-img-top"
                    alt={item.name}
                />
                <div className="cardBody">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.overview}</p>
                    <Link to={"/detalle/" + item.id} className="btn btn-primary">Ver más</Link>
                </div>
            </article>
        )
    }
}

export default CardSerie; 

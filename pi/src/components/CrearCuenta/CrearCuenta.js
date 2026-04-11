import React, { Component } from 'react';
import './CrearCuenta.css'
class CrearCuenta extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    guardarDatos() {
        
    }
render(){
    return(
    <section>
        <h2>Crear Cuenta</h2>
        <form>
            <label>Email:</label>
            <input type="email" name="email" />
            <br/>
            <label>Password:</label>
            <input type="password" name="password" />
            <br/>
            <button type="submit">Crear cuenta</button>
        </form>
    </section>
    )
    }
}

export default CrearCuenta 
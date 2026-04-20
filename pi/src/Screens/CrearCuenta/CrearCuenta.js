import React, { Component } from 'react';
import Cookies from 'universal-cookie'
import { Link } from "react-router-dom";
import './CrearCuenta.css'
const cookies = new Cookies()

class FormRegister extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            error:""
        };
    }
controlarCambios1(evento) {
        this.setState({ email: evento.target.value });
    }
controlarCambios2(evento) {
        this.setState({ password: evento.target.value });
    }
onSubmit(email, password){
    let usuarioACrear = {
        email: email,
        password: password
    }
    let usersStorage = localStorage.getItem("Usuario")
    let usersParseado = {
        Email: [],
        Password: []
    }
    if (usersStorage != null) {
        try {
            usersParseado = JSON.parse(usersStorage)
        } catch(error) {
            usersParseado = {
                Email: [],
                Password: []
            }
        }
    }
    if (usuarioACrear.password.length >= 6) {
        let emailFiltro = usersParseado.Email
        let usersFiltrado = emailFiltro.filter((favorito) => {
            return favorito == usuarioACrear.email
        })
        if (usersFiltrado.length == 0) {
            usersParseado.Email.push(email)
            usersParseado.Password.push(password)
            localStorage.setItem("Usuario", JSON.stringify(usersParseado))
            cookies.set('user-auth-cookie', email)
        } else {
            this.setState({ error: "El email ya existe" })
            return
        }
    } else {
        this.setState({ error: "La Password debe tener 6 caracteres o mas" })
        return
    }
    console.log(localStorage)
}
enviarFormulario(event) {
    event.preventDefault();
    
}

render(){
    return(
    <section>
        <h2 className='TituloCrear'>Crear Cuenta</h2>
                <form onSubmit={(event)=>(this.enviarFormulario(event),this.onSubmit(this.state.email, this.state.password))}>
                    <div className="fila-form">
                        <label>Email:</label>
                        <input type="email"name="email" onChange={(event)=>this.controlarCambios1(event)}value={this.state.email} />
                    </div>
                    <div className="fila-form">
                        <label>Password:</label>
                        <input type="password" name="password" onChange={(event)=>this.controlarCambios2(event)} value={this.state.password}/>
                    </div>
                    <button type="submit">Crear cuenta</button>
                </form>
                {this.state.error != "" ? <p>{this.state.error}</p> : null}
    </section>
    )
    }
}

export default FormRegister
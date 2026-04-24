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
    let usersParseado
    if (usuarioACrear.email.length < 1){
        this.setState({ error: "No hay mail" })
        return
    }
    if (usersStorage == null) {
        usersParseado = {
            Email: [],
            Password: []
        }
    } else {
        usersParseado = JSON.parse(usersStorage)
    }
    if (usuarioACrear.password.length < 6) {
        this.setState({ error: "La Password debe tener 6 caracteres o mas" })
        return
    }
    let emailFiltro = usersParseado.Email
    let usersFiltrado = emailFiltro.filter((favorito) => {
        return favorito == usuarioACrear.email
    })
    if (usersFiltrado.length > 0) {
        this.setState({ error: "El email ya existe" })
        return
    }
    usersParseado.Email.push(email)
    usersParseado.Password.push(password)
    localStorage.setItem("Usuario", JSON.stringify(usersParseado))
    this.setState({ error: "" })
    this.props.history.push("/Login")
    
}

enviarFormulario(event) {
    event.preventDefault();
    this.onSubmit(this.state.email, this.state.password)
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
                {this.state.error != "" ? <p className='titulo-error'>{this.state.error}</p> : null}
    </section>
    )
    }
}

export default FormRegister
import React, { Component } from 'react';
import Cookies from 'universal-cookie'
import './CrearCuenta.css'
const cookies = new Cookies()

class FormRegister extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }
controlarCambios1(evento) {
        this.setState({ email: evento.target.value });
    }
controlarCambios2(evento) {
        this.setState({ password: evento.target.value });
    }
onSubmit(email, password){
    let usuarioACrear ={
        email:{email},
        password:{password}
    }
    let usersStorage = localStorage.getItem("Usuario")
    if (usersStorage==null) {
        if ((usuarioACrear.password.length()>6)) {
            localStorage.setItem("Usuario",{
                Email:JSON.stringify(email),
                Password:JSON.stringify(password)
            })}
        else{
            return <p>La Password debe tenr mas de 6 caracteres</p>
            }
        }
    else{
        let emailFilrto = usersStorage.Email
        let usersFiltrado  = emailFilrto.filter((favorito) => {
            return (favorito == usuarioACrear.email)
        });
        if ((usuarioACrear.password.length()>6)) {
            if (usersFiltrado<0) {
                let usersParseado =JSON.parse(usersStorage)
                usersParseado.push({
                    Email:JSON.stringify(email),
                    Password:JSON.stringify(password)
            })
                localStorage.setItem("Usuario",{
                    Email:JSON.stringify(email),
                    Password:JSON.stringify(password)
            })}else{
            return <p>El email ya existe</p>
            }
        }else{
            return <p>La Password debe tenr mas de 6 caracteres</p>
            }
        }   
	if(usersStorage!=null){
       cookies.set('user-auth-cookie', usersStorage.Email)
     }
     console.log(localStorage);
  }


render(){
    return(
    <section>
        <h2>Crear Cuenta</h2>
        <form>
            <label>Email:</label>
            <input type="email" name="email"  onChange={(event)=>this.controlarCambios1(event)}value={this.state.email}/>
            <br/>
            <label>Password:</label>
            <input type="password" name="password"  onChange={(event)=>this.controlarCambios2(event)}value={this.state.password}/>
            <br/>
            <button onClick={(event) => this.onSubmit(this.state.email, this.state.password)} type="submit">Crear cuenta</button>
        </form>
    </section>
    )
    }
}

export default FormRegister 
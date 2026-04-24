import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';
import './Login.css';

const cookies = new Cookies();

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            error: "",
            loginExitoso: false
        };
    }

    controlarCambios1(evento) {
        this.setState({ email: evento.target.value });
    }

    controlarCambios2(evento) {
        this.setState({ password: evento.target.value });
    }

    onSubmit(email, password) {
        let usersStorage = localStorage.getItem("Usuario") || '{"Email":[],"Password":[]}';
        let usersParseado = JSON.parse(usersStorage);

        let emailFiltro = usersParseado.Email;
        let usersFiltrado = emailFiltro.filter((usuario) => {
            return usuario == email;
        });

        if (usersFiltrado.length > 0) {
            let passwordFiltrado = usersParseado.Password.filter((pass, i) => {
                return usersParseado.Email[i] == email;
            });

            if (passwordFiltrado[0] === password) {
                cookies.set('user-auth-cookie', email);
                this.setState({ loginExitoso: true, error: "" });
                this.props.history.push("/")
            } else {
                this.setState({ error: "Credenciales incorrectas" });
            }
        } else {
            this.setState({ error: "Credenciales incorrectas" });
        }
    }

    enviarFormulario(event) {
        event.preventDefault();
    }

    render() {
        return (
            <section>
                <h2 className='TituloCrear'>Iniciar Sesión</h2>
                <form onSubmit={(event) => (this.enviarFormulario(event), this.onSubmit(this.state.email, this.state.password))}>
                    <div className="fila-form">
                        <label>Email:</label>
                        <input type="email" name="email" onChange={(event) => this.controlarCambios1(event)} value={this.state.email} />
                    </div>
                    <div className="fila-form">
                        <label>Password:</label>
                        <input type="password" name="password" onChange={(event) => this.controlarCambios2(event)} value={this.state.password} />
                    </div>
                    <button type="submit">Iniciar sesión</button>
                </form>
                {this.state.error != "" ? <p>{this.state.error}</p> : null}
                {this.state.loginExitoso ? <Link to="/">Ir al inicio</Link> : null}
            </section>
        );
    }
}

export default Login;
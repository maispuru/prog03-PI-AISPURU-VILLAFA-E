import { Component } from "react";
import { Link } from "react-router-dom";

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
    controlarEmail = (event) => {
    this.setState({ email: event.target.value });
}
    controlarPassword = (event) => {
    this.setState({ password: event.target.value });
}
    handleSubmit = (event) => {
    event.preventDefault(); 



}
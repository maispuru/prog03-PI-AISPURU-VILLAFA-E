import { Component } from "react";
import { data, Link } from "react-router-dom";

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            datos: " "
        }
    }
componentDidMount( ){
  fetch ("" )
    .then (response => response.json())
    .then ( console.log (data))
}

render(){
   
}

}
export default Home;

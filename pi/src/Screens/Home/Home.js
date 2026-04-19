import { Component } from "react";
import CardsHome from "../../components/CardsHome/CardsHome";
import "./Home.css"; 

class Home extends Component {
    render(){
        return(
            <div>       
                <CardsHome history={this.props.history}/>
            </div>
        )
    }
}

export default Home;

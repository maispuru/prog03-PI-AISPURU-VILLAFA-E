import { Route ,Switch} from 'react-router-dom';
import Error404 from "./components/Error404/Error404";
import SearchResults from "./components/SearchResults/SearchResults";
import Header from './components/Header/Header';
import Home from "./components/Home/Home"
import CrearCuenta from "./components/CrearCuenta/CrearCuenta"
/*import Favoritos from "./components/Favoritos/Favoritos";*/


function App() {
  return (
    <div className="App">
      < Header/>

      <Switch>
          <Route path='/' exact= {true} component= {Home}/>
          <Route path='/crear' component= {CrearCuenta}/>
          <Route path="/resultados/:id"  component={SearchResults}/>     
          <Route component={Error404} />
          /*<Route path='/favoritos' component={Favoritos}/>*/

      </Switch>

    </div>
  );
}

export default App;

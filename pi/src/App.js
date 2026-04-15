import { Route ,Switch} from 'react-router-dom';
import Error404 from "./components/Error404/Error404";
import SearchResults from "./components/SearchResults/SearchResults";
import Header from './components/Header/Header';
import Home from "./Screens/Home/Home"
import CrearCuenta from "./components/CrearCuenta/CrearCuenta"
/*import Favoritos from "./components/Favoritos/Favoritos";*/
import Movies from "./components/Movies/Movies"
import Series from "./components/Series/Series"
import Register from "./components/Register/Register"
import Footer from "./components/Footer/Footer"


function App() {
  return (
    <div className="App">
      < Header/>

      <Switch>
          <Route path='/' exact= {true} component= {Home}/>
          <Route path='/crear' component= {CrearCuenta}/>
          <Route path='/login' component= {Register}/>
          <Route path='/crear' component= {CrearCuenta}/>
          <Route path='/login' component= {Register}/>
          <Route path="/resultados/:id"  component={SearchResults}/>     
          <Route component={Error404} />
          <Route path='/favoritos' component={Favoritos}/>
      </Switch>
    <footer><Footer /></footer>
    </div>
  );
}

export default App;

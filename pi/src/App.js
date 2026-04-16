import { Route ,Switch} from 'react-router-dom';
import Error404 from "./components/Error404/Error404";
import SearchResultsPelis from "./Screens/SearchResultsMovies/SearchResultsMovies";
import SearchResultsSeries from "./Screens/SearchResultsSerie/SearchResultsSerie";
import Header from './components/Header/Header';
import Home from "./Screens/Home/Home"
import CrearCuenta from "./components/CrearCuenta/CrearCuenta"
import Favoritos from "./Screens/Favoritos/Favoritos";
import Register from "./components/Register/Register"
import Footer from "./components/Footer/Footer"
import Peliculas from "./Screens/Movies/Movies";
import Series from "./Screens/Series/Series";
import DetallesMovies from './Screens/DetallesMovies/Detallesmovies';
import DetallesSeries from './Screens/DetallesSeries/DetallesSeries';


function App() {
  return (
    <div className="App">
      < Header/>

      <Switch>
          <Route path='/' exact= {true} component= {Home}/>
          <Route path='/crear' component= {CrearCuenta}/>
          <Route path='/login' component= {Register}/>
          <Route path='/peliculas' component={Peliculas}/>
          <Route path='/series' component={Series}/>
          <Route path='/detallePelicula/:id' component={DetallesMovies} />
          <Route path='/detalleSerie/:id' component={DetallesSeries} />
          <Route path='/favoritos' component={Favoritos}/>
          <Route path="/resultadosPelicula/:id"  component={SearchResultsPelis}/>   
          <Route path="/resultadosSeries/:id"  component={SearchResultsSeries}/>    
          <Route component={Error404} />
      </Switch>
    <footer><Footer /></footer>
    </div>
  );
}

export default App;

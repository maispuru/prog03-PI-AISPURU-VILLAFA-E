import { Route ,Switch} from 'react-router-dom';
import Error404 from "./components/Error404/Error404";
import SearchResults from "./components/SearchResults/SearchResults";
import Header from './components/Header/Header';
import Home from "./components/Home/Home"


function App() {
  return (
    <div className="App">
      < Header/>

      <Switch>
          <Route path='/' exact= {true} component= {Home}/>
          <Route path="/resultados/:id"  component={SearchResults}/>     
          <Route component={Error404} />
      </Switch>

    </div>
  );
}

export default App;

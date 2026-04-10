import { Route ,Switch} from 'react-router-dom';
import Error404 from "./components/Error404/Error404";
import SearchResults from "./components/SearchResults/SearchResults";


function App() {
  return (
    <div className="App">
      <Switch>
          <Route path="/resultados/:id"  component={SearchResults}/>
          <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;

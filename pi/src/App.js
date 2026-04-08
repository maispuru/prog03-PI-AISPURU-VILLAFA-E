import { Route ,Switch} from 'react-router-dom'
import Error404 from "./screens/Error404/Error404"
import SearchResults from "./componentes/SearchResults/SearchResults";

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

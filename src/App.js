import { Route, Switch } from "react-router-dom";
import Home from "./pages";
import Resume from "./pages/resume";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

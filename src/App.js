import { Route, Switch } from "react-router-dom";
import Home from "./pages";
import CueProject from "./pages/CueProject";
import DocetProject from "./pages/DocetProject";
import HexProject from "./pages/HexProject";
import NomnomProject from "./pages/NomnomProject";
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
        <Route path="/nomnom">
          <NomnomProject />
        </Route>
        <Route path="/cue">
          <CueProject />
        </Route>
        <Route path="/docet">
          <DocetProject />
        </Route>
        <Route path="/hex">
          <HexProject />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

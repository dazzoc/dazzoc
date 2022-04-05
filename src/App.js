import { Route, Switch } from "react-router-dom";
import Home from "./pages";
import CueProject from "./pages/CueProject";
import DocetProject from "./pages/DocetProject";
import HexProject from "./pages/HexProject";
import NomnomProject from "./pages/NomnomProject";
import Resume from "./pages/resume";
import { NomNomImages, CueImages, HexImages, DocetImages } from './data/SliderData';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/resume">
          <Resume />
        </Route>
        <Route exact path="/nomnom">
          <NomnomProject slides={NomNomImages}/>
        </Route>
        <Route exact path="/cue">
          <CueProject slides={CueImages}/>
        </Route>
        <Route exact path="/docet">
          <DocetProject slides={DocetImages}/>
        </Route>
        <Route exact path="/hex">
          <HexProject slides={HexImages}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

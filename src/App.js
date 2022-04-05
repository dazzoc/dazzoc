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
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/nomnom">
          <NomnomProject slides={NomNomImages}/>
        </Route>
        <Route path="/cue">
          <CueProject slides={CueImages}/>
        </Route>
        <Route path="/docet">
          <DocetProject slides={DocetImages}/>
        </Route>
        <Route path="/hex">
          <HexProject slides={HexImages}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

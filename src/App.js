import { Route, Switch } from "react-router-dom";
import Home from "./pages";
import CueProject from "./pages/CueProject";
import DocetProject from "./pages/DocetProject";
import HexProject from "./pages/HexProject";
import NomnomProject from "./pages/NomnomProject";
import Resume from "./pages/resume";
import ScrollToTop from './components/scrollToTop';
import { NomNomImages, CueImages, HexImages, DocetImages } from './data/SliderData';



function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/resume">
          <ScrollToTop>
            <Resume />
          </ScrollToTop>
        </Route>
        <Route exact path="/nomnom">
          <ScrollToTop>
            <NomnomProject slides={NomNomImages}/>
          </ScrollToTop>
        </Route>
        <Route exact path="/cue">
          <ScrollToTop>
            <CueProject slides={CueImages}/>
          </ScrollToTop>
        </Route>
        <Route exact path="/docet">
          <ScrollToTop>
            <DocetProject slides={DocetImages}/>
          </ScrollToTop>
        </Route>
        <Route exact path="/hex">
          <ScrollToTop>
            <HexProject slides={HexImages}/>
          </ScrollToTop>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

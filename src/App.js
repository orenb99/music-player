import React from "react";
import Album from "./components/Album";
import Artist from "./components/Artist";
import Song from "./components/Song";
import Nav from "./components/Nav";
import Playlist from "./components/Playlist";
import Home from "./components/Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/song" component={Song} />
        <Route path="/album" component={Album} />
        <Route path="/artist" component={Artist} />
        <Route path="/playlist" component={Playlist} />
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import Album from "./components/Album";
import Artist from "./components/Artist";
import Song from "./components/Song";
import Playlist from "./components/Playlist";
import Home from "./components/Home";
import "./styles/app.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/">
          <h1>Home</h1>
        </Link>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/song/:id" component={Song} />
          <Route path="/album/:name" component={Album} />
          <Route path="/artist/:name" component={Artist} />
          <Route path="/playlist/:name" component={Playlist} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

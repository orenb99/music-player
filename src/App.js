import React from "react";
import Album from "./components/Album";
import Artist from "./components/Artist";
import Song from "./components/Song";
import Playlist from "./components/Playlist";
import Home from "./components/Home";
import albums from "./data/albums.json";
import "./styles/app.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export function getImage(type, item, imgArr) {
  let copy = { ...item };
  if (type === "songs")
    copy = albums.find((value) => value.name === copy.album);
  return imgArr.find((value) => value.name === copy.cover).img;
}

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
          <Route path="/album/:id" component={Album} />
          <Route path="/artist/:id" component={Artist} />
          <Route path="/playlist/:id" component={Playlist} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

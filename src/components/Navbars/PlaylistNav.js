import React from "react";
import { Link } from "react-router-dom";
import playlists from "../../data/playlists.json";

const PlaylistNav = () => (
  <nav className={`navbar playlist`}>
    <h1>{"playlists"}</h1>
    {playlists.map(
      (item, index) =>
        index < 5 && (
          <Link to={`/playlist/${item.name}`}>
            <h1>{item.name}</h1>
          </Link>
        )
    )}
  </nav>
);

export default PlaylistNav;

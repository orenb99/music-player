import React from "react";
import { Link } from "react-router-dom";
import playlists from "../../data/playlists.json";
import topFive from "../../utils";

const PlaylistNav = () => {
  const topPlaylists = topFive(playlists);
  return (
    <nav className={`navbar playlist`}>
      <h1>{"playlists"}</h1>
      {topPlaylists.map((item) => (
        <Link to={`/playlist/${item.name}`} key={item.name}>
          <h1>{item.name}</h1>
        </Link>
      ))}
    </nav>
  );
};

export default PlaylistNav;

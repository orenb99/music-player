import React from "react";
import { Link } from "react-router-dom";

const Playlist = ({ match }) => (
  <div>
    <h1>Playlist {match.params.name}</h1>
  </div>
);

export default Playlist;

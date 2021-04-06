import React from "react";
import { Link } from "react-router-dom";

const Song = ({ match }) => (
  <div>
    <h1>Song {match.params.name}</h1>
  </div>
);

export default Song;

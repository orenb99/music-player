import React from "react";
import { Link } from "react-router-dom";

const Artist = ({ match }) => (
  <div>
    <h1>Artist {match.params.name}</h1>
  </div>
);

export default Artist;

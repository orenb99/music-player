import React from "react";
import { Link } from "react-router-dom";

const Album = ({ match }) => (
  <div>
    <h1>Album {match.params.name}</h1>
  </div>
);

export default Album;

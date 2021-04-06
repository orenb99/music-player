import React from "react";
import { Link } from "react-router-dom";
import artists from "../data/artists.json";
import { artistImgs } from "../data/imgs/imgArray";

const Artist = ({ match }) => {
  const artist = artists.find((value) => value.ID === match.params.id);
  return (
    <div className="artist-page">
      <h1>{artist.name}</h1>
      <h1></h1>
    </div>
  );
};

export default Artist;

import React from "react";
import { Link } from "react-router-dom";
import albums from "../data/albums.json";
import { albumImgs } from "../data/imgs/imgArray";

const Album = ({ match }) => {
  const album = albums.find((value) => value.ID === match.params.id);
  return (
    <div className="album-page">
      {console.log(albumImgs[0].name, album.cover)}
      <img src={albumImgs.find((value) => value.name === album.cover).img} />
      <h1>{album.name}</h1>
      <h1>{album.artist}</h1>
    </div>
  );
};

export default Album;

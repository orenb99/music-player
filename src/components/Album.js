import React from "react";
import { Link } from "react-router-dom";
import albums from "../data/albums.json";
import songs from "../data/songs.json";
import { albumImgs } from "../data/imgs/imgArray";
import { getImage } from "../App";

const Album = ({ match }) => {
  const album = albums.find((value) => value.ID === match.params.id);
  console.log(album);
  return (
    <div className="album-page">
      <img src={getImage("albums", album, albumImgs)} />
      <h1>{album.name}</h1>
      <h1>{album.artist}</h1>
      {album.songs.map((song) => {
        return (
          <Link
            key={song}
            to={`/song/${songs.find((item) => item.name === song).ID}`}
          >
            <h4>{song}</h4>
          </Link>
        );
      })}
    </div>
  );
};

export default Album;

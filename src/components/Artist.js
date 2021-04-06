import React from "react";
import { Link } from "react-router-dom";
import artists from "../data/artists.json";
import albums from "../data/albums.json";
import songs from "../data/songs.json";

import { artistImgs } from "../data/imgs/imgArray";
import { getImage } from "../App";

const Artist = ({ match }) => {
  const artist = artists.find((value) => value.ID === match.params.id);
  return (
    <div className="artist-page">
      <h1>{artist.name}</h1>
      <img src={getImage("artists", artist, artistImgs)} />
      <div className="selected-songs">
        <h2>Selected Songs</h2>
        {artist.selected.map((song) => {
          return (
            <Link
              key={song}
              to={`/song/${songs.find((item) => item.name === song).ID}`}
            >
              <h3>{song}</h3>
            </Link>
          );
        })}
      </div>
      <div className="artist's-albums">
        <h2>Albums</h2>
        {artist.albums.map((album) => {
          return (
            <Link
              key={album}
              to={`/album/${albums.find((item) => item.name === album).ID}`}
            >
              <h3>{album}</h3>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Artist;

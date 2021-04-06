import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import songs from "../data/songs.json";
import albums from "../data/albums.json";
import { albumImgs } from "../data/imgs/imgArray";
import { getImage } from "../App";
const Song = ({ match }) => {
  const song = songs.find((value) => value.ID === match.params.id);
  const newLyrics = song.lyrics.split("\n").map((str, index) => (
    <p key={`r${index}`}>
      {str}
      <br />
    </p>
  ));
  return (
    <div className="song-page">
      <h1>{song.name}</h1>
      <img src={getImage("songs", song, albumImgs)} />
      <h1>{song.artist}</h1>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${song.ID}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <div className="lyrics-div">{newLyrics}</div>
    </div>
  );
};

export default Song;

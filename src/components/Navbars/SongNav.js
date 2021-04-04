import React from "react";
import { Link } from "react-router-dom";
import songs from "../../data/songs.json";

const SongNav = () => (
  <nav className={`navbar songs`}>
    <h1>{"songs"}</h1>
    {songs.map((item, index) => (
      // index < 5 && (
      <iframe
        className="youtube-video"
        width="250"
        height="140"
        src={`https://www.youtube.com/embed/${item.playerId}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    ))}
  </nav>
);

export default SongNav;

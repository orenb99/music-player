import React from "react";
import { Link } from "react-router-dom";
import songs from "../../data/songs.json";
import topFive from "../../utils";
const SongNav = () => {
  const topSongs = topFive(songs);
  return (
    <nav className={`navbar songs`}>
      <h1>{"songs"}</h1>
      {topSongs.map((item) => (
        <iframe
          key={item.playerId}
          className="youtube-video"
          width="250"
          height="140"
          src={`https://www.youtube.com/embed/${item.playerId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ))}
    </nav>
  );
};

export default SongNav;

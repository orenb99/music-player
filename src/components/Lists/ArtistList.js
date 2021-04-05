import React from "react";
import { Link } from "react-router-dom";
import artists from "../../data/artists.json";
import { artistImgs } from "../../data/imgs/imgArray";
import topFive from "../../utils";

const ArtistNav = () => {
  const topArtists = topFive(artists);
  let nameArr = artistImgs.map((value) => value.name);
  return (
    <div className={`artists container`}>
      <h1>{"artists"}</h1>
      {topArtists.map((item) => (
        <Link to={`/artist/${item.name}`} key={item.name}>
          <img
            className="artists-cover"
            src={artistImgs[nameArr.indexOf(item.cover)].img}
            alt={item.name}
          />
        </Link>
      ))}
    </div>
  );
};

export default ArtistNav;

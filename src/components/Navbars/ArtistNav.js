import React from "react";
import { Link } from "react-router-dom";
import artists from "../../data/artists.json";
import { artistImgs } from "../../data/imgs/imgArray";

const ArtistNav = () => {
  let nameArr = artistImgs.map((value) => value.name);
  return (
    <nav className={`navbar artists`}>
      <h1>{"artists"}</h1>
      {artists.map(
        (item, index) =>
          index < 5 && (
            <Link to={`/artist/${item.name}`}>
              <img
                className="artists-cover"
                src={artistImgs[nameArr.indexOf(item.cover)].img}
                alt={item.name}
              />
            </Link>
          )
      )}
    </nav>
  );
};

export default ArtistNav;

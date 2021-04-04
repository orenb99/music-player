import React from "react";
import { Link } from "react-router-dom";
import albums from "../../data/albums.json";
import { albumImgs } from "../../data/imgs/imgArray";
import topFive from "../../utils";

const AlbumNav = () => {
  const topAlbums = topFive(albums);
  let nameArr = albumImgs.map((value) => value.name);
  return (
    <nav className={`navbar albums`}>
      <h1>{"albums"}</h1>
      {topAlbums.map((item) => (
        <Link to={`/album/${item.name}`} key={item.name}>
          <img
            className="album-cover"
            src={albumImgs[nameArr.indexOf(item.cover)].img}
            alt={item.name}
          />
        </Link>
      ))}
    </nav>
  );
};

export default AlbumNav;

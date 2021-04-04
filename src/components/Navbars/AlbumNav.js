import React from "react";
import { Link } from "react-router-dom";
import albums from "../../data/albums.json";
import { albumImgs } from "../../data/imgs/imgArray";

const AlbumNav = () => {
  let nameArr = albumImgs.map((value) => value.name);
  return (
    <nav className={`navbar albums`}>
      <h1>{"albums"}</h1>
      {albums.map(
        (item, index) =>
          index < 5 && (
            <Link to={`/album/${item.name}`}>
              <img
                className="album-cover"
                src={albumImgs[nameArr.indexOf(item.cover)].img}
                alt={item.name}
              />
            </Link>
          )
      )}
    </nav>
  );
};

export default AlbumNav;

import React from "react";
import { Link } from "react-router-dom";
import artists from "../data/artists.json";
import albums from "../data/albums.json";
import { albumImgs } from "../data/imgs/imgArray";

const ListItem = ({ type, item, getImage }) => {
  return (
    <div className={`list-item ${type}`}>
      <Link
        className={"link"}
        to={`/${type.slice(0, type.length - 1)}/${item.ID}`}
        key={item.name}
      >
        <img className={`${type} cover`} src={getImage()} alt={item.name} />
        <br />
        <h3>{item.name}</h3>
      </Link>

      {type === "songs" && (
        <Link
          className={"link"}
          to={`/album/${albums.find((album) => album.name === item.album).ID}`}
        >
          <br />
          <h4>{item.album}</h4>
        </Link>
      )}
      {(type === "albums" || type === "songs") && (
        <Link
          className={"link"}
          to={`/artist/${
            artists.find((artist) => artist.name === item.artist).ID
          }`}
        >
          <br /> <h4>{item.artist}</h4>
        </Link>
      )}
    </div>
  );
};

export default ListItem;

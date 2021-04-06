import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ type, item, getImage }) => {
  return (
    <div className={`list-item ${type}`}>
      <Link
        className={"link"}
        to={`/${type.slice(0, type.length - 1)}/${item.name}`}
        key={item.name}
      >
        <img
          className={`${type} cover`}
          src={getImage(type, item)}
          alt={item.name}
        />
        <br />
        <h3>{item.name}</h3>
      </Link>

      {type === "songs" && (
        <Link className={"link"} to={`/album/${item.album}`}>
          <br />
          <h4>{item.album}</h4>
        </Link>
      )}
      {(type === "albums" || type === "songs") && (
        <Link className={"link"} to={`/artist/${item.artist}`}>
          <br /> <h4>{item.artist}</h4>
        </Link>
      )}
    </div>
  );
};

export default ListItem;

import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ type, item, getImage }) => {
  return (
    <div>
      <Link
        to={`/${type.slice(0, type.length - 1)}/${item.name}`}
        key={item.name}
      >
        <img
          className={`${type}-cover`}
          src={getImage(type, item)}
          alt={item.name}
        />
        <h3>{item.name}</h3>
        {type === "songs" && <h4>{item.album}</h4>}
        {(type === "albums" || type === "songs") && <h4>{item.artist}</h4>}
      </Link>
    </div>
  );
};

export default ListItem;
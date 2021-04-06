import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ type, item, getImage }) => {
  return (
    <Link
      to={`/${type.slice(0, type.length - 1)}/${item.name}`}
      key={item.name}
    >
      <img
        className={`${type}-cover`}
        src={getImage(type, item)}
        alt={item.name}
      />
    </Link>
  );
};

export default ListItem;

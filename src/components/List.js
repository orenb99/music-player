import React from "react";
import { Link } from "react-router-dom";
import songs from "../data/songs.json";
import playlists from "../data/playlists.json";
import artists from "../data/artists.json";
import albums from "../data/albums.json";
import { artistImgs, albumImgs, playlistImgs } from "../data/imgs/imgArray";

function topFive(list) {
  list.sort((a, b) => b.views - a.views);
  return list.slice(0, 5);
}

const List = ({ type }) => {
  let typeList = [];
  let imgArr = [];
  if (type === "artists") {
    typeList = artists;
    imgArr = artistImgs;
  } else if (type === "playlists") {
    imgArr = playlistImgs;
    typeList = playlists;
  } else {
    imgArr = albumImgs;
    if (type === "songs") typeList = songs;
    else typeList = albums;
  }
  return (
    <div className={`${type} container`}>
      <h1>{type}</h1>
      {topFive(typeList).map((item) => (
        <Link
          to={`/${type.slice(0, type.length - 1)}/${item.name}`}
          key={item.name}
        >
          <img
            className={`${type}-cover`}
            src={
              type === "songs"
                ? imgArr.find(
                    (value) =>
                      value.name ===
                      albums.find((value) => value.name === item.album).cover
                  ).img
                : imgArr.find((value) => value.name === item.cover).img
            }
            alt={item.name}
          />
        </Link>
      ))}
    </div>
  );
};

export default List;

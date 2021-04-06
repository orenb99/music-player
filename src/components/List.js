import React, { useState, useEffect } from "react";
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
function calcViews(type) {
  let list;
  if (type === "albums") list = albums;
  else if (type === "artists") list = artists;
  for (let item of list) {
    let filteredSongs = songs.filter(
      (value) => value[type.slice(0, type.length - 1)] === item.name
    );
    item.views = filteredSongs
      .map((value) => value.views)
      .reduce((acc, current) => acc + current);
  }
}
const List = ({ type }) => {
  const [typeList, setTypeList] = useState([]);
  const [imgArr, setImgArr] = useState([]);
  useEffect(() => {
    calcViews("artists");
    calcViews("albums");
    if (type === "artists") {
      setTypeList(artists);
      setImgArr(artistImgs);
    } else if (type === "playlists") {
      setImgArr(playlistImgs);
      setTypeList(playlists);
    } else {
      setImgArr(albumImgs);
      if (type === "songs") setTypeList(songs);
      else setTypeList(albums);
    }
  }, []);
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

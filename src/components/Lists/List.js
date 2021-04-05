import React from "react";
import { Link } from "react-router-dom";
import songs from "../../data/songs.json";
import playlists from "../../data/playlists.json";
import artists from "../../data/artists.json";
import albums from "../../data/albums.json";
import { artistImgs, albumImgs, playlistImgs } from "../../data/imgs/imgArray";

function topFive(list) {
  let viewsArray = list.map((item) => item.views);
  viewsArray.sort((a, b) => b - a);
  viewsArray = viewsArray.slice(0, 5);
  return list.filter((value) => viewsArray.includes(value.views));
}

const List = ({ type }) => {
  let typeList = [];
  let nameArr = [];
  let imgArr = [];
  if (type === "artists") {
    typeList = artists;
    nameArr = artistImgs.map((value) => value.name);
    imgArr = artistImgs;
  } else if (type === "playlists") {
    imgArr = playlistImgs;
    typeList = playlists;
    nameArr = playlistImgs.map((value) => value.name);
  } else {
    nameArr = albumImgs.map((value) => value.name);
    imgArr = albumImgs;
    if (type === "songs") typeList = songs;
    else typeList = albums;
  }
  return (
    <div className={`${type} container`}>
      <h1>{type}</h1>
      {typeList.map((item) => (
        <Link
          to={`/${type.slice(0, type.length - 1)}/${item.name}`}
          key={item.name}
        >
          {/* <img
            className={`${type}-cover`}
            src={
              type === "songs"
                ? imgArr[
                    nameArr.indexOf(
                      albums.find((value) => value.name === item.album).cover
                    )
                  ].img
                : imgArr[nameArr.indexOf(item.cover)].img
            }
            alt={item.name}
          /> */}
          {/* {console.log(albums.find((value) => value.name === item.album))} */}
          {console.log(item.album)}
        </Link>
      ))}
    </div>
  );
};

export default List;

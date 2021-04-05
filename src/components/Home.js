import React from "react";
import SongList from "./Lists/SongList";
import ArtistList from "./Lists/ArtistList";
import PlaylistList from "./Lists/PlaylistList";
import AlbumList from "./Lists/AlbumList";
import { Link } from "react-router-dom";
import List from "./Lists/List";

const Home = () => (
  <div>
    <List type={"albums"} />
    <List type={"artists"} />
  </div>
);

export default Home;

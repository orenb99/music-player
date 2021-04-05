import React from "react";
import SongList from "./Lists/SongList";
import ArtistList from "./Lists/ArtistList";
import PlaylistList from "./Lists/PlaylistList";
import AlbumList from "./Lists/AlbumList";
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <SongList />
    <AlbumList />
    <ArtistList />
    <PlaylistList />
  </div>
);

export default Home;

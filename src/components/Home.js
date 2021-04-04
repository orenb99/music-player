import React from "react";
import SongNav from "./Navbars/SongNav";
import ArtistNav from "./Navbars/ArtistNav";
import PlaylistNav from "./Navbars/PlaylistNav";
import AlbumNav from "./Navbars/AlbumNav";
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <SongNav />
    <AlbumNav />
    <ArtistNav />
    <PlaylistNav />
  </div>
);

export default Home;
